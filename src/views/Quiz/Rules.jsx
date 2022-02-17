import React from "react";
import { Container, FlexCenter, SecondaryButton } from "../../styles/utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <FlexCenter>
        <RulesWrapper>
          <h1>Rules</h1>
          <OrderedList>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores facere, voluptatibus quasi eaque voluptatem quis
              ratione amet deleniti rem nisi in omnis suscipit porro ut, sit eos
              enim commodi culpa.
            </li>
            <li>
              Velit ipsum facere facilis, accusamus eveniet ullam animi est
              magnam cumque molestiae autem ab, itaque hic expedita minima! Sunt
              perferendis temporibus fuga adipisci nemo velit consectetur,
              tempore eligendi enim aliquam!
            </li>
            <li>
              Exercitationem, aut modi labore tempora ipsa repellat vero
              nesciunt? At excepturi odio expedita sequi natus, itaque velit
              distinctio eaque temporibus, nostrum autem hic commodi! Eum
              dolorem odio distinctio similique unde.
            </li>
            <li>
              Quod, earum in quis ipsam possimus ipsa at nesciunt libero
              voluptatum exercitationem dolorem hic dolorum maxime minima
              cupiditate iure eum optio ea. Unde vitae rerum quis sequi quaerat
              perferendis earum?
            </li>
          </OrderedList>
          <ButtonContainer>
            <SecondaryButton
              onClick={() => navigate("/quiz", { replace: true })}>
              Start
            </SecondaryButton>
          </ButtonContainer>
        </RulesWrapper>
      </FlexCenter>
    </Container>
  );
};

export default Rules;

const OrderedList = styled.ol`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    text-align: justify;
    color: ${(props) => props.theme.colors.sage11};
  }
`;

const RulesWrapper = styled.div`
  width: 80%;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
