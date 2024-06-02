import { Product } from "@/src/screens/shop";

const PostPage = ({ params }: { params: { slug: string } }) => {
  return <Product slug={params.slug} />;
};

export default PostPage;
