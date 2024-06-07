// components
import Link from 'next/link';
import Image from 'next/image';
import { Button, TitleSection, Comment, Typography } from '@/ui/components';

// icons
import { Instagram, MailBox, Twitter } from '@/ui/components/Icons';
import { FontWeight } from '@/types';

export const Footer = () => (
  <footer className="footer w-full hidden items-center justify-center bg-white-100 mb-12.5 sm:flex lg:mb-11">
    <div className="flex-1 bg-white-90 py-10 pr-6 rounded-e-[50px] mr-11 lg:mr-0 lg:pr-10">
      <div className="flex justify-center lg:justify-end pr-4 lg:pr-0">
        {/* footer content */}
        <div className="pl-6 lg:pl-10">
          <section className="w-100">
            <div className="mb-5">
              <TitleSection title="Mega news" />
            </div>
            <p className="pr-8 lg:pr-12 h-40 text-xs text-justify font-normal text-black-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin
            </p>
          </section>
          {/* Newsletters */}
          <section className="w-100">
            <div className="mb-5">
              <TitleSection title="Newsletters" />
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
              <TitleSection title="Categories" />
            </div>
            <ul>
              <li className="text-p text-dark-100 mb-2 hover:text-secondary-100">
                <Link href="/category/sports">Sports</Link>
              </li>
              <li className="text-p text-dark-100 mb-2 hover:text-secondary-100">
                <Link href="/category/entertainment">Entertainment</Link>
              </li>
              <li className="text-p text-dark-100 mb-2 hover:text-secondary-100">
                <Link href="/category/science-and-environment">Science</Link>
              </li>
              <li className="text-p text-dark-100 mb-2 hover:text-secondary-100">
                <Link href="/category/health-and-wellness">Health Living</Link>
              </li>
              <li className="text-p text-dark-100 mb-2 hover:text-secondary-100">
                <Link href="/category/lifestyle">Lifestyle</Link>
              </li>
              <li className="text-p text-dark-100 mb-3 hover:text-secondary-100">
                <Link href="/category/technology">Technology</Link>
              </li>
            </ul>
          </section>
          <section className="social-group">
            <div className="mb-5">
              <TitleSection title="Social network" />
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
          <TitleSection title="New Comments" />
        </div>
        <div className="comment-wrapper">
          <div className="mb-2">
            <Comment
              userName="Ellsmartx"
              content="How Nice Does This Look 😍 I Feel It Should Be Delicious, Thank You"
            />
          </div>
          <div className="mb-2">
            <Comment
              userName="Cassia"
              content="Take A Rest, I'll Be Cheer Up You Again In 2 Next Game Go Go Go"
            />
          </div>
          <div className="mb-2">
            <Comment
              userName="Amanda"
              content="You Were Stunning Today, Jan! 💗 Great Match 👍🏽👍🏽"
            />
          </div>
          <div>
            <Comment
              userName="Denis Simonassi"
              content="It Was A Great Match Today Janzi! You Did Great😉🇩🇪"
            />
          </div>
        </div>
      </section>
      {/* Social grid */}
      <section className="w-90 h-full bg-white-100 hidden 2xl:block ">
        <div className="mb-5">
          <TitleSection title="Follow On Instagram" />
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
