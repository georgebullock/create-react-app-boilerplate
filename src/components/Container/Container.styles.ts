import styled from "styled-components";

export const ContentContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey[100]};
  text-align: center;

  & * {
    text-decoration: none;
  }
`;
