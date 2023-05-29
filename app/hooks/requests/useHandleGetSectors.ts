import {useEffect, useState} from 'react';
import requestMaker from '../../utils/requestMaker';

export interface SectorPromise {
  label: string;
  value: string;
}

export const useHandleGetSectors = () => {
  const [sectorData, setSectorData] = useState<SectorPromise[]>([]);
  const fetchSectors = async () => {
    return requestMaker({
      endpoint: 'stores/get_sectors/',
      method: 'GET',
    })
      .then(({data}) => {
        setSectorData(data?.results as SectorPromise[]);
        return data;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  useEffect(() => {
    fetchSectors();
  }, []);
  return {sectorData};
};
