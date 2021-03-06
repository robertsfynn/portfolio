import React from 'react';
import styled from 'styled-components';
import { Paragraph } from './Typograhpy';

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 48rem) {
    align-items: start;
    justify-content: start;
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: solid 1px #4a4a4a;
  margin-right: 5px;
  margin-bottom: 5px;

  p {
    margin: 0;
    padding: 5px 10px;
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsContainer>
      {tags.map(tag => (
        <TagContainer key={tag}>
          <Paragraph>{tag}</Paragraph>
        </TagContainer>
      ))}
    </TagsContainer>
  );
};

export default Tags;
