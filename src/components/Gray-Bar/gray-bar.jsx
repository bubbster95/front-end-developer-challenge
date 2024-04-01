import "./gray-bar.scss";

function GrayBar({ runesOnPath }) {
  let runesPurchased = 0;

  runesOnPath.map((rune) => (runesPurchased += rune.purchased));

  return (
    <div className="gray-bar">
      <div className={`progress progress-${runesPurchased - 1}`}></div>
    </div>
  );
}

export default GrayBar;
