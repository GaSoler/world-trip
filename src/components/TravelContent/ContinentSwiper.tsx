import { Box, Button, Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./styles.module.css";

export function ContinentSwiper() {
    return (
        <Box
            maxW={1240}
            width='100%'
            maxH={450}
            height='100vh'
            mb='40px'
        >
            <Link href='https://google.com'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={styles.swiper}
            >
                <SwiperSlide className={styles['swiper-slide']}>Slide 1</SwiperSlide>
                <SwiperSlide className={styles['swiper-slide']}>Slide 2</SwiperSlide>    
                <SwiperSlide className={styles['swiper-slide']}>Slide 3</SwiperSlide>    
                <SwiperSlide className={styles['swiper-slide']}>Slide 4</SwiperSlide>    
                <SwiperSlide className={styles['swiper-slide']}>Slide 5</SwiperSlide>    
                <SwiperSlide className={styles['swiper-slide']}>Slide 6</SwiperSlide>    
            </Swiper>
            </Link>
        </Box>
    );
}