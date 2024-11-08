import { Input } from "../ui/input";

interface SearchBoxProps {
  onChange: (value: string) => void;
}
const SearchBox = ({ onChange }: SearchBoxProps) => {
  return (
    <div>
      <Input
        onChange={(e) => onChange(e.target.value)}
        type="search"
        placeholder="Search for character..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
};

export default SearchBox;
