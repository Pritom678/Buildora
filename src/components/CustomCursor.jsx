import React, { useEffect, useRef } from "react";

// CustomCursor component: Modern cursor dot with blend mode and smooth lag
const CustomCursor = () => {
  const dotRef = useRef(null);
  // Track mouse position
  const mouse = useRef({ x: 0, y: 0 });
  // Track dot position for interpolation
  const dot = useRef({ x: 0, y: 0 });
  const scale = useRef(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial position to center
      mouse.current.x = window.innerWidth / 2;
      mouse.current.y = window.innerHeight / 2;
      dot.current.x = window.innerWidth / 2;
      dot.current.y = window.innerHeight / 2;

      // Hide default cursor
      document.body.style.cursor = "none";

      // Mousemove updates target position
      const handleMouseMove = (e) => {
        mouse.current.x = e.clientX;
        mouse.current.y = e.clientY;
      };
      window.addEventListener("mousemove", handleMouseMove);

      // Animation loop for smooth lag
      let animationFrame;
      const animate = () => {
        // Interpolate dot position toward mouse
        dot.current.x += (mouse.current.x - dot.current.x) * 0.35; // Faster lag
        dot.current.y += (mouse.current.y - dot.current.y) * 0.35;
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0) scale(${scale.current})`;
        }
        animationFrame = requestAnimationFrame(animate);
      };
      animate();

      // Restore cursor on unmount
      return () => {
        document.body.style.cursor = "";
        window.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, []);

  // Scale effect on interactive elements
  useEffect(() => {
    const handlePointerEnter = (e) => {
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        e.target.classList.contains("nav-item")
      ) {
        scale.current = 1.7;
      }
    };
    const handlePointerLeave = (e) => {
      scale.current = 1;
    };
    document.addEventListener("pointerover", handlePointerEnter);
    document.addEventListener("pointerout", handlePointerLeave);
    return () => {
      document.removeEventListener("pointerover", handlePointerEnter);
      document.removeEventListener("pointerout", handlePointerLeave);
    };
  }, []);

  // Dot styles
  return (
    <div
      ref={dotRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "gray",
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 9999,
        boxShadow: "0 0 8px 2px rgba(0,0,0,0.08)",
        willChange: "transform",
        transition: "background 0.2s, width 0.2s, height 0.2s",
      }}
    />
  );
};

export default CustomCursor;
