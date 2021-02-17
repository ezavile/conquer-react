import { useState, FC } from 'react';
import styled from 'styled-components';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';

import { Text } from 'components';
import { COLORS } from 'styles/colors';

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
  padding: 15px 9px 15px 21px;
  height: 56px;
  min-width: 146px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  outline: none;

  ${Text} {
    font-weight: bold;
  }

  &:hover {
    ${IconWrapper} {
      background-color: ${COLORS['light-grayish']};
    }
  }
`;

export const ToggleButton: FC<{}> = () => {
  const [on, toggle] = useState(false);
  const Chevron = on ? CgChevronUp : CgChevronDown;
  const text = on ? 'Less' : 'More';

  return (
    <Button onClick={() => toggle(!on)}>
      <Text type="xs" color="light-dark">
        {text}
      </Text>
      <IconWrapper>
        <Chevron size="22px" />
      </IconWrapper>
    </Button>
  );
};
