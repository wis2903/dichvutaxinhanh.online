import React from 'react';

// resources
import XeImage from '../../resources/images/lua.jpeg';

// styles
import styles from './styles.module.scss';

// main
const Preview = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <img src={XeImage} alt="Xe"/>
            <div>Nhanh chóng, tận tình, tiết kiệm</div>
        </div>
    );
};

export default Preview;