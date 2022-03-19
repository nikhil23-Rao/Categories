import { useEffect, useRef, useState } from "react";

interface IProps {
  remainingTime: any;
}

export const renderTime = ({ remainingTime }: IProps) => {
  const [likes, setLikes] = useState(30);
  const [animationLikes, setAnimationLikes] = useState("initial");

  useEffect(() => {
    //     setInterval(() => {
    //       //       // 1. Old number goes up
    //       setTimeout(() => setAnimationLikes("goUp"), 0);
    //       //       // 2. Incrementing the counter
    //       //     setTimeout(() => setLikes(likes - 1), 100);
    //       //       // 3. New number waits down
    //       setTimeout(() => setAnimationLikes("waitDown"), 100);
    //       //       // 4. New number stays in the middle
    //       setTimeout(() => setAnimationLikes("initial"), 200);
    //       setLikes(likes - 1);
    //     }, 1000);
  }, [likes]);

  const handleLikes = () => {};

  return (
    <div className="Grid">
      <div className="Likes">
        ️ <span className={animationLikes}>{likes}</span>
      </div>
    </div>
  );
};
