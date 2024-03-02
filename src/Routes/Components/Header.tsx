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

const Item = styled.div`
  color: black;
  margin-right: 20px;
  padding: 10px;
  border-radius: 30px;
  &:hover {
    background-color: #5ab2ff;
  }
  /* color: ${(props) => props.theme.white.darker}; */
`;
const Col = styled.div`
  display: flex;
`;

const Name = styled.div`
  color: #5ab2ff;
  font-size: 30px;
  font-weight: 800;
`;
function Header() {
  return (
    <Nav>
      <Col>
        <Name>🍀Jungyun's Protpolio🍀</Name>
      </Col>
      <Col>
        <Item>
          <Link to="/"> Profile </Link>
        </Item>
        <Item>
          <Link to="/skills">Skills</Link>
        </Item>
        <Item>
          <Link to="/project">Project</Link>
        </Item>
      </Col>
    </Nav>
  );
}

export default Header;
