import React from "react";
import classes from "./Avatar.module.scss";
import peterImg from "../../../images/peter2.jpg";
import SvgMorph from "../SvgMorph/SvgMorph";
import { interpolate } from "flubber";

const backgroundPaths = [
  "M397.5,323.5Q367,397,282,438.5Q197,480,131.5,409.5Q66,339,74.5,254Q83,169,146,119Q209,69,306,63.5Q403,58,415.5,154Q428,250,397.5,323.5Z",
  "M400,320.5Q363,391,279,440Q195,489,136,411Q77,333,58.5,241Q40,149,119,85Q198,21,292.5,49.5Q387,78,412,164Q437,250,400,320.5Z",
  "M421.5,318.5Q359,387,284,408.5Q209,430,126.5,389.5Q44,349,50,252.5Q56,156,127.5,92Q199,28,284,64.5Q369,101,426.5,175.5Q484,250,421.5,318.5Z",
  "M427,331.5Q380,413,288,450.5Q196,488,131.5,413Q67,338,73,252.5Q79,167,141.5,108Q204,49,296,63Q388,77,431,163.5Q474,250,427,331.5Z",
];

const interpolators = backgroundPaths.map((path, index) =>
  interpolate(path, backgroundPaths[index + 1] || backgroundPaths[0], {
    maxSegmentLength: 10,
  })
);

const Avatar = () => {
  return (
    <div className={classes.avatar}>
      <img className={classes["avatar__img"]} alt="Peter Davidson" src={peterImg} />
      <SvgMorph fill={"url(#gradient)"} interpolators={interpolators}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor=" rgba(0, 62, 75, .5)"></stop>
            <stop offset="100%" stopColor="rgba(0,0,0,.5)"></stop>
          </linearGradient>
        </defs>
      </SvgMorph>
    </div>
  );
};

export default Avatar;
