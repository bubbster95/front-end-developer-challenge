
import './rune.scss';

function Rune({rune}) {
    let runeXOffset = rune.id;
    let runeYOffset = rune.purchased
    let runeIconStyle = {
        backgroundImage: 'url("assets/talent-icons-sprite.png")',
        backgroundPosition: `-${50* (runeXOffset-1)}px ${50* (runeYOffset-1)}px`
    }
  return (
    <div className={`rune-wrapper  ${rune.purchased === 1 && 'active-rune-wrapper'}`} >
        <div className={`rune-icon ${rune.purchased === 1 && 'active-rune-icon'}`} style={runeIconStyle}></div>
        <div className={`rune-border-color ${rune.purchased === 1 && 'rune-border-color-active'}`}></div>
    </div>
  );
}

export default Rune;
