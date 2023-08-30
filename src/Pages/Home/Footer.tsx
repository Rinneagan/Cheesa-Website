import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiYoutubeLine,
  RiTwitterLine,
} from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";

import { motion } from "framer-motion";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <Container>
        <LinksWrapper>
          <UsefulLinks className="team">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/executives">Executives</Link>
              </li>
              <li>
                <Link to="/team">Meet the team</Link>
              </li>
            </ul>
          </UsefulLinks>
          <UsefulLinks>
            <h3>Contacts & Address</h3>
            <ul>
              <li>
                <a href="mailto:chemeng@knust.edu.gh">chemeng@knust.edu.gh</a>
              </li>
              <li>
                <a href="tel: +233 3220 60234">+233 3220 60234</a>
              </li>
              <li>
                <p>College of Engineering</p>
              </li>
              <li>
                <p>Department of Chemical Engineering</p>
              </li>
              <li>
                <p>P.O. Box 320 KNUST PMB, Kumasi - Ghana</p>
              </li>
            </ul>
          </UsefulLinks>
          <SocialsLinks>
            <motion.a
              whileHover={{ y: -6 }}
              target="_blank"
              href="https://twitter.com/Cheesa_knust19"
              className="fb"
            >
              <RiTwitterLine color="inherit" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -6 }}
              href="https://instagram.com/cheesaknust?igshid=ZGUzMzM3NWJiOQ=="
              target="_blank"
              className="ins"
            >
              <RiInstagramLine color="inherit" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -6 }}
              href="https://www.linkedin.com/company/chemical-engineering-students-association/"
              target="_blank"
              className="lkd"
            >
              <RiLinkedinBoxFill color="inherit" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -6 }}
              href="https://www.youtube.com/@CHEESA-KNUST"
              target="_blank"
              className="yt"
            >
              <RiYoutubeLine color="inherit" size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -6 }}
              href="https://www.tiktok.com/@cheesaknust23?_t=8Zcnn7qOR54&_r=1"
              target="_blank"
              className="yt"
            >
              <FaTiktok color="inherit" size={24} />
            </motion.a>
          </SocialsLinks>
        </LinksWrapper>
        <Copyright>
          <p>Copyright &copy; CHEESA, {date}</p>
        </Copyright>
      </Container>
    </Wrapper>
  );
}

const Copyright = styled.div`
  width: 100%;
  padding-block: 1.5rem;
  color: #fff;
  border-top: 1px solid
    ${({ theme }) => (theme.mode === "light" ? "#bbbbbb" : "#808080")};

  p {
    text-align: center;
  }
`;

const SocialsLinks = styled.section`
  padding-block: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    color: #fff;
  }
  .yt:hover {
    color: #ff2020;
  }

  .lkd:hover {
    color: #0072b1;
  }

  .fb:hover {
    color: #4267b2;
  }

  .ins:hover {
    color: #ee2a7b;
  }
`;

const UsefulLinks = styled.section`
  padding-block: 1rem;

  h3 {
    color: #fff;
  }

  ul {
    width: fit-content;
    li {
      padding-block: 0.8rem;
      color: #fff;

      &:hover {
        transform: translateX(5px);
      }
      a,
      p {
        color: inherit;
        font-weight: 500;
      }
    }
  }
`;

const LinksWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  gap: 1.2rem;

  @media (min-width: ${BREAKPOINTS.LAPTOP}) {
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.footer`
  width: 100vw;
  max-width: 1400px;
  margin-inline: auto;
  background-color: ${({ theme }) =>
    theme.mode === "light" ? theme.cheesaBlue : "#1E293B"};
`;

export default Footer;
