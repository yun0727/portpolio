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
  }
`;

const Warn = styled.div`
  @media screen and (max-width: 750px) {
    color: white;
    font-size: 35px;
    position: absolute;
    top: 100px;
  }
`;

function Mobile() {
  return (
    <Wrapper>
      <Warn>Your screen is Too small</Warn>
    </Wrapper>
  );
}

export default Mobile;
