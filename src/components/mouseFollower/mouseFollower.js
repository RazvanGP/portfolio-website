import { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (event) => {
      setPosition({
        x: event.clientX + window.scrollX,
        y: event.clientY + window.scrollY,
      });
      event.stopPropagation();
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const circleSize = 75;

  return (
    <div
      style={{
        position: "absolute",
        left: position.x - circleSize / 2,
        top: position.y - circleSize / 2,
        width: circleSize,
        height: circleSize,
        borderRadius: "50%",
        zIndex: "1000",
        backdropFilter: "invert(100%)",
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default MouseFollower;
