// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from "react-icons/fa6";
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        {blog.coverImage && (
          <Image
            src={blog.coverImage.url}
            height={1080}
            width={1920}
            alt=""
            className="h-full w-full group-hover:scale-110 transition-all duration-300"
          />
        )}
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.publishedAt)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <FaEye />
              <span>{blog.views}</span>
            </p>
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.reactionCount}</span>
            </p>
            {blog.responseCount > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.responseCount}</span>
              </p>
            )}
          </div>
        </div>
        <Link target="_blank" href={blog.url}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {blog.title}
          </p>
        </Link>
        <p className="mb-2 text-sm text-[#16f2b3]">
          {`${blog.readTimeInMinutes} Min Read`}
        </p>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3 truncate-ellipsis">
          {blog.brief}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;