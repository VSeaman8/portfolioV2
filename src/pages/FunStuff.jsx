import RockPaperScissorsGamePage from "./mini-projects/RockPaperScissorsGamePage";

import "./FunStuff.css";

const FunStuff = () => {
  return (
    <div>
      <div className="hero">
        <h1>FUN STUFF</h1>

        <h2>
          {" "}
          This page is all about the good times when creativity and fun collide.
          It’s like looking at pictures of yourself when you were young and
          saying, “I can’t believe I wore that!”
        </h2>
      </div>
      <RockPaperScissorsGamePage />
    </div>
  );
};

export default FunStuff;
