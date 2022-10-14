import React from "react";
import './Carousel.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Carousel = () => {
    return (
        <>
            <Swiper loop={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{delay: 5000, disableOnInteraction: false}}>
                <SwiperSlide><img alt="library in brown and red colors" src="https://64.media.tumblr.com/7e9438c99083cec98f993625d2c4b85c/640772621671d1cd-f8/s2048x3072/24990373ccf9102e1f8f92cc78e9df877230f606.jpg" id="img" /></SwiperSlide>
                <SwiperSlide><img alt="library in brown and red colors" src="https://www.passporttoeden.com/wp-content/uploads/2022/09/DarkAcademiaLibraries_TrinityCollegeLibrary-1-of-1.jpg" id="img" /></SwiperSlide>
                <SwiperSlide><img alt="library in brown and red colors" src="https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGFjYWRlbWlhfGVufDB8fDB8fA%3D%3D&w=1000&q=80" id="img" /></SwiperSlide>
            </Swiper>
        </>
    )
}
export default Carousel;