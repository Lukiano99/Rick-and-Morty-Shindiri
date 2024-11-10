import { CheckCircleIcon, CircleHelpIcon, XCircleIcon } from "lucide-react";
import DropDownFilter from "./dropdown-filter";
import { Input } from "./ui/input";
import { Status } from "@/types";
import { useState } from "react";

const statusOptions = [
  {
    label: "Alive",
    value: "Alive" as Status,
    icon: CheckCircleIcon,
  },
  {
    label: "Dead",
    value: "Dead" as Status,
    icon: XCircleIcon,
  },
  {
    label: "Unknown",
    value: "unknown" as Status,
    icon: CircleHelpIcon, // Ikona za prikaz "Unknown" statusa
  },
];

interface CharactersToolbarProps {
  onSearchChange: (value: string) => void;
  onStatusChange?: (value: Status[]) => void;
  searchPlaceHolder?: string;
}
const CharactersToolbar = ({
  onSearchChange,
  onStatusChange,
  searchPlaceHolder,
}: CharactersToolbarProps) => {
  const [, setFilters] = useState<Status[]>([]);

  const handleSelectionChange = (selectedValues: Status[]) => {
    setFilters(selectedValues); // Postavlja filtere na osnovu selektovanih vrednosti
    if (onStatusChange) onStatusChange(selectedValues);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          onChange={(e) => onSearchChange(e.target.value)}
          type="search"
          placeholder={searchPlaceHolder ?? "Search for character..."}
          className="md:w-[100px] h-12 lg:w-[300px] focus:ring-0.5 focus:ring-0"
        />

        {onStatusChange && (
          <DropDownFilter
            title="Status"
            options={statusOptions}
            onSelectionChange={handleSelectionChange}
          />
        )}
      </div>
    </div>
  );
};

export default CharactersToolbar;
