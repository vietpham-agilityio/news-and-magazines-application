// services
import { getAuthorById, getPostDataById } from '@/services';

// components
import { Avatar, Button, Information } from '@/ui/components';

// icons
import { Plus } from '@/ui/components/Icons';

interface IProps {
  postId: string;
}

const AuthorInformation = async ({ postId }: IProps) => {
  const postResponse = await getPostDataById(postId);
  const { authorId } = postResponse.data.attributes;

  const { data: authorResponse } = await getAuthorById(authorId);
  const { avatarUrl, name } = authorResponse.attributes;

  return (
    <div className="bg-white-90 flex p-[15px] mb-[25px] rounded-xl">
      <Avatar width={87} height={87} url={avatarUrl} alt="Avatar author" />
      <div className="flex-1 ml-2.5 mt-3.5">
        <Information name={name} information="27 posts" />
        <div className="mt-2">
          <Button
            label="Follow"
            leftIcon={<Plus />}
            bgColor="bg-gradient-to-bl from-sunSet-0 to-sunSet-100"
            textColor="text-white-100"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorInformation;
