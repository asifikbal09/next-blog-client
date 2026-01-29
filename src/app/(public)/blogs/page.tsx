import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlog } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'All Blogs | NextBlog',
  description: 'Browse through all the blogs available on our platform.'
}

const AllBlogsPage =async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`,{
    cache: 'no-store'
  })
  const {data:blogs} = await res.json()
  
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-3 gap-4 my-10">
        {
          blogs && blogs.map((blog:IBlog )=><BlogCard key={(Number(blog?.id))} post={blog}/>)
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
