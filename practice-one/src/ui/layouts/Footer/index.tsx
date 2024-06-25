// components
import Link from 'next/link';
import Image from 'next/image';
import { Button, Title, Comment, Typography } from '@/ui/components';

// icons
import { Instagram, MailBox, Twitter } from '@/ui/components/Icons';
import { ICategoryItem, FontWeight } from '@/types';

// services
import { getCategoryData, getLatestComment } from '@/services';

export const Footer = async () => {
  const { data: categoryDataResponse } = await getCategoryData({
    limit: 6,
  });

  const { data: commentDataResponse } = await getLatestComment({
    limit: 4,
  });

  return (
    <footer className="footer w-full hidden items-center justify-center bg-white-100 mb-12.5 sm:flex lg:mb-11">
      <div className="flex-1 bg-white-90 py-10 pr-6 rounded-e-[50px] mr-6 lg:mr-0 lg:pr-10">
        <div className="flex justify-center lg:justify-end pr-4 lg:pr-0">
          {/* footer content */}
          <div className="pl-6 lg:pl-10">
            <section className="w-100">
              <div className="mb-5">
                <Title title="Mega news" />
              </div>
              <p className="pr-8 lg:pr-12 h-40 text-xs text-justify font-normal text-black-75">
                Mega news delivers the latest news, insightful articles, and
                in-depth features on topics. Our mission is to keep you informed
                and entertained with high-quality content you can trust. Stay
                connected with us on social media for real-time updates, and
                subscribe to our newsletter for exclusive content and special
                offers. Thank you for choosing Mega news as your trusted source
                of information.
              </p>
            </section>
            {/* Newsletters */}
            <section className="w-100">
              <div className="mb-5">
                <Title title="Newsletters" />
              </div>
              <label htmlFor="search" className="relative mr-6 block">
                <div className="absolute left-6 top-4"></div>
                <div className="absolute right-3 top-4">
                  <MailBox />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="h-12 text-p bg-white-100 placeholder-dark-100 rounded-xl pl-3 pr-14 outline-none w-full lg:w-100"
                  placeholder="Write your email ..."
                />
              </label>
            </section>
          </div>
          {/* footer connect */}
          <div className="ml-4 lg:ml-16 2xl:ml-30">
            <section className="link-group">
              <div className="mb-5">
                <Title title="Categories" />
              </div>
              <ul>
                {categoryDataResponse?.map((category: ICategoryItem) => {
                  const { id } = category;
                  const { name } = category.attributes;
                  return (
                    <li
                      key={id}
                      className="text-p text-dark-100 mb-2 hover:text-secondary-100"
                    >
                      <Link href={`/category/${id}`}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
            <section className="social-group">
              <div className="mb-5">
                <Title title="Social network" />
              </div>
              <div className="h-12 flex items-center">
                <Button
                  isMarginBottom
                  label="Instagram"
                  textColor="text-white-100"
                  bgColor="bg-gradient-to-bl from-sunSet-0 to-sunSet-100"
                  leftIcon={<Instagram />}
                />
                <div className="w-10 h-10 ml-4 bg-gradient-to-bl from-blueLinear-0 to-blueLinear-100 flex items-center justify-center rounded-xl cursor-pointer">
                  <Twitter />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex mt-8 bg-black-90 rounded-xl justify-center lg:justify-end">
          <div className="flex justify-between py-4 pr-4">
            <Typography
              tag="h2"
              weight={FontWeight.Light}
              additionalClasses="text-dark-75 text-p leading-5 w-100 lg:mr-15 2xl:mr-30"
            >
              Privacy Policy | Terms & Conditions
            </Typography>
            <Typography
              tag="h2"
              weight={FontWeight.Light}
              additionalClasses="text-dark-75 text-p leading-5"
            >
              All Copyright (C) 2022 Reserved
            </Typography>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 h-full py-10 lg:flex">
        {/* comment group */}
        <section className="h-full bg-white-100 mx-5 w-full 2xl:w-90">
          <div className="mb-5">
            <Title title="New Comments" />
          </div>
          <div className="comment-wrapper">
            {commentDataResponse.map(comment => {
              const { name, content } = comment.attributes;

              return (
                <div key={comment.id} className="mb-2">
                  <Comment userName={name} content={content} />
                </div>
              );
            })}
          </div>
        </section>
        {/* Social grid */}
        <section className="w-90 h-full bg-white-100 hidden 2xl:block ">
          <div className="mb-5">
            <Title title="Follow On Instagram" />
          </div>
          <div className="media-wrapper grid grid-cols-3 grid-rows-3 gap-5">
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQzfHxwbGFuZXR8ZW58MHx8MHx8fDA%3D"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1545156521-77bd85671d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmV0fGVufDB8fDB8fHww"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1620421680906-275860f61e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1632395627760-72e6eca7f9c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D"
              alt="media-image"
            />
            <Image
              width={104}
              height={104}
              className="rounded-3xl"
              src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbmV0fGVufDB8fDB8fHww"
              alt="media-image"
            />
          </div>
        </section>
      </div>
    </footer>
  );
};
