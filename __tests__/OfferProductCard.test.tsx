import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import OfferProductCard from '../app/components/modules/offers/OfferProductCard';
import {OfferPromise} from '../app/hooks/requests/useHandelGetOffers';

const mockOffer: OfferPromise = {
  brand: {
    thumbnail: 'https://example.com/image.jpg',
    sector: {
      value: '1',
      label: 'Example Sector',
    },
    title: 'Example Offer',
    id: '1',
  },
  description: 'Example Description',
  price: 9.99,
  id: 0,
  title: '',
  product_label: 'example',
};

describe('OfferProductCard', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<OfferProductCard item={mockOffer} />);
    expect(getByTestId('offer-card')).toBeDefined();
  });

  it('displays the offer title', () => {
    const {getByText} = render(<OfferProductCard item={mockOffer} />);
    expect(getByText('Example Offer')).toBeDefined();
  });

  it('toggles the additional offer information when pressed', () => {
    const {getByText, queryByText} = render(
      <OfferProductCard item={mockOffer} />,
    );
    fireEvent.press(getByText('Example Offer'));
    expect(queryByText('Example Description')).toBeDefined();
    expect(queryByText('Price: 9.99')).toBeDefined();
    fireEvent.press(getByText('Example Offer'));
    expect(queryByText('Example Description')).toBeNull();
    expect(queryByText('Price: 9.99')).toBeNull();
  });
});
