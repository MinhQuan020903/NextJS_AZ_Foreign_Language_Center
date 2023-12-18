'use client';
import Image from 'next/image';
import { HiUserGroup } from 'react-icons/hi';
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai';
import { Button } from '@nextui-org/react';

const CourseCard = ({ data }) => {
  return (
    <div
      className="relative rounded-xl p-4 bg-white w-fit max-w-full min-h-0 m-8 mx-auto
    drop-shadow-xl overflow-visible grid-rows-2 gap-4 break-words"
    >
      {/* Start Description Image */}

      <div className=" rounded-xl bg-neutral-400 max-h-[50%] row-span-1">
        <Image
          className="object-cover rounded-xl"
          src={data.thumbnail}
          alt="hero banner"
          width={300}
          height={300}
          loading="lazy"
        />
      </div>

      {/* Stop Description Image */}

      <div className="row-span-1">
        <div>
          {/* <p>
            <span className="text-silver-chalice text-sm font-medium">
              {data.BandScoreId}
            </span>
            <br />
          </p> */}

          <div className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
            <span className="text-black text-base font-medium ">
              {data.name}
            </span>
            <br />
          </div>

          <div className="flex items-center space-x-1">
            <HiUserGroup className="fill-orange" />
            <span className="text-orange font-medium text-sm">
              {data.totalAttendance} học viên
            </span>
          </div>
        </div>

        <hr className="border-t border-gray-400 border-dashed my-1" />

        <div className="flex mb-4 sm:space-x-2 flex-wrap">
          <div className="flex flex-wrap flex-shrink-0 min-w-[30%] items-center space-x-1">
            <AiOutlineClockCircle />
            <span className=" text-silver-chalice text-sm font-light">
              {data.totalSession} buổi
            </span>
          </div>

          <div className="flex flex-wrap flex-shrink-0 min-w-[30%] items-center space-x-1">
            <AiOutlineCalendar />
            <span className="text-silver-chalice text-sm font-light">
              {new Date(data.startTime).toLocaleDateString('vi-VN')}
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="absolute bg-orange min-w-[40%] rounded-full">
            <span className="text-white text-lg font-medium">Đăng ký</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
