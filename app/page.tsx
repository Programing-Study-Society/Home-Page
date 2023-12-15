"use client";

import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Autoplay, Pagination } from 'swiper/modules'

const IMAGE_PATH = "/image/"

const images = [
  "2022-comiket.jpg",
  "2023-oecu-fes.jpg",
  "2023-summer.jpg"
];

export default function Home(){
  const splideOptions = {
    "modules":[Pagination, Autoplay],
    "slidesPerView":1,
    "pagination":{
      "clickable": true,
    },
    "speed": 1000,
    "loop":true,
    "autoplay":{
      "delay": 2500,
      "disableOnInteraction": false,
    }
  }
  return (
    <div>
      <Swiper {...splideOptions}>
        {images.map((image:string, index:number) => {
          return (
            <SwiperSlide className="h-320" key={index}>
              <Image src={IMAGE_PATH+image} layout="responsive" height={100} width={200} alt={image}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
