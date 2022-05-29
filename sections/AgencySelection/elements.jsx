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
  @media screen and (max-width: 1023px) {
    background-position: 20% 30%;
  }
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
  text-align: center;
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
  width: 352px;
  height: 592px;
  min-width: 352px;
  min-height: 592px;
`;

export const StyledContainerContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  max-height: 100%;
  margin-left: 25%;
  margin-top: 3%;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    margin-left: 47%;
  }
  @media screen and (max-width: 650px) {
    margin-left: 25%;
    flex-direction: column;
  }
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  margin-left: 1%;
  margin-top: 0;
  @media screen and (max-width: 1023px) {
    margin-left: 10%;
  }
  @media screen and (max-width: 650px) {
    width: 65%;
  }
`;
