import React from "react";
import { Container } from "../../styles/utils";
import styled from "styled-components";
import QuizCard from "../../components/QuizCard/QuizCard";

const Homepage = () => {
  return (
    <Container>
      <CardsContainer>
        <QuizCard
          imageUrl="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          imageAlt="from unsplash"
          name="Lorem Ipsum"
          description="lorem ipsum dolor el set amet"
        />
        <QuizCard
          imageUrl="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          imageAlt="from unsplash"
          name="Lorem Ipsum"
          description="lorem ipsum dolor el set amet"
        />
      </CardsContainer>
    </Container>
  );
};

export default Homepage;

const CardsContainer = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
`;
