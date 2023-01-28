import styled from '@emotion/styled';

export const StatisticsList = styled.section`
  width: 350px;
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px; ;
`;
export const Title = styled.h2`
  padding: 30px 0;
  background: white;
  border: 1px solid gray;
`;
export const Stats = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  flex: 0 25%;
  display: flex;
  padding: 10px;
  flex-direction: column;
  border: 1px solid gray;
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
  color: gray;
`;
