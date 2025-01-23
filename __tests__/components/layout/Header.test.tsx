import { render, screen } from '@testing-library/react';
import { Header } from '@/components/layout/Header';

describe('Header', () => {
  it('renders logo and navigation items', () => {
    render(<Header />);
    
    // Check logo
    expect(screen.getByAltText('Cipher Chain Logo')).toBeInTheDocument();
    
    // Check navigation items
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('White Paper')).toBeInTheDocument();
    expect(screen.getByText('Roadmap')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
  });
});