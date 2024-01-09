'use client';
import axios from 'axios';
import { User } from '@/models';
import { useQuery } from '@tanstack/react-query';
import { getRequest } from '@/lib/fetch';
export const useUser = () => {
  // Get all user
  const fetchAllUser = async (): Promise<User[]> => {
    const res = await axios.get(`/api/staff/user_management/all`);
    return res.data;
  };
  const {
    data: users,
    isLoading: isUsersLoading,
    isFetching: isUsersFetching,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchAllUser(),
  });

  const onAddUser = async (value: any, password: any) => {
    const res = await axios.post(`/api/user/add`, {
      email: value?.email,
      password: password,
      fullName: value?.fullName,
      role: value.role,
      birthday: value?.birthday || null,
      phoneNumber: value?.phoneNumber,
    });
    console.log('🚀 ~ file: useUser.ts:22 ~ onAddUser ~ res:', res);

    return res;
  };
  const onGetUserDetail = async (userId) => {
    const productDetail = await getRequest({
      endPoint: `/api/user?userId=${userId}`,
    });
    // const data = await productDetail?.json();

    return productDetail;
  };

  return { onAddUser, users, isUsersLoading, isUsersFetching, onGetUserDetail };
};
