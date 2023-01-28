import styled from '@emotion/styled';
export const StatisticsList = styled.section`
  width: 440px;
  display: block;
  text-align: center;
  margin: auto;
  margin-bottom: 60px;
  box-shadow: 1px 2px 3px 2px rgb(206 206 206);
`;
export const Title = styled.h2`
  padding: 30px 0;
  background: white;

  color: #6a5e5e;
`;
export const Stats = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  align-items: center;
  background-color: #ccc;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 60px;
  font-size: 19px;
  font-weight: 600;
  background-color: ${props => {
    return props.color;
  }};
`;

export const Label = styled.span`
  font-size: 19px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const Percentage = styled.span`
  color: #020202;
  font-size: 19px;
  font-weight: 600;
`;
