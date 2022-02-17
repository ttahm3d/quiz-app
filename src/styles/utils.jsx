import styled from "styled-components";

export const Container = styled.div`
  max-width: 65em;
  width: 90vw;
  margin: 0 auto;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue9};
  padding: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme.colors.blue7};
  border-radius: 0.5rem; ;
`;

export const SecondaryButton = styled.button`
  background-color: ${(props) => props.theme.colors.blue1};
  padding: 0.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.blue11};
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme.colors.blue7};
  border-radius: 0.5rem; ;
`;
