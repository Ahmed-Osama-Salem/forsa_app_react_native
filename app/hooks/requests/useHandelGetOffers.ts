/* eslint-disable react-hooks/exhaustive-deps */
import {useState} from 'react';
import requestMaker from '../../utils/requestMaker';
import {SectorPromise} from './useHandleGetSectors';

export interface OfferPromise {
  id: number;
  title: string;
  price: number;
  description: string;
  product_label: string;
  brand: {
    id: string;
    title: string;
    thumbnail: string;
    sector: SectorPromise;
  };
}

export const useHandleGetOffers = () => {
  const [offerData, setOfferData] = useState<OfferPromise[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchOffers = async (page: number) => {
    setIsLoading(true);
    return requestMaker({
      endpoint: `stores/get_offers/?page=${page}`,
      method: 'GET',
    })
      .then(({data}) => {
        setOfferData([...offerData, ...(data?.results as OfferPromise[])]);
        setIsLoading(false);
        return data;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  return {offerData, fetchOffers, isLoading, setIsLoading};
};
