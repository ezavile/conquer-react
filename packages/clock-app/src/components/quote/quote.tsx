import { FC } from 'react';
import { BiRefresh } from 'react-icons/bi';
import styled from 'styled-components';
import { COLORS } from 'styles/colors';
import { TEXT } from 'styles/text';

export interface QuoteProps {
  author: string;
  text: string;
}

const Wrapper = styled.div`
  position: relative;
  max-width: 573px;
  padding-right: 2rem;
  color: ${COLORS.white};
`;

const QuoteText = styled.p`
  ${() => ({ ...TEXT.S })};
  font-weight: normal;
  margin-bottom: 1rem;
`;

const Author = styled.span`
  ${() => ({ ...TEXT.S })};
`;

export const Quote: FC<QuoteProps> = ({ author, text }) => {
  return (
    <Wrapper>
      <QuoteText>{text}</QuoteText>
      <Author>{author}</Author>
      <BiRefresh
        role="button"
        opacity="0.5"
        size="2rem"
        style={{ position: 'absolute', right: 0, top: 0 }}
      />
    </Wrapper>
  );
};
