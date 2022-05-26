import styled from "styled-components";
// import img from "./resources/background.png";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import backgroundimg from "../../public/background.png";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundimg.src});
  background-position: 25% 80%;
  background-size: 1000px, 1000px;
  background-repeat: no-repeat;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  color: black;
  text-align: center;
  margin: 10rem 0 0;
  width: 100%;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  font-family: sans-serif;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  text-align: center;
  margin: 0;
  width: 100%;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  max-width: 22.03rem;
  max-height: 50rem;
  width: 100%;
  height: 100%;
`;

export const StyledCardContainer = styled((props) => (
  <StyledCardContainer {...props} />
))`
  text-align: center;
`;

export const StyledContainerContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: 100%;
  margin-left: 30rem;
  margin-top: 3rem;
`;
