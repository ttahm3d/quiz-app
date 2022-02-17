import React from "react";
import { Container } from "../../styles/utils";
import styled from "styled-components";

const Quiz = () => {
  return (
    <Container>
      <QuestionsWrapper>
        <h2>Question comes here</h2>
        <QuestionContainer>
          <Question>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            pariatur alias modi ducimus obcaecati fugiat culpa inventore,
            maiores iusto, nesciunt excepturi perspiciatis reiciendis cupiditate
            est quos asperiores expedita praesentium quidem?
          </Question>
          <OptionsList>
            <Option>praesentium</Option>
            <Option>ducimus</Option>
            <Option isCorrect="true">fugiat</Option>
            <Option>inventore</Option>
          </OptionsList>
        </QuestionContainer>
        <QuestionContainer>
          <Question>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            pariatur alias modi ducimus obcaecati fugiat culpa inventore,
            maiores iusto, nesciunt excepturi perspiciatis reiciendis cupiditate
            est quos asperiores expedita praesentium quidem?
          </Question>
          <OptionsList>
            <Option>praesentium</Option>
            <Option>ducimus</Option>
            <Option>fugiat</Option>
            <Option>inventore</Option>
          </OptionsList>
        </QuestionContainer>
        <QuestionContainer>
          <Question>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            pariatur alias modi ducimus obcaecati fugiat culpa inventore,
            maiores iusto, nesciunt excepturi perspiciatis reiciendis cupiditate
            est quos asperiores expedita praesentium quidem?
          </Question>
          <OptionsList>
            <Option>praesentium</Option>
            <Option isCorrect="false">ducimus</Option>
            <Option>fugiat</Option>
            <Option>inventore</Option>
          </OptionsList>
        </QuestionContainer>
      </QuestionsWrapper>
    </Container>
  );
};

export default Quiz;

const QuestionsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  h2 {
    text-align: center;
  }
`;

const QuestionContainer = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.sage3};
`;

const Question = styled.div``;

const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  gap: 0.5rem;
`;

const Option = styled.li`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.sage2};

  background-color: ${({ isCorrect }) => {
    if (isCorrect === "false") return "hsla(357, 100%, 50.2%, 0.1)";
    if (isCorrect === "true") return "hsla(151, 100%, 50%, 0.2)";
  }};
`;
