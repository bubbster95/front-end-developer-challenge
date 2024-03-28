import GrayBar from '../Gray-Bar/gray-bar';
import './full-path.scss';


import Rune from '../../components/Rune/rune'

let runeArray = [
    [{id: 1, purchased: 1}, {id: 2, purchased: 1}, {id: 3, purchased: 0}, {id:4, purchased: 0}],
    [{id: 5, purchased: 0}, {id: 6, purchased: 0}, {id: 7, purchased: 0}, {id:8, purchased: 0}]
]

function FullPath({path}) {
  return (
    <div className="full-path">
        <h2 className='full-path-h2'>Talent Path {path}</h2>
        <GrayBar></GrayBar>
        {runeArray[path === '1'? 0:1].map( rune =>  <Rune key={`rune-${rune.id}`} rune={rune} ></Rune> )}
    </div>
  );
}

export default FullPath;
