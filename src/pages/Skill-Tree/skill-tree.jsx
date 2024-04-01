import "./skill-tree.scss";

import { createContext, useEffect } from "react";

import TitleBar from "../../containers/Title-Bar/title-bar";
import FullPath from "../../containers/Full-Path/full-path";
import PointWallet from "../../containers/Point-Wallet/point-wallet";
import { useState } from "react";

import pathsConfig from "../../configs/paths.json";
import runesConfig from "../../configs/runes.json";

export const RunesContext = createContext([]);

function SkillTreePage() {
  const [wallet, setWallet] = useState({ spent: 0, total: 6 });
  const [animateRune, setAnimateRune] = useState({ runeId: "" });
  const [pointsFull, setPointsFull] = useState(false);
  const [runes, setRunes] = useState(runesConfig.runes);
  const [paths] = useState(pathsConfig.paths);

  useEffect(() => {
    checkWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runes]);

  const handleRuneUpdate = (runeId) => {
    let thisRune = findRuneData(runeId);
    if (thisRune.purchased === 0) purchaseRune(thisRune);
    else sellRune(thisRune);
  };

  const purchaseRune = (thisRune) => {
    const totalSpent = checkWallet();
    const newRuneState = [...runes]; // Creat mutable object to replace state later
    const runeIndex = findObjIndex(newRuneState, 'id', thisRune.id); // Finds the index of our rune data
    if (validateRunePurchase(thisRune) && totalSpent < wallet.total) {
      // Valid rune purchase
      thisRune.purchased = 1;
      newRuneState[runeIndex] = thisRune;
      setWallet({ spent: totalSpent + 1, total: 6 });
      setRunes(newRuneState);
    } else {
      // Invalid Rune Purchase
      if (totalSpent >= wallet.total) setPointsFull(true);
      setAnimateRune(thisRune.id);

      let frame = 0;
      let animationTimer = setInterval(() => {
        if (frame >= 30) {
          setAnimateRune("");
          setPointsFull(false);
          clearInterval(animationTimer);
        } else frame++;
      }, 30);
    }
  };

  const sellRune = (thisRune) => {
    const newRuneState = [...runes];
    const thisPath = findPath(thisRune.id).runesOnPath

    let runeIndex = thisPath.findIndex((r) => r === thisRune.id)

    // Sell every rune after runeId
    thisPath.map( (runeId, index) => {
      if (index >= runeIndex) newRuneState[findObjIndex(newRuneState, 'id', runeId)].purchased = 0
      return null
    } );

    setRunes(newRuneState);
  };

  /******************
   * Helper functions *
   *******************/

  // Tallys runes purchased on the path, compares tally+1 to pathIndex.
  // If the numbers match the rune is a valid selection
  const validateRunePurchase = (thisRune) => {
    // Find the rune path and index of rune on that path
    let thisPath = findPath(thisRune.id);
    let indexOnPath = 0;
    let purchases = thisPath.runesOnPath.map((runeId, index) => {
      let runeData = findRuneData(runeId)
      if (runeData.id === thisRune.id) indexOnPath = index
      return runeData.purchased
    });
    // If the rune index is equal to the amount of runes purchased it is a valid purchase.
    return (indexOnPath === purchases.reduce((a,b)=> a+b, 0))
  };

  // Check number of runes bought in total
  const checkWallet = () => {
    let runeIds = [];
    paths.map((thisPath) => (runeIds = [...runeIds, ...thisPath.runesOnPath]));

    let purchasedRuneCount = 0;
    runeIds.map(
      (runeId) =>
        (purchasedRuneCount += runes.find((r) => r.id === runeId).purchased)
    );

    setWallet({ spent: purchasedRuneCount, total: 6 });
    return purchasedRuneCount;
  };

  // Get the data of a particular rune
  const findRuneData = runeId => runes.find((obj) => obj.id === runeId)
  // Find the path that a particular rune lives on
  const findPath = runeId => paths.find((p) =>  p.runesOnPath.includes(runeId))
  // Finds the index of an item in an array of object based on the value passed in
  const findObjIndex = (array, key, value) => array.findIndex(obj => obj[key] === value)

  return (
    <div
      className="skill-tree-page"
      style={{ backgroundImage: 'url("assets/talent-calc-bg.png")' }}
    >
      {/* <WelcomeModal></WelcomeModal> */}
      <RunesContext.Provider
        value={{ runes, handleRuneUpdate, animateRune, pointsFull }}
      >
        <TitleBar></TitleBar>
        <div className="skill-tree-wrapper">
          {paths.map((path, index) => (
            <FullPath
              key={`path-${path.id}`}
              path={path}
              index={index}
            ></FullPath>
          ))}
          {/* <FullPath path="1"></FullPath>
          <FullPath path="2"></FullPath> */}
        </div>
        <PointWallet wallet={wallet}></PointWallet>
      </RunesContext.Provider>
    </div>
  );
}

export default SkillTreePage;
