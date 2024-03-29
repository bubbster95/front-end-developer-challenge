import "./skill-tree.scss";

import { createContext, useEffect } from "react";

import TitleBar from "../../containers/Title-Bar/title-bar";
import FullPath from "../../containers/Full-Path/full-path";
import PointWallet from "../../containers/Point-Wallet/point-wallet";
import { useState } from "react";

export const RunesContext = createContext([]);

function SkillTreePage() {
  const [wallet, setWallet] = useState({ spent: 0, total: 6 });
  const [animateRune, setAnimateRune] = useState({ runeId: "" });
  const [pointsFull, setPointsFull] = useState(false);
  const [runes, setRunes] = useState({
    path1: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    },
    path2: {
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    },
  });

  useEffect(() => {
    checkWallet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runes]);

  const handleRuneUpdate = (path, runeId) => {
    if (runes[path][runeId] === 0) purchaseRune(path, runeId);
    else sellRune(path, runeId);
  };

  const purchaseRune = (path, runeId) => {
    const totalSpent = checkWallet();
    if (
      validateRunePurchase(path, runeId, totalSpent) &&
      totalSpent < wallet.total
    ) {
      // Valid rune purchase
      setWallet({ spent: totalSpent + 1, total: 6 });
      setRunes({ ...runes, [path]: { ...runes[path], [runeId]: 1 } });
    } else {
      // Invalid Rune Purchase
      if (totalSpent >= wallet.total) setPointsFull(true);
      setAnimateRune(runeId);

      let frame = 0;
      let animationTimer = setInterval(() => {
        if (frame >= 30) {
          console.log("exit Animation");
          setAnimateRune("");
          setPointsFull(false);
          clearInterval(animationTimer);
        } else {
          frame++;
        }
      }, 30);
    }
  };

  const sellRune = (path, runeId) => {
    // Sell every rune after runeId
    let newValues = {};

    Object.keys(runes[path]).map(
      (key) => (newValues[key] = JSON.parse(key) < JSON.parse(runeId) ? 1 : 0)
    );

    setRunes({ ...runes, [path]: newValues });
  };

  /******************
   * Helper functions *
   *******************/

  // Tallys runes purchased on the path, compares tally+1 to pathIndex.
  // If the numbers match the rune is a valid selection
  const validateRunePurchase = (path, runeId) => {
    let totalRuns = Object.values(runes[path]).reduce((a, b) => a + b);
    let pathIndex =
      path === "path2" ? JSON.parse(runeId - 4) : JSON.parse(runeId);
    return totalRuns + 1 === pathIndex;
  };

  // Check number of runes bought in total
  const checkWallet = () => {
    let path1 = Object.values(runes.path1).reduce((a, b) => a + b, 0);
    let path2 = Object.values(runes.path2).reduce((a, b) => a + b, 0);

    setWallet({ spent: path1 + path2, total: 6 });
    return path1 + path2;
  };

  return (
    <div
      className="skill-tree-page"
      style={{ backgroundImage: 'url("assets/talent-calc-bg.png")' }}
    >
      <RunesContext.Provider
        value={{ runes, handleRuneUpdate, animateRune, pointsFull }}
      >
        <TitleBar></TitleBar>
        <div className="skill-tree-wrapper">
          <FullPath path="1"></FullPath>
          <FullPath path="2"></FullPath>
        </div>
        <PointWallet wallet={wallet}></PointWallet>
      </RunesContext.Provider>
    </div>
  );
}

export default SkillTreePage;
