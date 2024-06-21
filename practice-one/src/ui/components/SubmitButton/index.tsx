'use client';

import { useFormStatus } from 'react-dom';

import { Button } from '@/ui/components';

interface IProps {
  label: string;
  leftIcon?: JSX.Element;
}

export const SubmitButton = ({ label, leftIcon }: IProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      isButtonLarge
      label={label}
      leftIcon={leftIcon}
      isDisabled={pending}
      bgColor="bg-gradient-to-r from-sunSet-0 to-sunSet-100"
      textColor="text-white-100"
    />
  );
};
