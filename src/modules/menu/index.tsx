import React from 'react';

// resources
import XeImage from '../../resources/images/lua.jpeg';
import Button from '../button';
import Wrapper from '../wrapper';

// styles
import styles from './styles.module.scss';

// interfaces
interface IMenuProps {
    onClickBooking?: () => void,
    onClickIntro?: () => void,
    onClickNews?: () => void,
    onClickCars?: () => void,
}

// main
const Menu = ({onClickBooking, onClickIntro, onClickNews, onClickCars}: IMenuProps): JSX.Element => {
    return (
        <div className={styles.container}>
            <img src={XeImage} alt="Xe"/>
            <Wrapper className={styles.wrapper}>
                <Button onClick={onClickBooking}>Đặt xe</Button>
                <Button onClick={onClickCars}>Giới thiệu các loại xe</Button>
                <Button onClick={onClickIntro}>Giới thiệu dịch vụ</Button>
                <Button onClick={onClickNews}>Tin tức và khuyến mãi</Button>
            </Wrapper>
        </div>
    );
};

export default Menu;