import { render, screen } from '@testing-library/react';
import Rune from './index';

describe('Rune', () => {
  test('renders Rune', () => {
    render(<Rune  rune={{
      "id": "chevrons",
      "purchased": 0,
      "spriteOffset": 1,
      "spriteSheetURL": "assets/talent-icons-sprite.png",
      "price": 1
    }}/>);
    
    const runeIcon = screen.getByTestId(/rune-icon/i)
    const runeBorderColor = screen.getByTestId(/rune-border-color/i)
    const runeWrapper = screen.getByTestId(/rune-wrapper/i)
    

    expect(runeIcon).toBeInTheDocument();
    expect(runeBorderColor).toBeInTheDocument();
    expect(runeWrapper).toBeInTheDocument();
    
  });
});
