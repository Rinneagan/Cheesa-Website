import styled from "styled-components";
import { BREAKPOINTS, Mark } from "../../utils/ReusableStyles";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { SquadResponse } from "../../types/types";
function Squad() {
  const data: SquadResponse = [
    {
      id: 1,
      img_url:
        "https://pbs.twimg.com/profile_images/1649437595066040320/-SSL-EKI.jpg",
      name: "Evans Elabo",
      role: "Software Engineer",
      company: "InteliTech ",
      about:
        "A Linguistics student who's not just fluent in languages but also holds a special talent for speaking volumes about anything and everything. A talented guy with insatiable curiosity. He does literally everything - from mobile app development to crafting stunning UI designs and building high performance web applications. ",
      socials: {
        twitter: "https://twitter.com/evans_elabo",
        github: "https://github.com/ellaboevans",
        linkedin: "https://linkedin.com/in/eelabo",
      },
    },
    {
      id: 2,
      img_url:
        "https://ik.imagekit.io/i7gyrkpch/addo.jpg?updatedAt=1693407716706",
      name: "Diabene Yaw Addo",
      role: "Software Developer",
      company: "SlightlyTechie & InteliTech",
      about:
        "A chemical engineering student with a knack for software development and a passion for JavaScript, C# and Thermodynamics. He has a habit of adding 'wai' to the end of his sentences, and he enjoys playing video games and spending so much time on writing blog posts that he never publishes.",
      socials: {
        twitter: "https://twitter.com/diabeneyy",
        github: "https://github.com/diabeney",
        linkedin: "https://www.linkedin.com/in/diabeney/",
      },
    },
    {
      id: 3,
      img_url:
        "https://ik.imagekit.io/i7gyrkpch/joshuaa.jpg?updatedAt=1693413266862",
      name: "Joshua Richardson Owusu",
      role: "Data Analyst",
      company: "InteliTech",
      about:
        "Joshua (JRO) is a Chemical Engineering student with a unique blend of talents that make him the ultimate jack of all trades. From modeling of chemical processes to graphic designing, there's nothing he can't handle. But his true passion lies in the realm of data analysis. He is a natural leader who inspires his peers to strive for excellence. ",
      socials: {
        twitter: "https://twitter.com/the__JRO?s=09",
        github: "https://github.com/jrowusu",
        linkedin:
          "https://www.linkedin.com/in/joshua-richardson-owusu-a332b41b7",
      },
    },
  ];

  const TextListVariants = {
    hidden: {
      scale: 0.5,
    },
    show: {
      scale: 1,
    },
  };

  return (
    <>
      {data.map((user) => (
        <SquadWrapper key={user.id}>
          <motion.img
            variants={TextListVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            src={user.img_url}
            alt={`${user.name}'s picture`}
          />
          <SquadDetails>
            <h1>{user.name}</h1>
            <h3>
              {user.role} at<Mark> {user.company}</Mark>
            </h3>
            <p>{user.about}</p>
            <IconWrapper>
              <motion.div whileHover={{ y: -6 }}>
                <SocialIcon
                  url={user.socials?.twitter}
                  style={{ height: 25, width: 25, marginTop: "1.2rem" }}
                />
              </motion.div>
              <motion.div whileHover={{ y: -6 }}>
                <SocialIcon
                  url={user.socials?.github}
                  style={{
                    height: 25,
                    width: 25,
                    marginTop: "1.2rem",
                    marginLeft: "1rem",
                  }}
                />
              </motion.div>
              <motion.div whileHover={{ y: -6 }}>
                <SocialIcon
                  url={user.socials?.linkedin}
                  style={{
                    height: 25,
                    width: 25,
                    marginTop: "1.2rem",
                    marginLeft: "1rem",
                  }}
                />
              </motion.div>
            </IconWrapper>
          </SquadDetails>
        </SquadWrapper>
      ))}
    </>
  );
}

const SquadWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-inline: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  margin: 5rem 0;
  &:nth-child(even) {
    flex-direction: row-reverse;
    background-color: ${({ theme }) => theme.forground};
    color: ${({ theme }) => theme.foreground};
  }
  img {
    width: 20rem;
    height: 20rem;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    padding-inline: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

const SquadDetails = styled.div`
  width: 50%;

  h1 {
    font-size: 2.3rem;
    margin: 0.5rem 0;
  }
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1.1rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8rem;
    letter-spacing: 0.6px;
  }
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    width: 100%;
    padding: 0 1rem;

    h1,
    h3,
    p {
      text-align: center;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    justify-content: center;
  }
`;
export default Squad;
