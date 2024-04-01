import { render, screen } from '@testing-library/react';
import SkillTree from './index';

describe('Skill Tree', () => {

  render(<SkillTree />);

  const skillTreePage = screen.getByTestId(/skill-tree-page/i)
  const titleBar = screen.getByText(/TitanStar Legends/i);
  const pointWallet = screen.getByText(/Points Spent/i);
  const fullPaths = screen.getAllByTestId(/full-path/i);
  const runes = screen.getAllByTestId(/rune-wrapper/i);

  test('renders Skill Tree', () => {
    expect(skillTreePage).toBeInTheDocument();
    expect(titleBar).toBeInTheDocument();
    expect(pointWallet).toBeInTheDocument();
    expect(fullPaths.length).toBe(2)
    expect(runes.length).toBe(8)
  });

});
