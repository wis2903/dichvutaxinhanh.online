import React from 'react';
import ENVS from '../../envs';
import { animateScroll } from '../../helpers/dom.helpers';

// resources
import XeImage from '../../resources/images/lua.jpeg';

// modules
import Header from '../../modules/header';
import Booking from '../../modules/booking';
import Services from '../../modules/services';
import News from '../../modules/news';
import Footer from '../../modules/footer';
import ReCall from '../../modules/recall';
import Carousel from '../../modules/carousel';
import Cars from '../../modules/cars';
import Call from '../../modules/call';
import Tours from '../../modules/tours';
import Menu from '../../modules/menu';
import Wrapper from '../../modules/wrapper';

// styles
import styles from './styles.module.scss';

// main
const Home = (): JSX.Element => {
    const bookingRef = React.useRef<HTMLDivElement>(null);
    const servicesRef = React.useRef<HTMLDivElement>(null);
    const newsRef = React.useRef<HTMLDivElement>(null);
    const carsRef = React.useRef<HTMLDivElement>(null);

    const scrollTo = (element: HTMLDivElement): void => {
        const initialPosition = window.scrollY;

        if (element) {
            animateScroll({
                targetPosition: element.offsetTop,
                initialPosition,
                duration: 1200,
            });
        }
    };

    const handleScrollToCars = (): void => {
        if (carsRef.current) {
            scrollTo(carsRef.current);
        }
    };

    const handleScrollToBooking = (): void => {
        if (bookingRef.current) {
            scrollTo(bookingRef.current);
        }
    };

    const handleScrollToServices = (): void => {
        if (servicesRef.current) {
            scrollTo(servicesRef.current);
        }
    };

    const handleScrollToNews = (): void => {
        if (newsRef.current) {
            scrollTo(newsRef.current);
        }
    };

    const setupGoogleMapAutoComplete = (): void => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://maps.googleapis.com/maps/api/js?key=${ENVS.googleMapAutoCompleteApiKey}&libraries=places`;
        document.head.appendChild(script);
    };

    React.useEffect(() => {
        setupGoogleMapAutoComplete();
    }, []);

    return (
        <div className={styles.container}>
            <img className={styles.background} src={XeImage} alt="" />

            <div className={styles.wrapper}>
                <Header onClickAction={handleScrollToBooking} />
                <Menu
                    onClickBooking={handleScrollToBooking}
                    onClickIntro={handleScrollToServices}
                    onClickNews={handleScrollToNews}
                    onClickCars={handleScrollToCars}
                />
                <Carousel autoplay />
                <Wrapper hasShadow className={styles.bookingContainer} containerRef={bookingRef}>
                    <Booking />

                    <div className={styles.introduction}>
                        <img className={styles.decor} src={XeImage} alt="" />

                        <h3>C??c d???ch v??? cung c???p</h3>

                        <div className={styles.item}>
                            <span />
                            Cung c???p d???ch v??? <span>xe kh??ch</span>, <span>4 ch???</span>, <span>7 ch???</span>, <span>16 ch???</span> ...
                        </div>

                        <div className={styles.item}>
                            <span />
                            Cung c???p d???ch v??? <span>taxi s??n bay</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Cung c???p d???ch v??? taxi <span>c??c t???nh th??nh</span> nhi???u khu v???c.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Cam k???t <span>gi?? c??? ph???i ch??ng</span>, c???nh tranh nh???t th??? tr?????ng.
                        </div>

                        <div className={styles.item}>
                            <span />
                            T??i x??? ph???c v??? <span>t???n t??nh</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Xe ????n <span>nhanh ch??ng, g???i l?? c??</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            ??u ????i khi <span>??i t???nh, ???????ng d??i</span>.
                        </div>

                        <div className={styles.item}>
                            <span />
                            Kh??ng ph?? ph??t sinh.
                        </div>

                        <div className={styles.item}>
                            <span />
                            C??c d??ng xe <span>?????m b???o ch???t l?????ng</span>.
                        </div>
                    </div>
                </Wrapper>
                <ReCall onClick={handleScrollToBooking} />
                <Cars containerRef={carsRef} />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Nh???n b??o gi?? chi ti???t c??c lo???i xe cho chuy???n ??i c???a b???n"
                    buttonLabel="Nh???n b??o gi??"
                />
                <Tours onClickBooking={handleScrollToBooking} />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="Nh???n b??o gi?? chi ti???t c??c lo???i xe cho chuy???n ??i c???a b???n"
                    buttonLabel="Nh???n b??o gi??"
                />
                <Services containerRef={servicesRef} />
                <ReCall
                    onClick={handleScrollToBooking}
                    title="B???t ?????u ?????t xe ????? nh???n th??m nhi???u d???ch v??? ??u ????i"
                    buttonLabel="B???t ?????u ?????t xe"
                />
                <News containerRef={newsRef} />
                <ReCall onClick={handleScrollToBooking} />
                <Footer
                    onClickBooking={handleScrollToBooking}
                    onClickIntro={handleScrollToServices}
                    onClickNews={handleScrollToNews}
                />
                <Call />
            </div>
        </div>
    );
};

export default Home;