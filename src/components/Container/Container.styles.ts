import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border: 1rem solid ${({ theme }) => theme.colors.grey[0]};

  & * {
    color: ${({ theme }) => theme.colors.grey[0]};
  }
`;
