import "./index.scss";

import { RunesContext } from "../../pages/SkillTree";

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
      className={`rune-wrapper  ${
        rune.purchased === 1 && "active-rune-wrapper"
      } ${animateRune === rune.id && "invalid-rune"}`}
      data-testid='rune-wrapper'
    >
      <div
        className={`rune-icon ${rune.purchased === 1 && "active-rune-icon"}`}
        style={runeIconStyle}
        data-testid='rune-icon'
      ></div>
      <div
        className={`rune-border-color ${
          rune.purchased === 1 && "rune-border-color-active"
        }`}
        data-testid='rune-border-color'
      ></div>
    </div>
  );
}

export default Rune;
