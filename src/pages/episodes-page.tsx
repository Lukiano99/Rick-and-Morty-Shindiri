import EpisodesList from "@/components/episodes-list";
import PageContainer from "@/components/layout/page-container-layout";
import PageTitle from "@/components/page-title";

const EpisodesPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Episodes page"></PageTitle>
      <EpisodesList />
    </PageContainer>
  );
};

export default EpisodesPage;
