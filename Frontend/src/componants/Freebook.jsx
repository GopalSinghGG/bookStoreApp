// eslint-disable-next-line no-unused-vars
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";
import list from '../../public/list.json'
import Card from './Card';


function Freebook() {
    const filterdata=list.filter((data)=>data.category==="free")
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }
    ]
  };

   
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
       <div>
        <h2 className='font-semibold text-xl pb-2'>Free Offered Book</h2>
            <p>Font files available from Google Fonts, and a public issue tracker for all things Google Fonts</p>
       </div>
   
    <div>
    <Slider {...settings} >
       {filterdata.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook