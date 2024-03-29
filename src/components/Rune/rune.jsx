import "./rune.scss";

import { RunesContext } from "../../pages/Skill-Tree/skill-tree";

import { useContext } from "react";

function Rune({ purchased, runeId, path }) {
  let handleRuneUpdate = useContext(RunesContext).handleRuneUpdate;
  let animateRune = useContext(RunesContext).animateRune

  let runeXOffset = JSON.parse(runeId);
  let runeYOffset = purchased;
  let runeIconStyle = {
    backgroundImage: 'url("assets/talent-icons-sprite.png")',
    backgroundPosition: `-${50 * (runeXOffset - 1)}px ${
      50 * (runeYOffset - 1)
    }px`,
  };

  const handleClick = (e) => {
    // TODO: make this detect right and left click
    handleRuneUpdate(`path${path}`, runeId);
  };

  return (
    <div
      onClick={(e) => handleClick(e)}
      className={`rune-wrapper  ${purchased === 1 && "active-rune-wrapper"} ${animateRune === runeId && "invalid-rune"}`}
    >
      <div
        className={`rune-icon ${purchased === 1 && "active-rune-icon"}`}
        style={runeIconStyle}
      ></div>
      <div
        className={`rune-border-color ${
          purchased === 1 && "rune-border-color-active"
        }`}
      ></div>
    </div>
  );
}

export default Rune;
