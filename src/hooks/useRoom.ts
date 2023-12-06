import { getRequest } from '@/lib/fetch';

export const useRoom = () => {
  const onGetRoom = async (
    page: number,
    limit: number,
    search: string,
    type: number
  ) => {
    const res = await getRequest({
      endPoint: `/api/room/all?page=${page}&limit=${limit}&search=${search}&type=${type}`,
    });

    return res;
  };

  return { onGetRoom };
};
