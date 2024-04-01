import { render, screen } from '@testing-library/react';
import PointWallet from './index';

describe('Point Wallet', () => {
  test('renders Point Wallet', () => {
    render(<PointWallet wallet={{ spent: 1, total: 6 }} />);
    const mainText = screen.getByText(/Points Spent/i);
    const total = screen.getByText(/\/ 6/i);
    const spent = screen.getByText(/1/i);

    let ratio = spent.style._values.transform

    expect(mainText).toBeInTheDocument();
    expect(total).toBeInTheDocument();
    expect(spent).toBeInTheDocument()
    
    expect(ratio).toBe('translateY(-28.5px)')
  });
});
