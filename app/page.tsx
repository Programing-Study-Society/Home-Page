"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";

import { NewsCard } from "@components/Card/card-components";
import "./root-page.css";

const IMAGE_PATH = "/image/";

const images = ["2022-comiket.jpg", "2023-oecu-fes.jpg", "2023-summer.jpg"];

const activities = [
  {
    title: "コミケ出展",
    details: "ホラーゲームを1年間制作し、コミケにて出展しました！",
    date: "2021/10/10",
    imageUrl: undefined,
  },
  {
    title: "コミケ出展",
    details: "ホラーゲームを1年間制作し、コミケにて出展しました！",
    date: "2021/10/10",
    imageUrl: undefined,
  },
  {
    title: "コミケ出展",
    details: "ホラーゲームを1年間制作し、コミケにて出展しました！",
    date: "2021/10/10",
    imageUrl: undefined,
  },
  {
    title: "コミケ出展",
    details: "ホラーゲームを1年間制作し、コミケにて出展しました！",
    date: "2021/10/10",
    imageUrl: undefined,
  },
  {
    title: "コミケ出展",
    details: "ホラーゲームを1年間制作し、コミケにて出展しました！",
    date: "2021/10/10",
    imageUrl: undefined,
  },
  {
    title: "コミケ出展",
    details: "ホラーゲームを1年間制作し、コミケにて出展しました！",
    date: "2021/10/10",
    imageUrl: undefined,
  },
];

let now: Date = new Date();

const news = [
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
  },
  {
    url: "/",
    title: "初めまして！",
    date:
      now.getFullYear().toString() +
      "/" +
      (now.getMonth() + 1).toString() +
      "/" +
      now.getDate().toString(),
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
              section-title
              about-us_title
            "
          >
            プログラミング研究会とは
          </h2>
          <p
            className="
              about-us_text
              text-center
            "
          >
            プログラムについて学びあい交流を深めていくサークルです！
          </p>
          <div
            className="
              active-contents
            "
          >
            <h2
              className="
                section-title
                active-contents_title
              "
            >
              活動内容
            </h2>
            <ul>
              <li>勉強会</li>
              <li>プロジェクト活動</li>
              <li>コミケ参加</li>
              <li>大学祭参加</li>
            </ul>
            <div
              className="
                active-contents_etc-text
                text-right
                mb-2
                mr-4
              "
            >
              etc...
            </div>
          </div>
          <div className="activity-results">
            <h3
              className="
                section-title
                activity-results_title
            "
            >
              活動実績
            </h3>
            <div
              className="
                activity-results_list
                flex
                flex-wrap
                gap-4
                justify-center
              "
            >
              {activities.map((activity, index) => {
                return (
                  <NewsCard
                    key={index}
                    title={activity.title}
                    details={activity.details}
                    date={activity.date}
                    imageUrl={activity.imageUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="
            active-date
            mt-40
          "
        >
          <h2
            className="
              text-center
              section-title
            "
          >
            活動日
            <br />
          </h2>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=proken0603%40gmail.com&ctz=UTC"
            className="
              google-calendar
              border-0
              ml-auto
              mr-auto
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
