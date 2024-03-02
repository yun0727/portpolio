import styled from "styled-components";
import Header from "./Components/Header";

const Title = styled.div`
  color: white;
  font-size: 200px;
`;

function Skills() {
  return (
    <div>
      <Header
        setProfileColor="#b2d7fc"
        setSkillColor="#5ab2ff"
        setProjectColor="#b2d7fc"
      />
      <Title>스킬이다</Title>
    </div>
  );
}

export default Skills;
