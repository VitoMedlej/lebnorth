"use client"
import React, { useEffect, useState } from 'react'
import { Box,  Container, Grid, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'
import ContactSection from './ContactSection/ContactSection'
import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import SMicons from './SMicons/SMicons'

const 
PreLoader = ({data,resImages}:any) => {

  const router= useRouter();

  // const textsArray = [
  //   {
  //     id: 1,
  //     title: text('100% Natural', '100٪ طبيعي'),
  //     desc: text(
  //       'Our honey is sourced from the purest natural environments, ensuring 100% natural goodness without any artificial additives or preservatives.',
  //       'عسلنا يأتي من أجواء طبيعية نقية، مما يضمن لك الخير الطبيعي بنسبة 100٪ دون أي إضافات صناعية أو مواد حافظة.'
  //     ),
  //   },
  //   {
  //     id: 2,
  //     title: text('Purity and Potency', 'النقاء والفعالية'),
  //     desc: text(
  //       'We carefully select our beehives in pristine locations, ensuring the purity and potency of our honey, so you experience the best benefits.',
  //       'نحن نختار خلايانا بعناية في أماكن نقية، مما يضمن نقاء وفعالية عسلنا، لتجربة فوائد متميزة.'
  //     ),
  //   },
  //   {
  //     id: 3,
  //     title: text('Expertly Formulated', 'صياغة خبيرة'),
  //     desc: text(
  //       'Our honey is expertly crafted by our team of experienced beekeepers, ensuring a premium product that delivers superior taste and quality.',
  //       'تم تصنيع عسلنا بخبرة من قبل فريق من مربي النحل ذوي الخبرة، مما يضمن لك منتجًا ممتازًا يقدم طعمًا وجودة فائقين.'
  //     ),
  //   },
  //   {
  //     id: 4,
  //     title: text('Great Value', 'قيمة عظيمة'),
  //     desc: text(
  //       'DIY CRAFTS honey provides great value for your health, offering the highest quality honey at an affordable price for you and your family.',
  //       'عسل بي أورجانيك يقدم قيمة عظيمة لصحتك، حيث يوفر عسل عالي الجودة بسعر معقول لك ولعائلتك.'
  //     ),
  //   },
  // ];
  
  
  return (
    <Box >
        <Container sx={{py:8}} className="center">
          <Typography sx={{fontWeight:800,fontSize:'1.5em'}} className='center text-center'>
            Welcome to Leb North your IT and Technology Partner.
          </Typography>
        </Container>
      <MainCarousel imgs={resImages}/>
      <Container>
        <Typography sx={{fontSize:'.9em'}}>
        Explore the Latest in Tech Innovation at Leb North | Your Gateway to a Diverse Range of Gadgets, Gizmos, and Gear | Dive into Our Extensive Collection of Smartphones, Laptops, Gaming Consoles, and More | Elevate Your Digital Lifestyle with the Hottest Tech Trends | Find Your Perfect Tech Companion Today.
        </Typography>
      </Container>

      <Container className='' sx={{maxWidth:'lg',py:8}}>
        <Typography className='center  clr text-center' sx={{fontWeight:600,fontSize:'2em'}}>
        Top Categories
        </Typography>

        <Box sx={{mt:1}} className='flex cursor pointer wrap justify-between center text-center'>
          {[1,2,3,4,5].map(i=>{
            return  <Box key={i} sx={{width:{xs:'33%',sm:'32%',md:'22%'},maxWidth:'200px'}}>
            <Box>
              <img 
               src="https://securytik.com/wp-content/uploads/2023/12/2023-12-10-00_16_20-Computer-Icons-Logos-Symbols-%E2%80%93-Free-Download-PNG-SVG-%E2%80%94-Mozilla-Firefox-300x300.png" alt="" className="img" />
              </Box>
              
              <Typography sx={{fontWeight:700}}>
                COMPUTER
              </Typography>

            </Box>
          })}
        </Box>
      </Container>
      <HomeProductCollection  products={data}/>

          <SMicons/>
          

          <Container className='' sx={{maxWidth:'lg',py:8}}>
        <Typography className='center  clr text-center' sx={{fontWeight:600,fontSize:'2em'}}>
        Top Categories
        </Typography>

        <Box sx={{mt:1}} className='flex row  wrap justify-between center text-center'>
          {[1,2,3,4,5,6,7].map(i=>{
            return  <Box key={i} sx={{width:{xs:'33%',sm:'15%',md:'15%'},maxWidth:'150px'}}>
            <Box>
              <img 
               src="https://securytik.com/wp-content/uploads/2023/12/intel-150x150.jpeg" alt="" className="img" />
              </Box>
              

            </Box>
          })}
        </Box>
      </Container>

      <Container >
        <Typography sx={{fontSize:'.9em'}} className='clr2'>
        Experience Unmatched Quality and Service at Leb North | Where Technology Meets Convenience and Affordability | Browse Through Our Curated Selection of Premium Tech Products and Accessories | From State-of-the-Art Electronics to Must-Have Gadgets

        </Typography>
        <Typography sx={{py:1.5,fontSize:'.9em'}} className='clr2'>
Experience Excellence in Every Purchase with Leb North | Where Customer Satisfaction is Our Top Priority | Benefit from Fast and Secure Online Transactions | Enjoy Hassle-Free Returns and Reliable Customer Support
        </Typography>
        <Typography sx={{fontSize:'.9em'}} className='clr2'>

Keep Pace with the Rapidly Evolving World of Technology with Leb North | Your Trusted Partner for Tech Solutions and Innovations | Gain Access to Expert Advice and Recommendations | Stay Informed with the Latest Tech News and Updates
        </Typography>
      </Container>
     
        {/* <HomeProductsCarousel data={data} Collectiontitle={''} delay={2000}/> */}
     
        {/* <Testimonials/> */}
     

     
     
    
        <ContactSection/>
  </Box>
  )
}

export default PreLoader