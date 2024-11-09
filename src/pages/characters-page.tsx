import CharacterList from "@/components/characters-list";
import PageContainer from "@/components/layout/page-container-layout";
import PageTitle from "@/components/page-title";

const CharactersPage = () => {
  return (
    <PageContainer>
      <PageTitle title="Characters page" />
      <CharacterList />
    </PageContainer>
  );
};

export default CharactersPage;
