// import React from 'react';
// import LazyLoad from 'react-lazy-load';

// export default function TopChefs() {
//   return (
//     <div>
//       <div className="text-center mb-10">
//         <h1 className="text-3xl font-bold">Senior Chef Category</h1>
//         <p className="text-[18px] mt-5 mb-5">
//           A person, who is trained in all aspects of food <br />
//           preparation, often having expertise in particular cooking or <br />{' '}
//           cuisine type, is known as a chef.
//         </p>
//       </div>
//       <div className="flex flex-wrap items-center justify-center">
//         <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg">
//           <svg
//             className="absolute bottom-0 left-0 mb-8"
//             viewBox="0 0 375 283"
//             fill="none"
//           >
//             <rect
//               x="159.52"
//               y="175"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 159.52 175)"
//               fill="#f3c06b"
//             ></rect>
//             <rect
//               y="107.48"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 0 107.48)"
//               fill="#f3c06b"
//             ></rect>
//           </svg>
//           <div className="relative flex items-center justify-center px-10 pt-10">
//             <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
//             <LazyLoad height={250}>
//               <img
//                 src="https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india1.jpg"
//                 alt=""
//               />
//             </LazyLoad>
//           </div>
//           <div className="relative px-6 pb-6 mt-6 text-white">
//             <span className="block -mb-1 opacity-75">Senior Chef</span>
//             <div className="flex justify-between">
//               <span className="block text-xl font-semibold">
//                 Sanjeev Kapoor
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-blue-500 rounded-lg shadow-lg sm:mb-0">
//           <svg
//             className="absolute bottom-0 left-0 mb-8"
//             viewBox="0 0 375 283"
//             fill="none"
//           >
//             <rect
//               x="159.52"
//               y="175"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 159.52 175)"
//               fill="#6da3fb"
//             ></rect>
//             <rect
//               y="107.48"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 0 107.48)"
//               fill="#6da3fb"
//             ></rect>
//           </svg>
//           <div className="relative flex items-center justify-center px-10 pt-10">
//             <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
//             <img
//               className="relative w-40"
//               src="https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india6.jpg"
//               alt="shopping"
//             />
//           </div>
//           <div className="relative px-6 pb-6 mt-6 text-white">
//             <span className="block -mb-1 opacity-75">Senior Chef</span>
//             <div className="flex justify-between">
//               <span className="block text-xl font-semibold">Hari Nayak</span>
//             </div>
//           </div>
//         </div>
//         <div className="relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
//           <svg
//             className="absolute bottom-0 left-0 mb-8"
//             viewBox="0 0 375 283"
//             fill="none"
//           >
//             <rect
//               x="159.52"
//               y="175"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 159.52 175)"
//               fill="#a17cf3"
//             ></rect>
//             <rect
//               y="107.48"
//               width="152"
//               height="152"
//               rx="8"
//               transform="rotate(-45 0 107.48)"
//               fill="#a17cf3"
//             ></rect>
//           </svg>
//           <div className="relative flex items-center justify-center px-10 pt-10">
//             <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
//             <img
//               className="relative w-40"
//               src="https://static.javatpoint.com/top10-technologies/images/top-10-chefs-in-india9.jpg"
//               alt="shopping"
//             />
//           </div>
//           <div className="relative px-6 pb-6 mt-6 text-white">
//             <span className="block -mb-1 opacity-75">Senior Chef</span>
//             <div className="flex justify-between">
//               <span className="block text-xl font-semibold">Saransh Goila</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import './TopChefs.css';

export default function CardSlider({ categories }) {
  return (
    <div>
      <div className="my-container">
        <h1 className="text-5xl font-extrabold text-center mb-10 ">
          Popular Food
        </h1>
        <Swiper
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
          className="swiper_container"
        >
          <SwiperSlide>
            <img
              // className="outline outline-offset-2 hover:outline-pink-500"
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
            <img src="https://i.ibb.co/wCZKQHm/samosas.jpg" alt="slide_image" />
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
            <img src="https://i.ibb.co/ySvsnqf/biryani.jpg" alt="slide_image" />
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
    </div>
  );
}
