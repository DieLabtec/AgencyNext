import Image from "next/image";
import { Card } from "../../collections/Card/Card";

import {
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledDescription,
  StyledImageContainer,
  StyledCardContainer,
  StyledCardAndImageContainer,
  StyledContainerContainer,
} from "./elements";

const card1Props = {
  title: "Managed agency selection",
  description: "Strenghten your onboarding process",
  image: {
    src: "/img/shortername.jpg",
    alt: "",
    width: 1000,
    height: 1680,
  },
};

export const AgencySelection = ({ image, title, description, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
      <StyledContainerContainer>
        <StyledImageContainer>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledImageContainer>
        <Card {...card1Props}></Card>
      </StyledContainerContainer>
    </StyledContainer>
  );
};
