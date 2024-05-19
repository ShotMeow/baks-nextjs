import { Post } from "@/src/screens/news";

const PostPage = ({ params }: { params: { slug: string } }) => {
  return <Post slug={params.slug} />;
};

export default PostPage;
