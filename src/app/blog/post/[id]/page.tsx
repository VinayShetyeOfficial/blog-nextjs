import { notFound } from "next/navigation";
import Post from "@/app/ui/components/posts/Post";
import { connectToDB, getPosts } from "@/app/lib/data";

// Define the shape of the post object
interface PostType {
  id: string;
  title: string;
  content: string;
}

export default async function Page({ params }: { params: { id: string } }) {
  const posts: PostType[] = await getPosts(); // Ensure getPosts returns an array of PostType
  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>
  );
}
