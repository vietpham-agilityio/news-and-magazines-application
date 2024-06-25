'use client';

import { useFormState } from 'react-dom';

// components
import { createComment } from '@/services';
import { Input, SubmitButton, TextArea, Typography } from '@/ui/components';

// icons
import { ChatBoxSmall } from '@/ui/components/Icons';
import { FontWeight, Size } from '@/types';

interface IProps {
  postId: string;
}

const initialState = {
  message: '',
};

export const CommentForm = ({ postId }: IProps) => {
  const [state, formAction] = useFormState(createComment, initialState);
  const errorMessage = state?.message;

  return (
    <form action={formAction}>
      <div className="grid grid-cols-12 grid-rows-3 lg:gap-6">
        <div className="row-span-3 col-span-12 lg:col-span-6">
          <input name="postId" type="hidden" value={postId} />
          <div
            className={`row-span-1 ${errorMessage?.name ? 'mb-0' : 'mb-6'} `}
          >
            <Input label="Name" name="name" type="text" />
            {errorMessage?.name && (
              <Typography
                tag="h3"
                textSize={Size.XSM}
                weight={FontWeight.Light}
                additionalClasses="ml-1 text-red-500 leading-6"
              >
                {errorMessage?.name}
              </Typography>
            )}
          </div>
          <div
            className={`row-span-1 ${errorMessage?.email ? 'mb-0' : 'mb-6'} `}
          >
            <Input label="Email" name="email" type="email" />
            {errorMessage?.email && (
              <Typography
                tag="h3"
                textSize={Size.XSM}
                weight={FontWeight.Light}
                additionalClasses="ml-1 text-red-500 leading-6"
              >
                {errorMessage?.email}
              </Typography>
            )}
          </div>
          <div
            className={`row-span-1 ${errorMessage?.website ? 'mb-0' : 'mb-6'} `}
          >
            <Input label="Website" name="website" type="text" />
            {errorMessage?.website && (
              <Typography
                tag="h3"
                textSize={Size.XSM}
                weight={FontWeight.Light}
                additionalClasses="ml-1 text-red-500 leading-6"
              >
                {errorMessage?.website}
              </Typography>
            )}
          </div>
        </div>
        <div
          className={`${errorMessage?.content ? 'mb-0' : 'mb-6'} row-span-3 col-span-12 lg:col-span-6`}
        >
          <TextArea
            name="content"
            label="Comment"
            placeholder="What do you think?"
          />
          {errorMessage?.content && (
            <Typography
              tag="h3"
              textSize={Size.XSM}
              weight={FontWeight.Light}
              additionalClasses="ml-1 text-red-500 leading-6"
            >
              {errorMessage?.content}
            </Typography>
          )}
        </div>
      </div>

      <div className="flex w-full justify-end mt-7 mb-30 sm:mt-10 sm:mb-12 lg:mt-0">
        <SubmitButton label="Send Comment" leftIcon={<ChatBoxSmall />} />
      </div>
    </form>
  );
};
