import "./index.scss";
import GrayBar from '../../components/GrayBar'
import Rune from "../../components/Rune";
import { useContext } from "react";

import { RunesContext } from "../../pages/SkillTree";

function FullPath({ path, index }) {
  let runes = useContext(RunesContext).runes;
  let runesOnPath = [];
  return (
    // TODO: Write a More scalable version of line 13, will need to refactor the way these grid items are justified to allow more then two paths while still keeping offcenterd layout
    <div className={`full-path ${index === 0 ? "area-a" : "area-b"}`}>
      <h2 className="full-path-h2">{path.title}</h2>
      {path.runesOnPath.map((runeId, index) => {
        let rune = runes.find((rune) => rune.id === runeId);
        runesOnPath.push(rune);
        rune.index = index;

        return <Rune key={`rune-${runeId}`} rune={rune} />;
      })}
      <GrayBar runesOnPath={runesOnPath} />
    </div>
  );
}

export default FullPath;
