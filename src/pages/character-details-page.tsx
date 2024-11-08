import CharacterDetails from "@/components/character-details";
import PageTitle from "@/components/page-title";

const CharacterDetailsPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <PageTitle title="Character details" />
      <CharacterDetails />
    </div>
  );
};

export default CharacterDetailsPage;
