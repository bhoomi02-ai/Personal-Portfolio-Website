"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width, filter }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
      filter: filter || 'none',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;