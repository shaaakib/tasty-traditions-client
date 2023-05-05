import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './TopRecipes.css';
import LazyLoad from 'react-lazy-load';

export default function TopRecipes() {
  return (
    <div>
      <LazyLoad>
        <div className="my-container ">
          <h1 className="text-5xl font-extrabold text-center mb-10 ">
            Popular Food
          </h1>
          <Swiper
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   640: {
            //     slidesPerView: 2,
            //   },
            //   768: {
            //     slidesPerView: 3,
            //   },
            // }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container "
          >
            <SwiperSlide>
              <img
                className=""
                src="https://i.ibb.co/WnvWCNN/malai-kofta.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                Malai Kofta
              </h1>
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://i.ibb.co/n3YfHNW/tandoori-chicken.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Tandoori Chicken
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/wCZKQHm/samosas.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Samosas
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/K5d3ZCT/aloo-gobi.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Aloo Gobi
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/ZLH5wnZ/dum-aloo.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Dum Aloo
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/V2q99tq/chole-bhature.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Chole Bhature
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/ySvsnqf/biryani.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Biryani
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/SfZTQh0/butter-chicken.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Butter Chicken
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/7rdTN23/saag-paneer.jpg"
                alt="slide_image"
              />
              <h1 className="text-white uppercase text-center text-3xl font-bold relative bottom-16 ">
                {' '}
                Saag Paneer
              </h1>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </LazyLoad>
    </div>
  );
}
