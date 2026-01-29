import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) => {
const { blogid } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogid}`);
  const blog= await res.json();
    return{
        title: blog.title,
        description: blog.content.slice(0,150)
    }
}

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) => {
  const { blogid } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogid}`);
  const blog= await res.json();

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Blog Details page</h1>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
