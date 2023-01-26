import styled from '@emotion/styled';

export const Card = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
  border-top: 1px solid rgb(236, 236, 236);
  border-left: 1px solid rgb(236, 236, 236);
  border-right: 1px solid rgb(236, 236, 236);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 1px 2px 3px 2px rgb(206, 206, 206);
`;

export const Description = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px 0;
`;

export const Stats = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(236, 236, 236);

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 2px 1px rgb(206, 206, 206);
  li {
    flex: 0 33.3333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    border-right: 1px solid rgb(216, 216, 216);
    background-color: rgb(244, 246, 253);
    &: last-child {
      border-right: none;
    }
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid rgb(203, 203, 203);
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 19px;
  font-weight: 600;
  padding-top: 10px;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: gray;
  padding-top: 10px;
`;

export const Location = styled.p`
  font-size: 16px;
  color: gray;
  padding-top: 10px;
`;

export const Label = styled.span`
  font-size: 16px;
  color: gray;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: 19px;
  font-weight: 600;
  color: black;
`;
