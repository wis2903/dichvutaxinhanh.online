import React from 'react';
import ENVS from '../../envs';

// resources
import PhoneIcon from '../../resources/images/phone-call.png';
import ChatIcon from '../../resources/images/chat.png';
import MessageIcon from '../../resources/images/email.png';

// styles
import styles from './styles.module.scss';
import { isMobile } from 'react-device-detect';

// main
const Call = (): JSX.Element => {
    return (
        <>
            {
                isMobile
                &&
                <a className={styles.messageContainer} href={`sms://${ENVS.phone.value}`}>
                    <img src={MessageIcon} alt="Message" />
                    Nhắn tin
                </a>
            }
            <a className={styles.zaloContainer} target="_blank" href="https://zalo.me/0349665665" rel="noreferrer">
                <img src={ChatIcon} alt="Chat" />
                Chat Zalo 1
            </a>
            <a className={`${styles.zaloContainer} ${styles.zaloContainer2}`} target="_blank" href="https://zalo.me/0943719719" rel="noreferrer">
                <img src={ChatIcon} alt="Chat" />
                Chat Zalo 2
            </a>

            {
                isMobile
                    ?
                    <a className={`${styles.callContainer} ${styles.mobile}`} href={`tel:${ENVS.phone.value}`}>
                        <span className={styles.callMainContent}>
                            <img src={PhoneIcon} alt="Phone" />
                        </span>
                        <span>Taxi</span>
                    </a>
                    :
                    <a className={`${styles.callContainer} ${styles.desktop}`} href={`tel:${ENVS.phone.value}`}>
                        <span className={styles.callMainContent}>
                            <img src={PhoneIcon} alt="Phone" />
                        </span>
                        <span>Taxi: {ENVS.phone.label}</span>
                    </a>
            }

            {
                isMobile
                    ?
                    <a className={`${styles.callContainer} ${styles.callContainer2} ${styles.mobile}`} href={'tel:+84943719719'}>
                        <span className={styles.callMainContent}>
                            <img src={PhoneIcon} alt="Phone" />
                        </span>
                        <span>Thuê xe</span>
                    </a>
                    :
                    <a className={`${styles.callContainer} ${styles.callContainer2} ${styles.desktop}`} href={'tel:+84943719719'}>
                        <span className={styles.callMainContent}>
                            <img src={PhoneIcon} alt="Phone" />
                        </span>
                        <span>Thuê xe: 0943.719.719</span>
                    </a>
            }
        </>
    );
};

export default Call;