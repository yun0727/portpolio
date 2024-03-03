import styled from "styled-components";

const Wrapper = styled.div`
  @media screen and (max-width: 750px) {
    position: absolute;
    z-index: 99;
    height: 200vh;
    width: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    top: 0;
    color: white;
    font-size: 35px;
  }
`;

function Mobile() {
  return <Wrapper>Your screen is Too small</Wrapper>;
}

export default Mobile;
