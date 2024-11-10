import {
  CheckCircleIcon,
  CircleHelpIcon,
  SearchIcon,
  XCircleIcon,
} from "lucide-react";
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
  searchPlaceHolder: string;
}
const ListToolbar = ({
  onSearchChange,
  onStatusChange,
  searchPlaceHolder,
}: CharactersToolbarProps) => {
  const [, setFilters] = useState<Status[]>([]);

  const handleSelectionChange = (selectedValues: Status[]) => {
    setFilters(selectedValues);
    if (onStatusChange) onStatusChange(selectedValues);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex md:flex-row flex-col md:flex-1 items-start md:items-center gap-2">
        <div className="relative">
          <Input
            onChange={(e) => onSearchChange(e.target.value)}
            type="search"
            placeholder={searchPlaceHolder}
            className="md:w-[100px] pl-12 h-12 lg:w-[300px] focus:ring-0.5 focus:ring-0"
          />
          <SearchIcon className="absolute size-6 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>

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

export default ListToolbar;
