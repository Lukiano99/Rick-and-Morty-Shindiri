import { Input } from "../ui/input";

const SearchBox = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search for character..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
};

export default SearchBox;
