import { getRequest } from '@/lib/fetch';

export const useCourse = () => {
  const onGetCourse = async (page: number, limit: number, type: string) => {
    const currentTime = new Date().toISOString();
    const res = await getRequest({
      endPoint: `/api/course/all?page=${page}&limit=${limit}&currentTime=${currentTime}&type=${type}`,
    });

    return res;
  };

  // Lấy top n khóa học mới nhất
  const onGetTopCourse = async (top: number) => {
    const res = await getRequest({
      endPoint: `/api/course/top?top=${top}`,
    });

    return new Response(JSON.stringify(res), { status: 200 });
  };

  const onGetCourseFromId = async (
    page: number,
    limit: number,
    type: string,
    userId: number
  ) => {
    const currentTime = new Date().toISOString();
    const res = await getRequest({
      endPoint: `/api/course/all1?page=${page}&limit=${limit}&currentTime=${currentTime}&type=${type}&userId=${userId}`,
    });

    return res;
  };
  return { onGetCourse, onGetTopCourse, onGetCourseFromId };
};
