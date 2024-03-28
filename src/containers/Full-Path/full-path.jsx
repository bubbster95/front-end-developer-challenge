import GrayBar from '../Gray-Bar/gray-bar';
import './full-path.scss';


import Rune from '../../components/Rune/rune'
import { useContext } from 'react';

import { RunesContext } from '../../pages/Skill-Tree/skill-tree';


function FullPath({path}) {
  let runeArray = useContext(RunesContext)
  return (
    <div className="full-path">
        <h2 className='full-path-h2'>TALENT PATH {path}</h2>
        {runeArray[path === '1'? 0:1].map( rune =>  <Rune key={`rune-${rune.id}`} rune={rune} ></Rune> )}
        <GrayBar runeArray={runeArray[path === '1'? 0:1]}></GrayBar>
    </div>
  );
}

export default FullPath;
