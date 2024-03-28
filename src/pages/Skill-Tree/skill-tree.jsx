import './skill-tree.scss';

import { createContext } from 'react';

import TitleBar from '../../containers/Title-Bar/title-bar'
import FullPath from '../../containers/Full-Path/full-path';
import PointWallet from '../../containers/Point-Wallet/point-wallet'
import { useState } from 'react';

export const RunesContext = createContext([]);

function SkillTreePage() {
  const [runes, setRunes] = useState([
    [{id: 1, purchased: 0}, {id: 2, purchased: 1}, {id: 3, purchased: 0}, {id:4, purchased: 0}],
    [{id: 5, purchased: 1}, {id: 6, purchased: 0}, {id: 7, purchased: 0}, {id:8, purchased: 0}]
  ])
  console.log('Hello? ', runes[0][0].purchased = 1)
  setRunes(runes[0][0].purchased = 1)
  return (
    <div className="skill-tree-page">
      <RunesContext.Provider value={runes}>
        <div className='skill-tree-wrapper' style={{backgroundImage: 'url("assets/talent-calc-bg.png")'}}>
          <TitleBar></TitleBar>
          <FullPath path="1"></FullPath>
          <FullPath path="2"></FullPath>
          <PointWallet></PointWallet>
        </div>

      </RunesContext.Provider>
    </div>
  );
}

export default SkillTreePage;
