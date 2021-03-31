import { useState, FC } from 'react';
import styled from 'styled-components';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';

import { COLORS } from 'styles';

const IconWrapper = styled.span`
  background-color: ${COLORS.grayish};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.white};
  border-radius: 100%;
  transition: background-color 0.5s;
`;

const Button = styled.button`
  background-color: ${COLORS.white};
  border-radius: 28px;
  padding: 0.75rem 0.25rem 0.75rem 1rem;
  height: 3rem;
  min-width: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  outline: none;

  &:hover {
    ${IconWrapper} {
      background-color: ${COLORS['light-grayish']};
    }
  }

  @media (min-width: 768px) {
    padding: 1rem 0.5625rem 1rem 1.5rem;
    height: 3.5rem;
    min-width: 9.2rem;
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  color: ${COLORS['light-dark']};
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.875rem;
  letter-spacing: 0.234375rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: 0.3125rem;
  }
`;

function callAll(...fns: any[]) {
  return (...args: any) => {
    fns.forEach((fn) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      fn && fn(...args);
    });
  };
}

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  function getTogglerProps({ onClick, ...props }: any = {}) {
    return {
      'aria-pressed': on,
      text: on ? 'Less' : 'More',
      Icon: on ? CgChevronUp : CgChevronDown,
      onClick: callAll(toggle, () => onClick(!on)),
      ...props,
    };
  }

  return {
    on,
    toggle,
    getTogglerProps,
  };
}

export const ToggleButton: FC<{ onToggle: (on: boolean) => void }> = ({
  onToggle,
}) => {
  const { getTogglerProps } = useToggle();

  const { text, Icon, onClick } = getTogglerProps({
    onClick: onToggle,
  });

  return (
    <Button onClick={onClick}>
      <Text>{text}</Text>
      <IconWrapper>
        <Icon size="1.5rem" />
      </IconWrapper>
    </Button>
  );
};
