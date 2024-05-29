import { Tournament } from "@/src/screens/tournaments";

const TournamentPage = ({ params }: { params: { slug: string } }) => {
  return <Tournament slug={params.slug} />;
};

export default TournamentPage;
