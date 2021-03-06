import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
  SectionTinyHeading,
} from "~/components";
import styled from "styled-components";
import { SectionInnerHeading } from "../../components/Typography/SectionInnerHeading";

export const StyledContainer = styled(({ height, ...props }) => (
  <SectionContainer {...props} />
))`
  background-color: #f9f9f9;
  width: 500px;
  height: 150px;
  margin-left: 22%;
  margin-right: 0;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 650px) {
    width: 400px;
  }
`;

export const StyledSectionTinyHeading = styled((props) => (
  <SectionTinyHeading {...props} />
))`
  margin: 0;
  color: black;
  text-align: top;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  width: 100%;
  font-family: sans-serif;
  text-align: left;
  margin-top: 20px;
  margin-left: 10px;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  text-align: left;
  margin: 0;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 10vh;
  height: 20vh;
  margin-top: 15%;
`;
