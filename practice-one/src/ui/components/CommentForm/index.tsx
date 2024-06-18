// components
import { Button, Input, TextArea } from '@/ui/components';

// icons
import { ChatBoxSmall } from '@/ui/components/Icons';

export const CommentForm = () => (
  <div>
    <div className="grid grid-cols-12 grid-rows-3 lg:gap-6">
      <div className="row-span-3 col-span-12 lg:col-span-6">
        <div className="mb-5 row-span-1">
          <Input label="Name" name="username" type="text" />
        </div>
        <div className="mb-5 row-span-1">
          <Input label="Email" name="email" type="email" />
        </div>
        <div className="mb-5 row-span-1">
          <Input label="Website" name="website" type="text" />
        </div>
      </div>
      <div className="row-span-3 col-span-12 lg:col-span-6">
        <TextArea label="Comment" placeholder="What do you think?" />
      </div>
    </div>
    <div className="flex w-full justify-end mt-7 mb-30 sm:mt-10 sm:mb-12 lg:mt-0">
      <Button
        isButtonLarge
        label="Send Comment"
        leftIcon={<ChatBoxSmall />}
        bgColor="bg-gradient-to-r from-sunSet-0 to-sunSet-100"
        textColor="text-white-100"
      />
    </div>
  </div>
);
