import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

const QuizCard = ({ imageUrl, imageAlt, name, description }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={imageUrl} alt={imageAlt} />
      </ImageContainer>
      <DetailsContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <QuizLink>
          Start Quiz <AiOutlineArrowRight />
        </QuizLink>
      </DetailsContainer>
    </Card>
  );
};

export default QuizCard;

const Card = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.sage2};
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme.colors.sage7};
`;

const ImageContainer = styled.div`
  padding: 1rem;
  border-radius: 0.25rem;
`;

const DetailsContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Description = styled.div`
  color: ${(props) => props.theme.colors.sage11};
`;

const QuizLink = styled.button`
  background-color: ${(props) => props.theme.colors.blue1};
  padding: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.blue11};
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme.colors.blue7};
  border-radius: 0.5rem; ;
`;
