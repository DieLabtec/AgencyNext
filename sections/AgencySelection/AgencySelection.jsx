import Image from "next/image";
import { Card } from "../../collections/Card/Card";
import Styles from "../../styles/Home.module.css";

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
  title: "Brief",
  description:
    "Compleate brief writing or simple guidance on what to include, we've got you covered.",
  image: {
    src: "/img/background.png",
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
        <StyledCardContainer>
          <Card {...card1Props} className={Styles.card}></Card>
          <Card {...card1Props} className={Styles.card}></Card>
          <Card {...card1Props} className={Styles.card}></Card>
        </StyledCardContainer>
      </StyledContainerContainer>
    </StyledContainer>
  );
};
