import EpisodeDetails from "@/components/episode-details";
import PageContainer from "@/components/layout/page-container-layout";
import PageTitle from "@/components/page-title";

const EpisodeDetailsPage = () => {
  return (
    <PageContainer fullWidth>
      <PageTitle title="Episode details" />
      <EpisodeDetails />
    </PageContainer>
  );
};

export default EpisodeDetailsPage;
