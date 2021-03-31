import { FC, useCallback, useEffect } from 'react';
import { BiRefresh } from 'react-icons/bi';
import styled from 'styled-components';
import { useClockAppState, getRandomQuote } from 'context/app-context';
import { RequestHandler } from 'context/request-context';

const Wrapper = styled.div`
  max-width: 28rem;
  font-size: 0.75rem;
  line-height: 1.375rem;
  letter-spacing: 0;

  @media (min-width: 768px) {
    max-width: 37.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

const QuoteText = styled.p`
  position: relative;
  padding-right: 4rem;
  margin-bottom: 1rem;
`;

const Author = styled.b`
  font-weight: bold;
`;

export const Quote: FC<{}> = () => {
  const {
    state: {
      quote: { content, author },
    },
    dispatch,
  } = useClockAppState();

  const getRandomQuoteCb = useCallback(() => {
    getRandomQuote(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getRandomQuoteCb();
  }, [getRandomQuoteCb]);

  return (
    <RequestHandler request="quote">
      <Wrapper>
        <QuoteText>
          {content}
          <BiRefresh
            role="button"
            opacity="0.5"
            size="2rem"
            style={{ position: 'absolute', right: 0, top: 0 }}
            onClick={getRandomQuoteCb}
          />
        </QuoteText>
        <Author>{author}</Author>
      </Wrapper>
    </RequestHandler>
  );
};
