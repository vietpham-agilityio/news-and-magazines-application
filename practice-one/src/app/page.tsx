import { Suspense } from 'react';

// static images
import Images from '@/constants/images';

// mocks data
import { listSlider } from '@/mocks';

// components
import Image from 'next/image';
import {
  Carousel,
  CardPost,
  CardSingle,
  TitleSection,
  CardPostSkeleton,
} from '@/ui/components';
import { HashtagGroup, PostsByAttribute } from '@/ui/features';

// types
import { PostVariant, CardType } from '@/types';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* category */}
      <section className="category container bg-white-90 items-center justify-center rounded-xl hidden xl:flex lg:mt-11">
        <HashtagGroup />
      </section>
      {/* fantastic posts */}
      <section className="container hidden items-center gap-6 bg-white-100 h-[452px] mt-9 mb-12.5 sm:flex lg:my-15">
        {/* first card */}
        <div className="hidden xl:block h-full">
          <CardSingle
            id="1"
            title="Go Home After Long Time"
            content="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. "
            imageSrc="https://images.unsplash.com/photo-1716223996696-ad6252a7fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          />
        </div>
        {/* second card */}
        <div className="hidden xl:block h-full">
          <CardSingle
            id="2"
            title="Street Way To The Conner"
            content="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. "
            imageSrc="https://images.unsplash.com/photo-1716223996699-9738f0f12805?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          />
        </div>
        {/* slide card */}
        <div className="h-full flex flex-1 items-center justify-center ">
          <Carousel listSlider={listSlider} />
        </div>
      </section>
      {/* popular posts */}
      <section className="popular-posts container flex flex-col justify-between bg-white-100 h-459 mt-7.5 sm:my-0">
        <TitleSection title="Popular Posts" />
        <Suspense fallback={<CardPostSkeleton />}>
          <PostsByAttribute
            attribute={PostVariant.POPULAR}
            cardType={CardType.VERTICAL}
          />
        </Suspense>
      </section>
      {/* scheduler */}
      <section className="w-full flex items-center justify-center my-10 sm:mt-9 sm:mb-12.5 lg:my-17.5">
        <Image
          src={Images.ScheduleLargeImage}
          alt="schedule"
          className="hidden lg:block"
          layout="responsive"
          style={{
            width: 'full',
            height: 'auto',
          }}
        />
        <Image
          src={Images.ScheduleMediumImage}
          alt="schedule"
          className="hidden sm:block lg:hidden"
          layout="responsive"
          style={{
            width: 'full',
            height: 'auto',
          }}
        />
        <Image
          src={Images.ScheduleSmallImage}
          alt="schedule"
          className="sm:hidden"
          layout="responsive"
          style={{
            width: 'full',
            height: 'auto',
          }}
        />
      </section>
      {/* new posts */}
      <section className="new-posts container flex flex-col justify-between bg-white-100">
        <div className="mb-7">
          <TitleSection title="New Posts" />
        </div>
        <div className="grid grid-cols-12 grid-rows-3 gap-6 m-auto overflow-hidden">
          {/* card first */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost authorId="1" />
          </div>
          {/* card secondary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost authorId="1" />
          </div>
          {/* card tertinary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost authorId="1" />
          </div>
          {/* card quaternary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost authorId="1" />
          </div>
          {/* card quaternary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost authorId="1" />
          </div>
          {/* card quaternary */}
          <div className="col-span-12 2xl:col-span-6">
            <CardPost authorId="1" />
          </div>
        </div>
      </section>
      {/* latest videos */}
      <section className="latest-videos w-full flex flex-col justify-between bg-primary-75 h-[644px] my-10 py-16 sm:my-12.5 lg:my-17.5">
        <div className="container mx-auto">
          <TitleSection title="Latest Videos" />

          <div className="card-group grid grid-cols-12 grid-rows-2 gap-6 mt-[30px] overflow-hidden">
            {/* card first */}
            <div className="row-span-2 col-span-6 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card secondary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card tertinary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card quaternary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
            {/* card quaternary */}
            <div className="h-[210px] col-span-3 bg-dark-25 flex items-center justify-center">
              <p>Latest video</p>
            </div>
          </div>
        </div>
      </section>
      {/* trendy posts */}
      <section className="trendy-posts container flex flex-col justify-between bg-white-100 h-459 overflow-hidden">
        <TitleSection title="Trendy Posts" />
        <Suspense fallback={<CardPostSkeleton />}>
          <PostsByAttribute
            attribute={PostVariant.TRENDY}
            cardType={CardType.VERTICAL}
          />
        </Suspense>
      </section>
      {/* weather */}
      <section className="weather w-full flex items-center justify-center bg-white-90 p-16 my-10 sm:mt-7.5 sm:mb-12.5 lg:my-17.5">
        <div className="container mx-auto">
          <div className="card-group grid grid-cols-12 grid-rows-2 gap-6">
            {/* card first */}
            <div className="row-span-2 col-span-6 bg-white-90 hidden lg:block rounded-xl">
              <Image
                src={Images.WeatherWidget}
                alt="weather widget"
                layout="responsive"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            {/* card secondary */}
            <div className="bg-white-90 rounded-xl col-span-12 row-span-2 block sm:hidden lg:block lg:col-span-3 lg:row-span-1">
              <Image
                src={Images.CityWeatherAnkara}
                alt="weather city widget"
                layout="responsive"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            {/* card tertinary */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={Images.CityWeatherAlaska}
                alt="weather city widget"
                layout="responsive"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            {/* card quaternary */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={Images.CityWeatherParis}
                alt="weather city widget"
                layout="responsive"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            {/* card quaternary */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={Images.CityWeatherBerlin}
                alt="weather city widget"
                layout="responsive"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
            <div className="col-span-12 row-span-2 bg-white-90 rounded-xl hidden sm:block lg:hidden">
              <Image
                src={Images.CityWeatherAnkaraLarge}
                alt="weather city widget"
                layout="responsive"
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* top posts */}
      <section className="top-posts container flex flex-col justify-between bg-white-100 h-459 mb-30 sm:mb-7.5 lg:mb-25">
        <TitleSection title="Top Posts" />
        <Suspense fallback={<CardPostSkeleton />}>
          <PostsByAttribute
            attribute={PostVariant.TOP}
            cardType={CardType.VERTICAL}
          />
        </Suspense>
      </section>
    </main>
  );
}
