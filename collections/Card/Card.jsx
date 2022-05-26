import {
  StyledDescription,
  StyledTextContainer,
  StyledTitle,
  StyledContainer,
  StyledSectionTinyHeading,
  StyledImageContainer,
} from "./elements";

import Image from "next/image";

export const Card = ({ title, description, image, ...props }) => {
  return (
    <StyledContainer {...props}>
      <StyledImageContainer>
        <Image
          layout="responsive"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      </StyledImageContainer>
      <StyledTextContainer>
        <StyledSectionTinyHeading>{title}</StyledSectionTinyHeading>
        <StyledDescription>{description}</StyledDescription>
      </StyledTextContainer>
    </StyledContainer>
  );
};
