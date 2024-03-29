import "./gray-bar.scss";

function GrayBar({ runes }) {
  let runesPurchased = 0;
  Object.values(runes).map((rune) => (runesPurchased += rune));

  return (
    <div className="gray-bar">
      <div className={`progress progress-${runesPurchased - 1}`}></div>
    </div>
  );
}

export default GrayBar;
