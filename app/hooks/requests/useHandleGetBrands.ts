import {useState} from 'react';
import requestMaker from '../../utils/requestMaker';

interface BrandsPromise {
  id: number;
  title: string;
  thumbnail: string;
}

export const useHandleGetBrands = () => {
  const [brandsData, setBrandsData] = useState<BrandsPromise[]>([]);

  const fetchBrands = async (id: string, page: number) => {
    return requestMaker({
      endpoint: `stores/get_brands?page=${page}&sector=${id}`,
      method: 'GET',
    })
      .then(({data}) => {
        if (page > 1) {
          setBrandsData([...brandsData, ...(data?.results as BrandsPromise[])]);
        } else {
          setBrandsData(data?.results as BrandsPromise[]);
        }

        return data;
      })
      .catch(err => {
        return err;
      });
  };

  return {brandsData, fetchBrands};
};
