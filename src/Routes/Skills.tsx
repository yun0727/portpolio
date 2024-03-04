import styled from "styled-components";
import Header from "./Components/Header";
import Mobile from "./Components/Nomobile";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Wrapper = styled.div`
  background: #d5edfa;
  height: 1400px;
  padding-top: 30px;
  padding-bottom: 30px;
  /* padding-bottom: 100%; */
  margin-top: 60px;
  @media screen and (min-width: 975px) {
    height: 1100px;
  }
`;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Info = styled.div`
  color: #0179fe;
  font-size: 25px;
  font-weight: 800;
  background-color: #f6fa6f;
  padding: 10px 20px;
  border-radius: 20px;
  margin-bottom: 30px;
`;
const Data = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 700;
`;
const Skills = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Skill = styled.div`
  color: #0179fe;
  font-size: 25px;
  font-weight: 700;
  margin-right: 10px;
`;

const Icon = styled(FaRegArrowAltCircleRight)`
  color: black;
  margin: 0px 10px;
`;

const SkillData = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 700;
  display: flex;
`;

const SkillDatas = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.div`
  margin: 0px 10px;
`;

function Skilldetail() {
  return (
    <div>
      <Mobile />
      <Wrapper>
        <Header
          setProfileColor="#b2d7fc"
          setSkillColor="#5ab2ff"
          setProjectColor="#b2d7fc"
        />
        <Box>
          <Title>Skills</Title>
          <Col>
            <Item>
              <Info>📖 Education</Info>
              <Data>2022.12-2023.06 멀티캠퍼스 [K-digital Training]</Data>
            </Item>
            <Item>
              <Info>📖 Certificate</Info>
              <Data>2023.04 SQLD</Data>
            </Item>
            <Item>
              <Info>📖 HardSkill</Info>
              <Skills>
                <Skill>Front-end </Skill>
                <Icon></Icon>
                <SkillDatas>
                  <SkillData>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                        alt=""
                      />
                    </Img>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                        alt=""
                      />
                    </Img>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
                        alt=""
                      />
                    </Img>
                  </SkillData>
                  <SkillData>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white"
                        alt=""
                      />
                    </Img>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"
                        alt=""
                      />
                    </Img>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"
                        alt=""
                      />
                    </Img>
                  </SkillData>
                  <SkillData>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"
                        alt=""
                      />
                    </Img>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/pug-A86454?style=for-the-badge&logo=pug&logoColor=white"
                        alt=""
                      />
                    </Img>
                  </SkillData>
                </SkillDatas>
              </Skills>
              <Skills>
                <Skill>Back-end </Skill>
                <Icon></Icon>
                <SkillDatas>
                  <SkillData>
                    <Img>
                      <img
                        src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                        alt=""
                      ></img>
                    </Img>
                  </SkillData>
                </SkillDatas>
              </Skills>
            </Item>
          </Col>
        </Box>
      </Wrapper>
    </div>
  );
}

export default Skilldetail;
