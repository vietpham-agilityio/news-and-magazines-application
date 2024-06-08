import { ArrowLeft, ArrowRight } from '@/ui/components/Icons';
import { BoxIcon, Title } from '@/ui/components/common';

interface IProps {
  title: string;
  onClickArrowLeft?: () => void;
  onClickArrowRight?: () => void;
}

export const TitleSection = ({
  title,
  onClickArrowLeft,
  onClickArrowRight,
}: IProps) => (
  <div className="mb-5 sm:mb-10 flex justify-between">
    <Title title={title} />
    <div className="flex gap-5">
      <BoxIcon
        width="10"
        height="10"
        additionalClasses="hover:opacity-80"
        icon={<ArrowLeft />}
        onClick={onClickArrowLeft}
      />
      <BoxIcon
        width="10"
        height="10"
        additionalClasses="hover:opacity-80"
        icon={<ArrowRight color='#000' />}
        onClick={onClickArrowRight}
      />
    </div>
  </div>
);
