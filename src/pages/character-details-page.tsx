import CharacterDetails from "@/components/character-details";
import PageContainer from "@/components/layout/page-container-layout";
import PageTitle from "@/components/page-title";

const CharacterDetailsPage = () => {
  return (
    <PageContainer fullWidth>
      <PageTitle title="Character details" />
      <CharacterDetails />
    </PageContainer>
  );
};

export default CharacterDetailsPage;
