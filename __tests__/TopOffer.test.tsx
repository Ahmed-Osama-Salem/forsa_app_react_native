import React from 'react';
import {render} from '@testing-library/react-native';
import TopOffer from '../app/components/modules/TopOffer';

describe('TopOffer', () => {
  it('should render the correct number of offers', () => {
    const {getAllByTestId} = render(<TopOffer />);
    const offers = getAllByTestId('offer-slide');
    expect(offers.length).toBe(4);
  });

  it('should render the correct offer titles', () => {
    const {getAllByText} = render(<TopOffer />);
    const latestOffersTitle = getAllByText('Check out latest offers')[0];
    const iphoneOffersTitle = getAllByText('Check our iphone offers')[0];
    expect(latestOffersTitle).toBeDefined();
    expect(iphoneOffersTitle).toBeDefined();
  });
});
