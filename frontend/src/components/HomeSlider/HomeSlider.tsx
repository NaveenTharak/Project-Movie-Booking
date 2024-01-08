import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeSlider = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Check if running on the client side before accessing the window object
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []); // Run this effect only once when the component mounts

  const banners = [
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693561351496_motogpsepdesktop.jpg',
    },
    {
      imgUrl: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1693472198837_iccdesktop.jpg',
    },
  ];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <Image
            src={banner.imgUrl}
            alt=""
            width={width}
            height={height / 2}
            style={{
              objectFit: 'cover',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
