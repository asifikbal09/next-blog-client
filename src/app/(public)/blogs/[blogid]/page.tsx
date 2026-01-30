import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getPostById } from "@/services/PostService";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogid: string }>;
}) => {
const { blogid } = await params;
  
  const blog= await getPostById(Number(blogid));
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
  const blog= await getPostById(Number(blogid));

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Blog Details page</h1>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
