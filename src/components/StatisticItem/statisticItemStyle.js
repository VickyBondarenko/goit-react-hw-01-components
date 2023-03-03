import styled from 'styled-components';

const ItemStat = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;

  color: black;
  padding: 15px;
  &:not(:first-child) {
    border-left: 2px solid grey;
  }
  &:nth-child(1) {
    background-color: red;
    border-radius: 0px 0px 0px 8px;
  }
  &:nth-child(2) {
    background-color: green;
  }
  &:nth-child(3) {
    background-color: blue;
  }
  &:nth-child(4) {
    background-color: violet;
  }
  &:nth-child(5) {
    background-color: yellow;
    border-radius: 0px 0px 8px 0px;
  }
`;
const LabelStat = styled.span`
  font-size: 16px;
`;

const QuantityStat = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
export { ItemStat, LabelStat, QuantityStat };
