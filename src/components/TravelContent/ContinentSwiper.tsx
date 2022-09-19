import { Box, Button, Image, Link, Text } from '@chakra-ui/react';
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
            <Link href='/continents/europe'>
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
                    className={`${styles.swiper}`}
                >
                    <SwiperSlide className={`${styles['swiper-slide']}`}>
                        <Image src='\continentSlides\europe.svg' />
                        <Box
                            display='flex' flexDirection='column' fontWeight='700' textDecoration='none'
                        >
                            <Text
                                fontSize='5xl'
                            >
                                Europa
                            </Text>
                            <Text fontSize='2xl' >
                                O continente mais antigo.
                            </Text>
                        </Box>
                    </SwiperSlide>
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