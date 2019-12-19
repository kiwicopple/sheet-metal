import React from "react";
import BackgroundImage from "./BackgroundImage";
import "./Section.scss";

function Section(props) {
  const {
    color,
    size,
    hero,
    backgroundImage,
    backgroundImageOpacity,
    children,
    // Passed to section element
    ...otherProps
  } = props;

  return (
    <section
      className={
        'SectionComponent section is-block is-relative' +
        (hero ? ` hero` : '') +
        (color ? ` is-${color}` : '') +
        (size ? ` is-${size}` : '')
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage image={backgroundImage} opacity={backgroundImageOpacity} />
      )}

      {props.children}
    </section>
  )
}

export default Section;
