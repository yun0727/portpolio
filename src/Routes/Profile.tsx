import styled from "styled-components";
import Header from "./Components/Header";
import profileimg from "../img/profileimg.jpeg";

const Wrapper = styled.div`
  background: #d5edfa;
  height: 1400px;
  padding-top: 30px;
  padding-bottom: 30px;
  /* padding-bottom: 100%; */
  margin-top: 60px;
`;

// @media screen and (min-width: 950px) {
// }
const Box = styled.div`
  background: white;
  margin: 30px 20px;
  padding: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #0179fe;
  background-color: #f6fa6f;
  font-size: 50px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  width: 200px;
  margin-bottom: 30px;
`;

const Imgbox = styled.div`
  width: 450px;
  height: 532px;
  margin-bottom: 30px;
`;

const Img = styled.div`
  background-image: url(${profileimg});
  background-size: cover;
  width: 450px;
  height: 532px;
  border-radius: 20px;
  margin-bottom: 30px;
  @media screen and (max-width: 1380px) {
    background-size: cover;
    width: screen;
    height: 532px;
  }
  @media screen and (max-width: 975px) {
    background-size: cover;
  }
`;
const Col = styled.div`
  /* width: 80%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 975px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 40px;
    align-items: flex-start;
  }
`;

const Item = styled.div`
  /* background-color: blue; */
`;

const Items = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  width: 100%;
  margin: 20px;
  @media screen and (min-width: 975px) {
    flex-direction: row;
    margin: 30px;
  }
`;

const Info = styled.div`
  color: #0179fe;
  font-size: 25px;
  font-weight: 800;
  background-color: #f6fa6f;
  /* margin-right: 40px; */
  padding: 10px 20px;
  border-radius: 20px;
  /* margin-right: auto; */
  @media screen and (min-width: 975px) {
    margin: 0px 30px;
  }
`;

const Data = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 700;
  margin-left: auto;
  margin-right: 40px;
`;

const Univ = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const UnivData = styled.div`
  color: black;
  font-size: 23px;
  font-weight: 700;
  margin-right: 40px;
  /* margin-left: auto; */
`;

function Profile() {
  return (
    <Wrapper>
      <Header
        setProfileColor="#5ab2ff"
        setSkillColor="#b2d7fc"
        setProjectColor="#b2d7fc"
      />
      <Box>
        <Title>Profile</Title>
        <Col>
          <Imgbox>
            <Img></Img>
          </Imgbox>
          <Item>
            <Items>
              <Info>이름</Info>
              <Data>최정윤</Data>
            </Items>
            <Items>
              <Info>생년월일</Info>
              <Data>2000.07.27</Data>
            </Items>
            <Items>
              <Info>연락처</Info>
              <Data>010-4641-0507</Data>
            </Items>
            <Items>
              <Info>이메일</Info>
              <Data>sarah5789@naver.com</Data>
            </Items>
            <Items>
              <Info>주소</Info>
              <Data>수원시 영통구 이의동</Data>
            </Items>
            <Items>
              <Info>학력</Info>
              <Univ>
                <UnivData>경기대 화학공학과 졸업(3.67/4.5)</UnivData>
                <UnivData>2019.03-2023.02</UnivData>
              </Univ>
            </Items>
          </Item>
        </Col>
      </Box>
    </Wrapper>
  );
}

export default Profile;
