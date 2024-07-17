// src/hooks/useGSAP.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useGSAP = (animation, deps = []) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      animation(gsap, elementRef.current);
    }
  }, deps); // dependencies array

  return elementRef;
};

export default useGSAP;
