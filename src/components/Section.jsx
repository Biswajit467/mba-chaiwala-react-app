import React from "react";
import { motion } from "framer-motion";

const Section = ({
  h3,
  text,
  btnTxt,
  hasBtn = true,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {
  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  const textOptions = {
    ...headingOptions,
    transition: {
      delay: 0.3,
    },
  };
  const buttonOption = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };
  const imgOption = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };

  return (
    <section
      className="section"
      style={{
        backgroundColor,
      }}
    >
      <div>
        <motion.h3
          data-cursorpointer={true}
          style={{
            color: headingColor,
          }}
          {...headingOptions}
        >
          {h3}
        </motion.h3>
        <motion.p
          data-cursorpointer={true}
          style={{
            color: textColor,
          }}
          {...textOptions}
        >
          {text}
        </motion.p>

        {hasBtn && (
          <motion.button
            data-cursorpointer={true}
            style={{
              color: btnColor,
              backgroundColor: btnBgColor,
            }}
            {...buttonOption}
          >
            {btnTxt}
          </motion.button>
        )}

        <motion.div {...imgOption}>
          <img
            src={imgSrc}
            alt="imgSrc"
            style={{
              width: imgSize,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
