import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;

  color: black;
  padding: 15px;
  &:not(:first-child) {
    border-left: 2px solid grey;
  }
`;
const Label = styled.span`
  font-size: 16px;
`;

const Quantity = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export { Item, Label, Quantity };
