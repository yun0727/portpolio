import styled from "styled-components";
import Header from "./Components/Header";
import Mobile from "./Components/Nomobile";
import kakaotalk from "../img/kakaotalk.png";
import carrotmarket from "../img/carrotmarket.png";
import netflix from "../img/netflix.png";
import youtube from "../img/youtube.png";
import uniform from "../img/uniform.png";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Wrapper = styled.div`
  background: #d5edfa;
  height: 1400px;
  padding-top: 30px;
  padding-bottom: 30px;
  /* padding-bottom: 100%; */
  margin-top: 60px;
  @media screen and (min-width: 975px) {
    height: 3800px;
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
  /* border-bottom: 3px #0179fe solid; */
  margin-top: 50px;
  margin-bottom: 50px;
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
  display: flex;
  /* flex-direction: column; */
  flex-direction: center;
  align-items: center;
  font-size: 25px;
  color: black;
  font-weight: 400;
  margin-bottom: 5px;
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
const Icon = styled(FaRegArrowAltCircleRight)`
  color: black;
  margin: 0px 10px;
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
              <ProjectName>당근마켓 클론코딩</ProjectName>
              <Image src={carrotmarket} alt=""></Image>
              <Detail>
                <Descript>
                  <p>- 제품 업로드, 찜 기능 구현</p>
                  <p>- 커뮤니티 기능 구현</p>
                  <p>- 유저간 채팅 가능 구현</p>
                  <p>- 나의 프로필에서 프로필 수정 기능 구현</p>
                  <p>- 커뮤니티 기능 구현</p>
                </Descript>
                <Skills>
                  Skills
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/tailwindcss-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/twilio-f22f46?style=for-the-badge&logo=twilio&logoColor=white"
                      alt=""
                    />
                    <Icon />
                    <p> 이메일과 전화번호를 통한 인증</p>
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/planetscale-000000?style=for-the-badge&logo=planetscale&logoColor=white"
                      alt=""
                    />
                    <Icon />
                    <p>MySQL을 사용하여 데이터베이스를 확장하고 관리</p>
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/cloudflare-f38020?style=for-the-badge&logo=cloudflare&logoColor=white"
                      alt=""
                    />
                    <Icon />
                    스트리밍 기능 구현
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/prisma-2d3748?style=for-the-badge&logo=prisma&logoColor=white"
                      alt=""
                    />
                    <Icon />
                    데이터베이스와 상호작용
                  </Skill>
                </Skills>
                <Skills>
                  Deploy
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
                      alt=""
                    />
                  </Skill>
                </Skills>
                <Visit>
                  <Web>
                    <Link to="https://carrot-market-liart.vercel.app/">
                      웹 사이트 방문하기
                    </Link>
                  </Web>
                  <Web>
                    <Link to="https://github.com/yun0727/carrot-market">
                      깃허브 방문하기
                    </Link>
                  </Web>
                </Visit>
              </Detail>
            </Project>
            <Project>
              <ProjectName>유튜브 웹 페이지 클론코딩</ProjectName>
              <Image src={youtube} alt=""></Image>
              <Detail>
                <Descript>
                  <p>- 깃허브로 로그인 기능 구현</p>
                  <p>- 영상 재생, 댓글 달기 기능 구현</p>
                  <p>- 비디오 녹화 및 업로드 기능 구현</p>
                </Descript>
                <Skills>
                  Skills
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/pug-a86454?style=for-the-badge&logo=pug&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/mongoDB-47a248?style=for-the-badge&logo=mongoDB&logoColor=white"
                      alt=""
                    />
                    <Icon />
                    동영상, 사용자, 댓글 관리를 위한 데이터 베이스
                  </Skill>
                </Skills>
                <Skills>
                  Deploy
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
                      alt=""
                    />
                  </Skill>
                </Skills>
                <Visit>
                  <Web>
                    <Link to="https://wetube-2023-a663893d93ca.herokuapp.com/">
                      웹 사이트 방문하기
                    </Link>
                  </Web>
                  <Web>
                    <Link to="https://github.com/yun0727/wetube-reloaded">
                      깃허브 방문하기
                    </Link>
                  </Web>
                </Visit>
              </Detail>
            </Project>
          </Col>
          <Col>
            <Project>
              <ProjectName>넷플릭스 페이지 클론코딩</ProjectName>
              <Image src={netflix} alt=""></Image>
              <Detail>
                <Descript>
                  <p>
                    - 영화 api를 이용한 영화 정보를 통한 넷플릭스 페이지
                    클론코딩
                  </p>
                  <p>- 애니메이션, 슬라이더 기능 구현</p>
                </Descript>
                <Skills>
                  Skills
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/html5-e34f36?style=for-the-badge&logo=html5&logoColor=white"
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
                    <Link to="https://yun0727.github.io/react-nomflix-app/">
                      웹 사이트 방문하기
                    </Link>
                  </Web>
                  <Web>
                    <Link to="https://github.com/yun0727/react-nomflix-app">
                      깃허브 방문하기
                    </Link>
                  </Web>
                </Visit>
              </Detail>
            </Project>
            <Project>
              <ProjectName>유니폼 판매 사이트</ProjectName>
              <Image src={uniform} alt=""></Image>
              <Detail>
                <Descript>
                  <p>gatsby를 통한 유니폼 판매 사이트 개발</p>
                  <p></p>
                </Descript>
                <Skills>
                  Skills
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white"
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
                    <Link to="https://uniform-store-jy.netlify.app/">
                      웹 사이트 방문하기
                    </Link>
                  </Web>
                  <Web>
                    <Link to="https://github.com/yun0727/Uniform-site">
                      깃허브 방문하기
                    </Link>
                  </Web>
                </Visit>
              </Detail>
            </Project>
          </Col>
          <Col>
            <Project>
              <ProjectName>카카오톡 페이지</ProjectName>
              <Image src={kakaotalk} alt=""></Image>
              <Detail>
                <Descript>
                  <p>- BEM을 이용하여 CSS 코드 구성하고 유지, 관리</p>
                  <p>- Media Query 사용하여 반응형 웹페이지로 구현</p>
                  <p>- FontAwesome으로 다양한 아이콘 구현</p>
                </Descript>
                <Skills>
                  Skills
                  <Skill>
                    <img
                      src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                      alt=""
                    />
                  </Skill>
                  <Skill>
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
                      src="https://img.shields.io/badge/githubpages-222222?style=for-the-badge&logo=githubpages&logoColor=white"
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
            <Project></Project>
          </Col>
        </Box>
      </Wrapper>
    </div>
  );
}

export default ProjectDetail;
