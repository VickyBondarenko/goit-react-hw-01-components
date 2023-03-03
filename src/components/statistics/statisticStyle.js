import styled from 'styled-components';

const Statistica = styled.section`
  width: 400px;
  display: block;
  margin: 50px auto;
  border: 2px solid #9e9a9a;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 20px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  border-top: 2px solid grey; ;
`;
export { Statistica, Title, StatList };
