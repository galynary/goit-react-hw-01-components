import styled from '@emotion/styled';

export const Item = styled.li`
  width: 400px;
  box-shadow: 1px 2px 3px 2px rgb(206 206 206);
  border-radius: 4px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
  border-radius: 50%;
`;

export const AvatorPic = styled.img`
  display: block;
  border: 1px solid gray;
  border-radius: 4px;
  margin-right: 20px;
  padding: 2px;
  height: 50px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
