import { useEffect, useState } from "react";

function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);
  const generateStars = () => {
    const numOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
      setStars(newStars);
    }
  };
  const generateMeteors = () => {
    const numOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        animationDuration: Math.random() * 4 + 2,
      });
      setMeteors(newMeteors);
    }
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            top: star.x + "%",
            left: star.y + "%",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 40 + "px",
            height: meteor.size * 2 + "px",
            opacity: meteor.opacity,
            animationDuration: meteor.animationDuration + "s",
            animationDelay: meteor.animationDelay,
            top: meteor.x + "%",
            left: meteor.y + "%",
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
