import "./index.scss";

function GrayBar({ runesOnPath }) {
  let runesPurchased = 0;

  runesOnPath.map((rune) => (runesPurchased += rune.purchased));

  return (
    <div className="gray-bar" data-testid="gray-bar">
      <div className={`progress progress-${runesPurchased - 1}`} data-testid="progress-bar"></div>
    </div>
  );
}

export default GrayBar;
