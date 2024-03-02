import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #d5edfa;
  font-size: 23px;
  padding: 20px 60px;
`;

const Item = styled.li`
  color: black;
  margin-right: 20px;
  /* color: ${(props) => props.theme.white.darker}; */
`;

function Header() {
  return (
    <Nav>
      <Item>
        <Link to="/"> Profile </Link>
      </Item>
      <Item>
        <Link to="/skills">Skills</Link>
      </Item>
      <Item>
        <Link to="/project">Project</Link>
      </Item>
    </Nav>
  );
}

export default Header;
