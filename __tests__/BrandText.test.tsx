import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BrandText from '../app/components/modules/brands/BrandText';

describe('BrandText', () => {
  const mockFetchBrands = jest.fn();
  const props = {
    brandName: 'Nike',
    fetchBrands: mockFetchBrands,
    sectorValue: 'clothing',
    value: 'clothing',
  };

  it('should render the brand name', () => {
    const {getByText} = render(<BrandText {...props} />);
    const brandName = getByText('Nike');
    expect(brandName).toBeDefined();
  });

  it('should call the fetchBrands function when the brand name is pressed', () => {
    const {getByText} = render(<BrandText {...props} />);
    const brandName = getByText('Nike');
    fireEvent.press(brandName);
    expect(mockFetchBrands).toBeCalled();
  });
});
