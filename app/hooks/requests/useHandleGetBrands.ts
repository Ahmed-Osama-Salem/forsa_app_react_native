import {useState} from 'react';
import requestMaker from '../../utils/requestMaker';

interface BrandsPromise {
  id: number;
  title: string;
  thumbnail: string;
}

export const useHandleGetBrands = () => {
  const [brandsData, setBrandsData] = useState<BrandsPromise[]>([]);

  const fetchBrands = async (id: string) => {
    return requestMaker({
      endpoint: `stores/get_brands?sector=${id}`,
      method: 'GET',
    })
      .then(({data}) => {
        setBrandsData(data?.results as BrandsPromise[]);
        // console.log(data, 'brands');

        return data;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  return {brandsData, fetchBrands};
};
