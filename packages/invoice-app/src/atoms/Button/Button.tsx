import React from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary' | 'secondaryDark' | 'danger' | 'dark';
} & React.ComponentPropsWithoutRef<'button'>;

const styles: {
  [variant in ButtonProps['variant']]: string;
} = {
  primary: 'bg-medium-slate-blue hover:bg-light-slate-blue text-white',
  secondary: 'bg-white-lilac hover:bg-link-water text-ship-cove',
  secondaryDark: 'bg-valhalla hover:bg-white text-link-water',
  danger: 'bg-carnation hover:bg-light-salmon-pink text-white',
  dark:
    'bg-midnight-express hover:bg-cinder text-link-water hover:text-cool-gray',
};

export function getButtonProps({
  variant,
  className,
  ...props
}: ButtonProps): React.ComponentPropsWithoutRef<'button'> {
  return {
    ...props,
    className: `transition duration-300 rounded-3xl font-bold ${className} ${styles[variant]}`,
  };
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  const buttonProps = getButtonProps({
    ...props,
    className: className || 'pt-4 pb-4 pl-6 pr-6',
  });

  return (
    <button type="button" {...buttonProps}>
      {children}
    </button>
  );
};
