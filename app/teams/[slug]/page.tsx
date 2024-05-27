import Team from "@/src/screens/teams/ui/Team";

const TeamPage = ({ params }: { params: { slug: string } }) => {
  return <Team slug={params.slug} />;
};

export default TeamPage;
