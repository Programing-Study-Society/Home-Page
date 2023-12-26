"use client";

import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Autoplay, Pagination } from 'swiper/modules'

import "./root-page.css"

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

  const imageSize = {
    width: 4096,
    height: 3072
  }

  return (
    <div className="home-page">
      <div className="slide">
        <Swiper {...splideOptions}>
          {images.map((image:string, index:number) => {
            return (
              <SwiperSlide key={index}>
                <Image 
                  src={IMAGE_PATH+image}
                  width={imageSize.width}
                  height={imageSize.height}
                  sizes={"70vw"}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  alt={image}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="main-contents">
        <div className="circle-name w-full">
          <h1 className="text-7xl text-center">プログラミング研究会</h1>
        </div>
      </div>
    </div>
  )
}
