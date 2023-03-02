import styled from 'styled-components';

const StatsItem = props => {
  return (
    <Item>
      <Label>{props.label}</Label>
      <Quantity>{props.quantity}</Quantity>
    </Item>
  );
};
export default StatsItem;

const Item = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  border-left: 2px solid grey;
  color: black;
  padding: 15px;
`;
const Label = styled.span`
  font-size: 16px;
`;

const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
