import './Carousel.css'
import Header from '../headbg/header.jsx'
import Card from './Card.jsx'
import about from '../assets/about.png'
import dialects from '../assets/dialects.png'
import translate from '../assets/translate.png'

//IMPORT SWIPER REACT COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';

//IMPORT SWIPER STYLES
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//IMPORT REQUIRED MODULES
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Carousel() {
    return (
        <>
            {/*ADD HEADER*/}
            <Header/>

            {/*MABUHAY! HEADER*/}
            <div class='mabuhay'>
                <h1>Mabuhay!</h1>
            </div>

            <section class="collection">

                {/*SWIPER (CAROUSEL)*/}
                <Swiper
                    initialSlide={1} //START CAROUSEL ON SECOND SLIDE
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper">

                    {/*PHILIPPINE DIALECTS CARD */}
                    <SwiperSlide className="card-slide">
                        <Card
                            image={dialects}
                            title="Philippine Dialects"
                            description="Discover more about the languages spoken across regions"
                        />
                    </SwiperSlide>

                    {/*TRANSLATE CARD */}
                    <SwiperSlide className="card-slide">
                        <Card
                            image={translate}
                            title="Translate"
                            description="Explore and understand different Filipino dialects"
                        />
                    </SwiperSlide>

                    {/*ABOUT WIKAPEDIA CARD */}
                    <SwiperSlide >
                        <Card
                            image={about}
                            title="About Wikapedia"
                            description="Discover more about the languages spoken across regions"
                        />
                    </SwiperSlide>
                </Swiper>

            </section>

        </>
    );
}

export default Carousel;