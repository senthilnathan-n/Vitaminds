import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Swiper/Swiperr.css';
import im3 from '../Images/slide1.jpg'
import im4 from '../Images/slide2.jpg'
import im5 from '../Images/slide3.jpg'
import im6 from '../Images/slide4.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swiperr = () => {
  return (
    <>
   
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1800,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide style={{height:"400px",backgroundImage:`url(${im3})`, backgroundSize:"cover",
    backgroundPosition:"center"}}>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <button className='btn' style={{marginTop:"200px", marginLeft:"550px", padding:"20px"}}>Calorie Calculator</button>
      
      
      
      </SwiperSlide>
      <SwiperSlide style={{height:"400px",backgroundImage:`url(${im4})`, backgroundSize:"cover",
    backgroundPosition:"center"}}>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <button className='btn' style={{marginTop:"200px", marginLeft:"550px", padding:"20px"}}>Diet & Nutritions</button>
      
      
      
      </SwiperSlide>
      <SwiperSlide style={{backgroundImage:`url(${im5})`, backgroundSize:"cover",
    backgroundPosition:"center",height:"400px"}}>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <button className='btn' style={{marginTop:"200px", marginLeft:"550px", padding:"20px"}}>Food Safety</button>
      
      
      
      </SwiperSlide>
      <SwiperSlide style={{height:"400px",backgroundImage:`url(${im6})`, backgroundSize:"cover",
    backgroundPosition:"center"}}>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <button className='btn' style={{marginTop:"200px", marginLeft:"550px", padding:"20px"}}>Food Receipes</button>
      
      
      
      </SwiperSlide>
     
   
      
    </Swiper>
  </>
  )
}

export default Swiperr