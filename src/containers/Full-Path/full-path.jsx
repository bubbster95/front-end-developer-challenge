import GrayBar from '../Gray-Bar/gray-bar';
import './full-path.scss';


import Rune from '../../components/Rune/rune'
import { useContext } from 'react';

import { RunesContext } from '../../pages/Skill-Tree/skill-tree';


function FullPath({path}) {
  let runes = useContext(RunesContext).runes[`path${path}`]


  return (
    <div className="full-path">
        <h2 className='full-path-h2'>TALENT PATH {path}</h2>
        {Object.keys(runes).map( runeId => {
          return <Rune key={`rune-${runeId}`} purchased={runes[runeId]} runeId={runeId} path={path}> </Rune>
        }
        )}
        <GrayBar runes={runes}></GrayBar>
    </div>
  );
}

export default FullPath;
