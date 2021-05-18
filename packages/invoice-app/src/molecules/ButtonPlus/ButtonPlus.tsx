import { PlusCircleIcon } from '@heroicons/react/solid';
import React from 'react';

import { Button, ButtonProps, getButtonProps } from '../../atoms';

export const ButtonPlus: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  const buttonProps = getButtonProps({
    ...props,
    variant,
    className: `inline-flex items-center pt-2 pb-2 pl-2 pr-4 ${className}`,
  });

  return (
    <Button variant={variant} {...buttonProps}>
      <PlusCircleIcon className="h-8 w-8 mr-4" />
      {children}
    </Button>
  );
};
