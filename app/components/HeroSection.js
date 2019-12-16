import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";

function HeroSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={1}
        />
        <div className="buttons is-centered">
          <SectionButton
            parentColor={props.color}
            size="medium"
            onClick={props.buttonOnClick}
          >
            {props.buttonText}
          </SectionButton>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
