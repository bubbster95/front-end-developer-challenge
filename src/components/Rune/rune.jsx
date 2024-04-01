import "./rune.scss";

import { RunesContext } from "../../pages/Skill-Tree/skill-tree";

import { useContext } from "react";

function Rune({ rune }) {
  let handleRuneUpdate = useContext(RunesContext).handleRuneUpdate;
  let animateRune = useContext(RunesContext).animateRune;

  let runeIconStyle = {
    backgroundImage: `url("${rune.spriteSheetURL}")`,
    backgroundPosition: `-${50 * (rune.spriteOffset - 1)}px ${
      50 * (rune.purchased - 1)
    }px`,
  };

  return (
    <div
      onClick={() => handleRuneUpdate(rune.id)}
      className={`rune-wrapper  ${rune.purchased === 1 && "active-rune-wrapper"} ${
        animateRune === rune.id && "invalid-rune"
      }`}
    >
      <div
        className={`rune-icon ${rune.purchased === 1 && "active-rune-icon"}`}
        style={runeIconStyle}
      ></div>
      <div
        className={`rune-border-color ${
          rune.purchased === 1 && "rune-border-color-active"
        }`}
      ></div>
    </div>
  );
}

export default Rune;
