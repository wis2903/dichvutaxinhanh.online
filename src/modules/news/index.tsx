import React from 'react';
import Wrapper from '../wrapper';

// resources
import TravelImage from '../../resources/images/travel.jpeg';
import RiverImage from '../../resources/images/river.jpeg';
import CarImage from '../../resources/images/car12.jpeg';
import ThiImage from '../../resources/images/thi.jpeg';

// styles
import styles from './styles.module.scss';

// interfaces
interface NewsProps {
    containerRef?: React.RefObject<HTMLDivElement>
}

// main
const News = ({ containerRef }: NewsProps): JSX.Element => {
    return (
        <div className={styles.container} ref={containerRef}>
            <Wrapper className={styles.wrapper}>
                <h3>Tin tức và khuyến mại</h3>

                <div className={styles.block}>
                    <div
                        className={styles.image}
                        style={{
                            backgroundImage: `url(${RiverImage})`
                        }}
                    />
                    <div className={styles.label}>Nhận ưu đãi khi đặt xe nhân dịp 8/3.</div>
                    <div className={styles.desc}>
                        Nhiều ưu đãi nhân dịp 8/3 cho các cặp đôi đặt xe đi du lịch. Nhanh tay để không bỏ lỡ cơ hội.
                    </div>
                </div>

                <div className={styles.block}>
                    <div
                        className={styles.image}
                        style={{
                            backgroundImage: `url(${TravelImage})`
                        }}
                    />
                    <div className={styles.label}>Giảm giá các chuyến xe đi đường dài nhân dịp khai xuân 2022.</div>
                    <div className={styles.desc}>
                        <span className={styles.name}>Taxi Quận 9 giá rẻ</span> giảm <span>10%</span> cho khách đặt xe đi đường dài, liên tỉnh đến hết <span>8/3/2022</span>.
                    </div>
                </div>

                <div className={styles.block}>
                    <div
                        className={styles.image}
                        style={{
                            backgroundImage: `url(${ThiImage})`
                        }}
                    />
                    <div className={styles.label}>Tiếp tục tuyển tài xế, nhân viên phục vụ xe đường dài 2022.</div>
                    <div className={styles.desc}>
                        Taxi Quận 9 giá tốt vẫn liên tục nhận hồ sơ tuyển lái xe, nhân viên phục vụ xe đường dài trong năm 2022, các anh em lái xe có nhu cầu vui lòng liên hệ tổng đài để được hỗ trợ.
                    </div>
                </div>

                <div className={styles.block}>
                    <div
                        className={styles.image}
                        style={{
                            backgroundImage: `url(${CarImage})`
                        }}
                    />
                    <div className={styles.label}>Bổ sung hàng loạt xe chất lượng cao.</div>
                    <div className={styles.desc}>
                        Quý 1 đầu năm 2022, Taxi Quận 9 giá tốt mới đầu tư bổ sung và thay thế rất nhiều xe mới, đảm bảo chất lượng tuyệt đối cho từng chuyến đi của khách hàng.
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};

export default News;