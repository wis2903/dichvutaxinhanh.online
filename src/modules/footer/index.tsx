import React from 'react';

// components
import Button from '../button';
import Booking from '../booking';

// styles
import styles from './styles.module.scss';
import Wrapper from '../wrapper';
import { isMobile } from 'react-device-detect';
import ENVS from '../../envs';

// interfaces
interface FooterProps {
    onClickBooking?: () => void,
    onClickIntro?: () => void,
    onClickNews?: () => void,
}

// main
const Footer = ({
    onClickBooking,
    onClickIntro,
    onClickNews,
}: FooterProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <Wrapper className={styles.wrapper}>
                <div className={styles.logo}>
                    <div className={styles.name}>Taxi Giá tốt</div>

                    {
                        !isMobile
                        &&
                        <div className={styles.phone}>
                            <a href={`tel:${ENVS.phone.value}`}>
                                {ENVS.phone.label}
                            </a>
                        </div>
                    }
                </div>

                <div className={styles.menu}>
                    <Button onClick={onClickBooking}>Đặt xe</Button>
                    <Button onClick={onClickIntro}>Giới thiệu</Button>
                    <Button onClick={onClickNews}>Thông tin khuyến mại</Button>
                </div>

                <div className={styles.phones}>
                    <div>Hotline: <a href={`tel:${ENVS.phone.value}`}>{ENVS.phone.label}</a></div>
                    <div>CSKH1: <a href="tel:+84869838738">0869.838.738</a></div>
                    <div>CSKH2: <a href="tel:+84843719719">0943.719.719</a></div>
                </div>

                <div className={styles.slogan}>
                    ĐC: Số 320, Quận 2, TP Hồ Chí Minh.
                </div>

                <div className={styles.bookingContainer}>
                    <Booking />
                </div>
            </Wrapper>
        </div>
    );
};

export default Footer;