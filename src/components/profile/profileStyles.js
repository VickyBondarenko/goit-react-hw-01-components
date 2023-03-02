import styled from 'styled-components';

const Wraper = styled.div`
  width: 400px;
  display: block;
  margin: 0 auto;
  border: 2px solid #9e9a9a;
  border-radius: 8px;
`;

const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  padding: 20px;
  width: 100px;

  border-radius: 50%;
`;

const Name = styled.p`
  margin: 0;
  padding-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;
const Tag = styled.p`
  margin: 0;
  padding-bottom: 10px;
  font-size: 24px;
  color: #9e9a9a;
  text-align: center;
`;
const Location = styled.p`
  margin: 0;
  padding-bottom: 30px;
  font-size: 24px;
  color: #9e9a9a;
  text-align: center;
`;

const StatsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  background-color: #d6d0d084;
  border-top: 2px solid grey;
`;

export { Wraper, Avatar, Name, Tag, Location, StatsList };
