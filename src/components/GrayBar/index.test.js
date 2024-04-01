import { render, screen } from '@testing-library/react';
import GrayBar from './index';

describe('Gray Bar', () => {
  test('renders Gray Bar', () => {
    render(<GrayBar  runesOnPath={['chevrons', 'silverware', 'cake', 'crown']}/>);
    const grayBar = screen.getByTestId(/gray-bar/i)
    const progressBar = screen.getByTestId(/progress-bar/i)
    
    expect(grayBar).toBeInTheDocument();
    expect(progressBar).toBeInTheDocument();
    
  });
});
