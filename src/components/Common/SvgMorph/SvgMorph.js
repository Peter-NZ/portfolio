import React, { useState } from "react";
import PropTypes from "prop-types";
import { Spring, animated } from "react-spring/renderprops";

const SvgMorph = (props) => {
  const [pathIndex, setPathIndex] = useState(0);
 
  const nextShape = () => {
  
    setPathIndex(pathIndex + 1 >= props.interpolators.length ? 0 : pathIndex + 1);
      
  };
  const interpolator = props.interpolators[pathIndex];
  return interpolator ? (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <Spring reset native from={{ t: 0 }} to={{ t: 1 }} onRest={nextShape}>
        {({ t }) => (
          <animated.path
            fill="#FF0066"
            transform="translate(100 100)"
            d={t.interpolate(interpolator)}
          />
        )}
      </Spring>
    </svg>
  ) : null;
};

export default React.memo(SvgMorph);

SvgMorph.propTypes = {
  interpolators: PropTypes.array,
};
