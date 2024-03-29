
import "./full-path.scss";
import GrayBar from "../../components/Gray-Bar/gray-bar";
import Rune from "../../components/Rune/rune";
import { useContext } from "react";

import { RunesContext } from "../../pages/Skill-Tree/skill-tree";

function FullPath({ path }) {
  let runes = useContext(RunesContext).runes[`path${path}`];

  return (
    <div className={`full-path ${path === "1" ? "area-a" : "area-b"}`}>
      <h2 className="full-path-h2">TALENT PATH {path}</h2>
      {Object.keys(runes).map((runeId) => {
        return (
          <Rune
            key={`rune-${runeId}`}
            purchased={runes[runeId]}
            runeId={runeId}
            path={path}
          >
            {" "}
          </Rune>
        );
      })}
      <GrayBar runes={runes}></GrayBar>
    </div>
  );
}

export default FullPath;
