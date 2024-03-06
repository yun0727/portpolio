import styled from "styled-components";
import Header from "./Components/Header";
import Mobile from "./Components/Nomobile";
import kakaotalk from "../img/kakaotalk.png";
import { Link } from "react-router-dom";

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
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const ProjectName = styled.div`
  color: #0179fe;
  font-weight: 500;
  font-size: 30px;
  background-color: #f6fa6f;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
// const LinkImage = styled.div`
//   width: 500px;
//   height: 500px;
//   background-color: #f6fa6f;
//   border-radius: 25px;
//   position: relative;
//   z-index: 1;
//   font-size: 25px;
//   font-weight: 500;
//   /* padding: 50px; */
//   color: black;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   &:hover {
//     background-color: #d5edfa;
//     z-index: 99;
//   }
// `;
const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 1000px;
  margin-bottom: 20px;
  display: flex;
  width: 90%;
  justify-content: flex-start;
`;
const Detail = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Descript = styled.div`
  font-size: 25px;
  color: black;
  margin-bottom: 15px;
`;
const Skills = styled.div`
  font-size: 25px;
  color: #0179fe;
  font-weight: 800;
  margin-bottom: 15px;
`;
const Skill = styled.div`
  margin-left: 10px;
`;
const Visit = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Web = styled.div`
  margin-right: 20px;
  font-size: 25px;
  color: #0179fe;
  font-weight: 700;
  margin-bottom: 15px;
  background-color: #f6fa6f;
  border-radius: 20px;
  padding: 10px;
  &:hover {
    background-color: #d5edfa;
  }
`;
function ProjectDetail() {
  return (
    <div>
      <Mobile />
      <Wrapper>
        <Header
          setProfileColor="#b2d7fc"
          setSkillColor="#b2d7fc"
          setProjectColor="#5ab2ff"
        />
        <Box>
          <Title>Project</Title>
          <Col>
            <Project>
              <ProjectName>카카오톡 페이지</ProjectName>
              <Image src={kakaotalk} alt=""></Image>
              <Detail>
                <Descript>프로젝트 세부설명</Descript>
                <Skills>
                  Skills
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                      alt=""
                    />
                    <img
                      src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      alt=""
                    />
                  </Skill>
                </Skills>
                <Skills>
                  Deploy
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"
                      alt=""
                    />
                  </Skill>
                </Skills>
                <Visit>
                  <Web>
                    <Link to="https://yun0727.github.io/kokoa-clone-2022/">
                      웹 사이트 방문하기
                    </Link>
                  </Web>
                  <Web>
                    <Link to="https://github.com/yun0727/kokoa-clone-2022">
                      깃허브 방문하기
                    </Link>
                  </Web>
                </Visit>
              </Detail>
            </Project>
            <Project>
              <ProjectName>카카오톡 페이지</ProjectName>
              <Image src={kakaotalk} alt=""></Image>
              <Detail>
                <Descript>프로젝트 세부설명</Descript>
                <Skills>
                  Skills
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                      alt=""
                    />
                    <img
                      src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      alt=""
                    />
                  </Skill>
                </Skills>
                <Skills>
                  Deploy
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"
                      alt=""
                    />
                  </Skill>
                </Skills>
                <Visit>
                  <Web>
                    <Link to="https://yun0727.github.io/kokoa-clone-2022/">
                      웹 사이트 방문하기
                    </Link>
                  </Web>
                  <Web>
                    <Link to="https://github.com/yun0727/kokoa-clone-2022">
                      깃허브 방문하기
                    </Link>
                  </Web>
                </Visit>
              </Detail>
            </Project>
          </Col>
        </Box>
      </Wrapper>
    </div>
  );
}

export default ProjectDetail;
