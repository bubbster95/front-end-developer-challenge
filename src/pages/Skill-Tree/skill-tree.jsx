import './skill-tree.scss';

import { createContext, useEffect } from 'react';

import TitleBar from '../../containers/Title-Bar/title-bar'
import FullPath from '../../containers/Full-Path/full-path';
import PointWallet from '../../containers/Point-Wallet/point-wallet'
import { useState } from 'react';

export const RunesContext = createContext([]);

function SkillTreePage() {
  const [wallet, setWallet] = useState({ spent: 0, total: 6 })
  const [runes, setRunes] = useState({
    path1: {
      '1': 0, 
      '2': 0, 
      '3': 0, 
      '4': 0
    },
    path2: {
      '5': 0, 
      '6': 0, 
      '7': 0, 
      '8': 0
    }
  })

  const handleRuneUpdate = (path, rune, value)=> {
    let totalSpent = checkWallet()
    if(totalSpent === wallet.total) {
      console.log("Can't buy rune, no points left")
    } else if (validateRune(path, rune)) {
      console.log("Can't buy this rune. Please purchase runes in order.")
    } else {
      setWallet({spent: totalSpent+1, total: 6})
      setRunes({...runes, [path]:{...runes[path], [rune]: value}})
    }
  }

  const validateRune = (runeId) => {
    return true
  }

  const checkWallet = () => {
    let path1 = Object.values(runes.path1).reduce((a,b) => a+b, 0)
    let path2 = Object.values(runes.path2).reduce((a,b) => a+b, 0) 

    return path1+path2
  }
  
  return (
    <div className="skill-tree-page">
      <RunesContext.Provider value={{runes, handleRuneUpdate }}>
        <div className='skill-tree-wrapper' style={{backgroundImage: 'url("assets/talent-calc-bg.png")'}}>
          <TitleBar></TitleBar>
          <FullPath path="1"></FullPath>
          <FullPath path="2"></FullPath>
          <PointWallet wallet={wallet}></PointWallet>
        </div>

      </RunesContext.Provider>
    </div>
  );
}

export default SkillTreePage;
