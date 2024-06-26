import { render, screen } from '@testing-library/react';
import TitleBar from './index';

describe('Title Bar', () => {
  test('renders Title Bar', () => {
    render(<TitleBar />);
    const linkElement = screen.getByText(/TitanStar Legends/i);
    expect(linkElement).toBeInTheDocument();
  });
});
