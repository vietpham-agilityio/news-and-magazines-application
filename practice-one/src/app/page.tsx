import { Suspense } from 'react';

// static images
import ImageStore from '@/constants/images';

// components
import Image from 'next/image';
import {
  Carousel,
  CardPost,
  CardSingle,
  Title,
  CardPostSkeleton,
  Typography,
  PaperPost,
  Button,
  TitleSection,
} from '@/ui/components';
import { HashtagGroup, PostsByAttribute, PostsGrid } from '@/ui/features';

// icons
import { ArrowRight, Triangle } from '@/ui/components/Icons';

// mocks data
import { listSlider } from '@/mocks';

// types
import { PostVariant, CardType, FontWeight, Size } from '@/types';
import ComponentInView from '@/utils/InView';

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
            id="15"
            title="Go Home After Long Time"
            content="Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users. "
            imageSrc="https://images.unsplash.com/photo-1716223996696-ad6252a7fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          />
        </div>
        {/* second card */}
        <div className="hidden xl:block h-full">
          <CardSingle
            id="16"
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
      <section className="popular-posts container flex flex-col bg-white-100 mt-7.5 sm:my-0">
        <TitleSection title="Popular Posts" />
        <Suspense fallback={<CardPostSkeleton />}>
          <PostsByAttribute
            attribute={PostVariant.POPULAR}
            cardType={CardType.VERTICAL}
          />
        </Suspense>
      </section>

      {/* scheduler */}
      <ComponentInView>
        <section className="w-full flex items-center justify-center my-10 sm:mt-9 sm:mb-12.5 lg:my-17.5">
          <Image
            src={ImageStore.ScheduleLargeImage}
            alt="schedule"
            className="hidden lg:block"
            style={{
              width: 'full',
              height: 'auto',
            }}
          />
          <Image
            src={ImageStore.ScheduleMediumImage}
            alt="schedule"
            className="hidden sm:block lg:hidden"
            style={{
              width: 'full',
              height: 'auto',
            }}
          />
          <Image
            src={ImageStore.ScheduleSmallImage}
            alt="schedule"
            className="sm:hidden"
            style={{
              width: 'full',
              height: 'auto',
            }}
          />
        </section>
      </ComponentInView>

      {/* new posts */}
      <ComponentInView>
        <section className="new-posts container flex flex-col justify-between bg-white-100">
          <div className="mb-5 sm:mb-10 flex justify-between">
            <Title title="New Posts" />
            <Button
              label="Show All"
              rightIcon={<ArrowRight />}
              textColor="text-dark-75"
              bgColor="bg-white-90"
            />
          </div>
          <PostsGrid
            attribute={PostVariant.NEW}
            cardType={CardType.HORIZONTAL}
          />
        </section>
      </ComponentInView>

      {/* latest videos */}
      <section className="latest-videos w-full flex flex-col justify-between bg-white-90 h-[445px] sm:h-[644px] my-10 py-11 sm:py-16 sm:my-12.5 lg:my-17.5">
        <div className="container mx-auto">
          <div className="mb-5 sm:mb-10 flex justify-between">
            <Title title="Latest Videos" />
          </div>
          <div className="h-[295px] sm:h-[444px] grid grid-cols-12 grid-rows-2 gap-6 overflow-hidden">
            <div className="row-span-2 col-span-12 lg:col-span-6">
              {/* Video */}
              <div className="h-full w-full relative rounded-xl flex items-center justify-center bg-transparent hover:cursor-pointer">
                <div>
                  <Image
                    fill
                    objectFit="cover"
                    className="rounded-xl absolute"
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="panel of video"
                  />
                </div>
                <div className="hidden sm:block absolute left-2 xl:left-2.5 bottom-4 p-4 w-[97%] bg-white-75 rounded-xl opacity-90">
                  <Typography
                    tag="h2"
                    textSize={Size.MD}
                    weight={FontWeight.Medium}
                    additionalClasses="text-black-100"
                  >
                    How Music Affects Your Brain (Plus 11 Artists To Listen To
                    At Work)
                  </Typography>
                  <Typography
                    tag="h3"
                    textSize={Size.XSM}
                    weight={FontWeight.Light}
                    additionalClasses="text-dark-100 h-10 w-full pr-10 leading-5 text-ellipsis overflow-hidden "
                  >
                    You’ve Read All Your Free Member-Only Stories, Become A
                    Member To Get Unlimited Access. Your Membership Fee Supports
                    The Voices You Want To Hear More From.
                  </Typography>
                </div>
                <div className="absolute flex items-center justify-center w-24 h-24 bg-white-90 opacity-85 rounded-full hover:cursor-pointer sm:w-30 sm:h-30">
                  <div className="ml-1">
                    <Triangle />
                  </div>
                </div>
              </div>
            </div>

            {/* card first */}
            <div className="h-[210px] hidden lg:grid lg:col-span-6">
              <PaperPost
                isLargePaper
                title="5 reasons why you should wrap your hands when boxing"
                content="So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them. Well, this blog is going to explain the benefits of wrapping your hands."
                alt="boxing-article"
                imageSrc="https://images.unsplash.com/photo-1622599511051-16f55a1234d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJveGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
            {/* card secondary */}
            <div className="h-[210px] hidden lg:grid lg:col-span-6">
              <PaperPost
                isLargePaper
                title="The Health Benefits and Joys of Sunlight"
                content="Sunlight is a spectrum of electromagnetic radiation that includes visible light, ultraviolet (UV) rays, and infrared radiation. Our bodies respond to these rays in various ways, producing essential vitamins and hormones that regulate numerous bodily functions. The most well-known benefit of sunlight is its role in the synthesis of vitamin D, a critical nutrient for bone health and immune function."
                alt="boxing-article"
                imageSrc="https://images.unsplash.com/photo-1717196214681-0a66168248cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzR8fHxlbnwwfHx8fHw%3D"
              />
            </div>
          </div>
        </div>
      </section>

      {/* trendy posts */}
      <ComponentInView>
        <section className="trendy-posts container flex flex-col justify-between bg-white-100 overflow-hidden">
          <TitleSection title="Trendy Posts" />
          <Suspense fallback={<CardPostSkeleton />}>
            <PostsByAttribute
              attribute={PostVariant.TRENDY}
              cardType={CardType.VERTICAL}
            />
          </Suspense>
        </section>
      </ComponentInView>

      {/* weather */}
      <section className="weather w-full flex items-center justify-center bg-white-90 p-16 my-10 sm:mt-7.5 sm:mb-12.5 lg:my-17.5">
        <div className="container mx-auto">
          <div className="card-group grid grid-cols-12 grid-rows-2 gap-6">
            {/* card first */}
            <div className="row-span-2 col-span-6 bg-white-90 hidden lg:block rounded-xl">
              <Image
                src={ImageStore.WeatherWidget}
                alt="weather widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Ankara */}
            <div className="bg-white-90 rounded-xl col-span-12 row-span-2 block sm:hidden lg:block lg:col-span-3 lg:row-span-1">
              <Image
                src={ImageStore.CityWeatherAnkara}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Alaska */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={ImageStore.CityWeatherAlaska}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Paris */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={ImageStore.CityWeatherParis}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            {/* Weather Berlin */}
            <div className="col-span-3 bg-white-90 rounded-xl hidden lg:block">
              <Image
                src={ImageStore.CityWeatherBerlin}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div className="col-span-12 row-span-2 bg-white-90 rounded-xl hidden sm:block lg:hidden">
              <Image
                src={ImageStore.CityWeatherAnkaraLarge}
                alt="weather city widget"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* top posts */}
      <ComponentInView>
        <section className="top-posts container flex flex-col justify-between bg-white-100 mb-30 sm:mb-7.5 lg:mb-25">
          <TitleSection title="Top Posts" />
          <Suspense fallback={<CardPostSkeleton />}>
            <PostsByAttribute
              attribute={PostVariant.TOP}
              cardType={CardType.VERTICAL}
            />
          </Suspense>
        </section>
      </ComponentInView>
    </main>
  );
}
