import {useState} from 'react';
import requestMaker from '../../utils/requestMaker';
import {BrandsPromise} from './useHandleGetBrands';
import {useLoading} from '../useLoading';

export const useHandleGetAllBrands = () => {
  const [allbrandsData, setAllBrandsData] = useState<BrandsPromise[]>([]);
  const {setIsLoading, isLoading} = useLoading();

  const fetchAllBrands = async (page: number) => {
    setIsLoading(true);
    return requestMaker({
      endpoint: `stores/get_brands?page=${page}&sector=`,
      method: 'GET',
    })
      .then(({data}) => {
        setIsLoading(false);
        setAllBrandsData([
          ...allbrandsData,
          ...(data?.results as BrandsPromise[]),
        ]);
      })
      .catch(err => {
        return err;
      });
  };

  return {allbrandsData, fetchAllBrands, isLoading};
};
