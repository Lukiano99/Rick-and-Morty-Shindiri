import CharacterList from "@/components/characters-list";
import PageTitle from "@/components/page-title";

const CharactersPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <PageTitle title="Characters page" />
      <CharacterList />
    </div>
  );
};

export default CharactersPage;
