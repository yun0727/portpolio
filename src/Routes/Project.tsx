import styled from "styled-components";
import Header from "./Components/Header";

const Title = styled.div`
  color: white;
  font-size: 200px;
`;

function Project() {
  return (
    <div>
      <Header
        setProfileColor="#b2d7fc"
        setSkillColor="#b2d7fc"
        setProjectColor="#5ab2ff"
      />
      <Title>프로젝트다</Title>
    </div>
  );
}

export default Project;
