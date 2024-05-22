import Product from "@/src/screens/shop/ui/Product";

const PostPage = ({ params }: { params: { slug: string } }) => {
  return <Product slug={params.slug} />;
};

export default PostPage;
