
import './rune.scss';

function Rune({rune}) {
    let runeXOffset = rune.id;
    let runeYOffset = rune.purchased
    let runeIconStyle = {
        backgroundImage: 'url("assets/talent-icons-sprite.png")',
        backgroundPosition: `-${50* (runeXOffset-1)}px ${50* (runeYOffset-1)}px`,
    }
  return (
    <div className={`rune-wrapper  ${rune.purchased === 1 && 'active-rune-wrapper'}`} >
        <div className='rune-icon' style={runeIconStyle}>

        </div>
    </div>
  );
}

export default Rune;
