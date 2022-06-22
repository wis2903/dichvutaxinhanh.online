import React from 'react';
import ENVS from '../../envs';
import { isMobile } from 'react-device-detect';

// modules
import Button from '../button';
import Wrapper from '../wrapper';

// styles
import styles from './styles.module.scss';

// interfaces
interface HeaderProps {
    onClickAction?: () => void
}

// main
const Header = ({ onClickAction }: HeaderProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <Wrapper className={styles.wrapper}>
                <div className={styles.logo}>
                    <div className={styles.name}>
                        <span>Taxi<span> Giá tốt</span></span>
                    </div>
                    <div className={styles.slogan}>
                        Chuyên dịch vụ taxi giá tốt
                    </div>
                </div>

                {
                    isMobile
                        ?
                        <a href={`tel:${ENVS.phone.value}`}>
                            Gọi xe ngay
                        </a>
                        :
                        <Button onClick={onClickAction}>
                            Đặt xe ngay
                        </Button>
                }
            </Wrapper>
        </div>
    );
};

export default Header;