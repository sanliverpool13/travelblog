import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSection = styled.section`
  width: 100%;
  padding-bottom: 14rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    padding-bottom: 6rem;
  }
`;

export const AboutInnerContainer = styled.section`
  width: var(--navbar-content-width);
  max-width: var(--navbar-max-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--bg-clr-footer);
`;

export const OurStoryHeader = styled.h2`
  width: 100%;
  font-size: 4rem;
  font-weight: 500;
  font-family: var(--logo-style) !important;
  margin: 0rem 0 1rem 0;

  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const OurStoryGrid = styled.article`
  display: grid;
  grid-template-columns: 45% 55%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const OurStoryImageContainer = styled.section`
  display: block;
  position: relative;
  width: 100%;

  & img {
    border-radius: var(--img-border-radius);
  }

  @media (max-width: 800px) {
    height: 100vw;
  }
`;

export const OurStoryTextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* top | right | bottom | left */
  padding: 0 0 0 4rem;
  text-align: left;
  width: 100%;

  @media (max-width: 800px) {
    order: -1;
    padding: 0;
    margin-bottom: 1rem;
  }
`;

export const OurStoryParagraph = styled.p`
  width: 100%;
  line-height: var(--about-line-height);
  font-size: var(--about-font-size);
`;

export const OurStorySubHeader = styled.h2`
  width: 100%;
  font-size: 2rem;
  margin: 0rem 0 3rem 0;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

/// Individual About Us Sections ////////////////

export const AboutGridSection = styled.section`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isMadison ? "60% 40%" : "40% 60%"};
  grid-template-areas: "first second";
  width: 100%;
  max-width: 1000px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutTextSection = styled.section`
  width: 100%;
  padding: ${(props) =>
    props.isMadison ? "0 2rem 1rem 0" : " 0 2rem 1rem 2rem"};
  grid-area: ${(props) => (props.isMadison ? "first" : "second")};

  @media (max-width: 800px) {
    order: -1;
    padding: 0 0 1rem 0;
  }
`;

export const AboutTextParagraph = styled.p`
  line-height: var(--about-line-height);
  font-size: var(--about-font-size);
`;

export const AboutImageSection = styled.section`
  display: block;
  position: relative;
  width: 100%;
  grid-area: ${(props) => (props.isMadison ? "second" : "first")};
  & img {
    border-radius: var(--img-border-radius);
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100vw;
  }
`;

export const AboutUsParagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  width: 100%;
`;

export const Divider = styled.hr`
  height: 2.5px;
  background-color: var(--bg-clr-footer);
  border: 0;
  border-top: 2px solid var(--bg-clr-footer);
  width: 100px;
  margin: 5rem 0;

  @media (max-width: 700px) {
    margin: 3rem 0 2rem 0;
  }
`;

export const ContactLink = styled.span`
  & a {
    color: var(--clr-trqse);
    text-decoration: none;
  }
`;

// Animation for Personal About Sections
export const transform = keyframes`
  
	0% {
		transform: scale(0, .025);
	}
	50% {
		transform: scale(1, .025);
	}

`;
