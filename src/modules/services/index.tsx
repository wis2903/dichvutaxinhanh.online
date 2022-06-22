import React from 'react';
import Wrapper from '../wrapper';

// resources
import FameIcon from '../../resources/images/service.jpeg';
import SaveIcon from '../../resources/images/saved.png';
import BoxIcon from '../../resources/images/full-service.png';

// styles
import styles from './styles.module.scss';

// interfaces
interface ServicesProps {
    containerRef?: React.RefObject<HTMLDivElement>
}

// main
const Services = ({ containerRef }: ServicesProps): JSX.Element => {
    return (
        <div className={styles.container} ref={containerRef}>
            <Wrapper className={styles.wrapper}>
                <h3>Giới thiệu về dịch vụ</h3>

                <div className={styles.blocks}>
                    <div className={styles.block}>
                        <div className={styles.image} style={{
                            backgroundImage: `url(${SaveIcon})`,
                        }}></div>
                        <div className={styles.label}>Tiết kiệm</div>
                        <div className={styles.desc}>
                            Khách hàng luôn <span>biết trước chi phí, không thêm phí phát sinh</span>.
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.image} style={{
                            backgroundImage: `url(${BoxIcon})`,
                        }}></div>
                        <div className={styles.label}>Trọn gói</div>
                        <div className={styles.desc}>
                            Khách hàng có thể lựa chọn <span>dịch vụ 2 chiều</span>, chi phí <span>được tính trọn gói</span> từ khi chốt hợp đồng, <span>không phí phát sinh</span>.
                        </div>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.image} style={{
                            backgroundImage: `url(${FameIcon})`,
                        }}></div>
                        <div className={styles.label}>Chuyên nghiệp</div>
                        <div className={styles.desc}>
                            Lái xe <span>an toàn, chu đáo, nhiệt tình</span>.
                        </div>
                    </div>

                    {/* <div className={styles.block}>
                        <div className={styles.image}>
                            <img src={QualityIcon} alt="Quality" />
                        </div>
                        <div className={styles.label}>Chất lượng</div>
                        <div className={styles.desc}>
                            Hệ thống xe <span>đảm bảo tiêu chuẩn, sang trọng, đầy đủ trang bị</span>.
                        </div>
                    </div> */}
                </div>
            </Wrapper>
        </div>
    );
};

export default Services;