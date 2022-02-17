import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../styles/utils";

const QuizCard = ({ imageUrl, imageAlt, name, description }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <ImageContainer>
        <img src={imageUrl} alt={imageAlt} />
      </ImageContainer>
      <DetailsContainer>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <PrimaryButton onClick={() => navigate("rules")}>
          Start Quiz <AiOutlineArrowRight />
        </PrimaryButton>
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
