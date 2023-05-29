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

  const fetchOffers = async (page: number) => {
    // setPageNumber('1');
    return requestMaker({
      endpoint: `stores/get_offers/?page=${page}`,
      method: 'GET',
    })
      .then(({data}) => {
        setOfferData([...offerData, ...(data?.results as OfferPromise[])]);
        // setOfferData(data?.results as OfferPromise[]);
        return data;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  return {offerData, fetchOffers};
};
