import styled from "styled-components";
import { Link } from "react-router-dom";
import { BREAKPOINTS } from "../../utils/ReusableStyles";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiYoutubeLine,
} from "react-icons/ri";
import { motion } from "framer-motion";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <Wrapper>
      <Container>
        <LinksWrapper>
          <UsefulLinks>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Executives</Link>
              </li>
              <li>
                <Link to="/">E-Library</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
            </ul>
          </UsefulLinks>
          <UsefulLinks>
            <h3>Contacts & Address</h3>
            <ul>
              <li>
                <a href="mailto:email.com">chemicalengineering.sa@gmail.com</a>
              </li>
              <li>
                <a href="tel: +233 445 543 5546">+233 445 543 5546</a>
              </li>
              <li>
                <p>Department of Chemical Engineering</p>
              </li>
              <li>
                <p>College of Engineering</p>
              </li>
              <li>
                <p>KNUST, Kumasi - Ghana</p>
              </li>
            </ul>
          </UsefulLinks>
          <SocialsLinks>
            <motion.a whileHover={{ y: -6 }} href="" className="fb">
              <RiFacebookBoxLine color="inherit" size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -6 }} href="" className="ins">
              <RiInstagramLine color="inherit" size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -6 }} href="" className="lkd">
              <RiLinkedinBoxFill color="inherit" size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -6 }} href="" className="yt">
              <RiYoutubeLine color="inherit" size={24} />
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
  color: ${({ theme }) => theme.foreground};
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
    color: ${({ theme }) => theme.foreground};
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
    color: ${({ theme }) => theme.foreground};
  }

  ul {
    width: fit-content;
    li {
      padding-block: 0.8rem;
      color: ${({ theme }) => theme.foreground};

      &:hover {
        color: ${({ theme }) =>
          theme.mode === "light" ? theme.cheesaBlue : "#9092ff"};
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
    theme.mode === "light" ? "#rgb(244, 246, 247)" : "#1E293B"};
`;

export default Footer;
