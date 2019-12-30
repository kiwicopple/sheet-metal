import React from "react";
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
      {props.children}
    </section>
  )
}

export default Section;
