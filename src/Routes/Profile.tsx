import styled from "styled-components";
import Header from "./Components/Header";

const Title = styled.div`
  color: white;
  font-size: 200px;
`;

function Profile() {
  return (
    <div>
      <Header
        setProfileColor="#5ab2ff"
        setSkillColor="#b2d7fc"
        setProjectColor="#b2d7fc"
      />
      <Title>Profile</Title>
    </div>
  );
}

export default Profile;
