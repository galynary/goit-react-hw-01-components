import styled from '@emotion/styled';

export const Tr = styled.tr`
  background-color: ${props => {
    return props.layer;
  }};
`;
