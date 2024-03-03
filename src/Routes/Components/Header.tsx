import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #d5edfa;
  font-size: 23px;
  padding: 20px 60px;
`;

const Col = styled.div`
  display: flex;
`;

const Name = styled.div`
  color: #5ab2ff;
  font-size: 40px;
  font-weight: 800;
`;

const Item = styled.button<{ $inputColor?: string }>`
  color: black;
  margin-right: 20px;
  padding: 10px 30px;
  border-radius: 30px;
  /* background-color: #b2d7fc; */
  background-color: ${(props) => props.$inputColor || "#b2d7fc"};
  &:hover {
    background-color: #5ab2ff;
  }
`;

function Header({ setProfileColor, setSkillColor, setProjectColor }: any) {
  console.log("setProfileColor:", setProfileColor);
  console.log("setSkillColor:", setSkillColor);
  console.log("setProjectColor:", setProjectColor);

  return (
    <Nav>
      <Col>
        <Name>🍀Jungyun's Portpolio</Name>
      </Col>
      <Col>
        <Item $inputColor={setProfileColor}>
          <Link to="/">Profile</Link>
        </Item>
        <Item $inputColor={setSkillColor}>
          <Link to="/skills">Skills</Link>
        </Item>
        <Item $inputColor={setProjectColor}>
          <Link to="/project">Project</Link>
        </Item>
      </Col>
    </Nav>
  );
}

export default Header;
