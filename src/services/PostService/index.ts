
export const getPostById = async (blogid: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${blogid}`);
  return await res.json();
}