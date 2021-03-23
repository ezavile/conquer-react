import { FC, useEffect, useState } from 'react';
import { BiRefresh } from 'react-icons/bi';
import styled from 'styled-components';
import { fetchRandomQuote } from 'api';

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
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  async function getRandomQuote() {
    const quote = await fetchRandomQuote();
    setAuthor(quote.author);
    setContent(quote.content);
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <Wrapper>
      <QuoteText>
        {content}
        <BiRefresh
          role="button"
          opacity="0.5"
          size="2rem"
          style={{ position: 'absolute', right: 0, top: 0 }}
          onClick={getRandomQuote}
        />
      </QuoteText>
      <Author>{author}</Author>
    </Wrapper>
  );
};
