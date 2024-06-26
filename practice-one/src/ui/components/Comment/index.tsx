// static image
import ImageStore from '@/constants/images';

// components
import { Avatar, Button, Typography } from '@/ui/components';

// icons
import { ArrowBack, Schedule } from '@/ui/components/Icons';

// types
import { FontWeight, Size } from '@/types';

interface IProps {
  userName: string;
  content: string;
  publicDate?: string;
}

export const Comment = ({ userName, content, publicDate }: IProps) => (
  <div className="bg-white-90 p-4 rounded-xl">
    { publicDate ? (
      <div className="flex flex-1 px-1 mb-4">
        <Avatar
          width={60}
          height={60}
          url={ImageStore.AvatarUser}
          alt="Author this comment"
        />
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 justify-between">
            <div className="flex flex-col h-full ml-2.5">
              <Typography
                tag="h2"
                textSize={Size.SM}
                additionalClasses="text-dark-100"
              >
                {userName}
              </Typography>
              <div className="flex gap-2">
                <Schedule />
                <Typography
                  tag="h3"
                  weight={FontWeight.Medium}
                  additionalClasses="text-dark-75 text-p leading-5"
                >
                  {publicDate}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Typography tag="h2" textSize={Size.SM} additionalClasses="text-dark-100">
        {userName}
      </Typography>
    )}
    <Typography
      tag="h3"
      weight={FontWeight.Light}
      additionalClasses={`${publicDate ? 'text-xsm text-black-75 leading-5' : 'text-p text-dark-75'}`}
    >
      {content}
    </Typography>
  </div>
);
