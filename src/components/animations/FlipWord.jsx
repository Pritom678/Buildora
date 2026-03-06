import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export const FlipWord = ({ front, image }) => {
  const ref = useRef(null);

  const handleEnter = () => {
    gsap.to(ref.current, {
      rotateY: 180,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      rotateY: 0,
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  return (
    <span
      className="inline-block perspective-[800px]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        ref={ref}
        className="relative inline-block [transform-style:preserve-3d]"
      >
        {/* FRONT TEXT */}
        <span className="[backface-visibility:hidden]">{front}</span>

        {/* BACK IMAGE */}
        <span className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <Image
            alt="logo"
            src={image}
            fill
            className="w-12 h-12 object-cover rounded"
          />
        </span>
      </span>
    </span>
  );
};
