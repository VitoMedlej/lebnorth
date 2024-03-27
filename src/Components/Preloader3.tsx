"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
// import Btn from './Btn/Btn';
// import useLanguage from '@/Hooks/useLanguage';



const Preloader3 = ({res}:{res:any}) => {
    console.log('res: ', res);
    const router = useRouter()
 const [imgs,setImgs] = useState(
     [
    //  {img:'https://securytik.com/wp-content/uploads/2023/12/banner-3-1536x581.jpg',position:'centerd'},
//   {img:'https://securytik.com/wp-content/uploads/2023/12/banner-4-1536x581.jpg',position:'topd'},
//   {img:`https://securytik.com/wp-content/uploads/2023/12/Banner1-2-1536x581.jpg`,position:'topd'},
]
)
useEffect(() => {
  

    if (res) {
        setImgs(res)
    }
}, [])

//   const {text} = useLanguage()
    
    return (
        <Box
        className=''
            sx={{
                
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth: 'lg',
            minHeight:'300px',
            height:'100%',
            maxHeight:{sm:'100%',md:'500px',lg:'500px'},
            margin: '1em auto',
            // height : {xs:'100%',sm:'450px',md:'100%'},
            
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs  && imgs?.map((item:any) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item?.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                      
                            <img
            
                                className={`img contain  ${item?.position} 
                                `}
                                // ${item?.className}
                                src={`${item?.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3