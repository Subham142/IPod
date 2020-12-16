import React from "react";
import Headbar from "./Headbar";

const Games = () => {
  return (
    <div className=" innerScreen">
      <Headbar />
      <img
        id="game"
        src="https://awesomegifs.com/wp-content/uploads/nintendos-world.gif"
        alt="game-img"
      />
    </div>
  );
};
export default Games;
