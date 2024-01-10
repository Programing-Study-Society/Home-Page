"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

import "./root-page.css";

const IMAGE_PATH = "/image/";

const images = ["2022-comiket.jpg", "2023-oecu-fes.jpg", "2023-summer.jpg"];

let now: Date = new Date();

const news = [
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      now.getMonth().toString() +
      "/" +
      now.getDay().toString(),
  },
];

export default function Home() {
  const splideOptions = {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  const imageSize = {
    width: 4096,
    height: 3072,
  };

  return (
    <div className="home-page">
      <div className="slide">
        <Swiper {...splideOptions}>
          {images.map((image: string, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={IMAGE_PATH + image}
                  width={imageSize.width}
                  height={imageSize.height}
                  sizes={"50vw"}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  alt={image}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="scroll-allow" />
      </div>
      <div
        className="
          main-contents 
          justify-center
        "
      >
        <div
          className="
            news
            bg-gray-300
          "
        >
          <h2 className="text-2xl">お知らせ</h2>
          <ul className="news-topics">
            {news.map((ele, index) => {
              return (
                <li key={index} className="w-full">
                  <Link href={ele.url} className="w-full h-full">
                    {ele.date}　{ele.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link className="to-news-list" href="/news">
            View more...
          </Link>
        </div>
        <div
          className="
            about-us
          "
        >
          <h2
            className="
              about-us_title
            "
          >
            プログラミング研究会とは
          </h2>
          <p>
            プログラムについて学びあい交流を深めていくサークルです！
            <br />
            ・サークル内で勉強会をして学ぶ
            <br />
            ・プロジェクトを立ち上げて制作活動をする
            <br />
            といったことを普段は行っています！
          </p>
        </div>
        <div
          className="
            active-date
            flex
            justify-center
            mt-40
          "
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=proken0603%40gmail.com&ctz=UTC"
            className="
              google-calendar
              border-0
            "
            style={{ border: "0" }}
            width="800"
            height="600"
          />
        </div>
      </div>
    </div>
  );
}
