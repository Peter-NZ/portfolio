import React, { useState } from "react";
import PropTypes from "prop-types";
import { Spring, animated, config } from "react-spring/renderprops";

const SvgMorph = (props) => {
  const [pathIndex, setPathIndex] = useState(0);
 
  const nextShape = () => {
    setPathIndex(pathIndex + 1 >= props.interpolators.length ? 0 : pathIndex + 1);
  };
  const interpolator = props.interpolators[pathIndex];
  return interpolator ? (
    <svg viewBox={props.viewBox || "0 0 500 500"} xmlns="http://www.w3.org/2000/svg">
      {props.children}
      <Spring config={props.config || config.molasses} reset native from={{ t: 0 }} to={{ t: 1 }} onRest={nextShape}>
        {({ t }) => (
          <animated.path
            fill={props.fill}
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
  fill: PropTypes.string,
  viewBox: PropTypes.string,
  config: PropTypes.object
};
