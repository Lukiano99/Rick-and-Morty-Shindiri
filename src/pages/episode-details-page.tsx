import EpisodeDetails from "@/components/episode-details";
import PageTitle from "@/components/page-title";

const EpisodeDetailsPage = () => {
  return (
    <div className="flex flex-col gap-20 w-full">
      <PageTitle title="Episode details" />
      <EpisodeDetails />
    </div>
  );
};

export default EpisodeDetailsPage;
