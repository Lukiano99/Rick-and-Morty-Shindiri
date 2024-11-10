import { CheckIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Status } from "@/types";

interface DropDownFilterProps {
  title?: string;
  options: {
    label: string;
    value: Status;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  onSelectionChange: (selectedValues: Status[]) => void;
}
const DropDownFilter = ({
  options,
  title,
  onSelectionChange,
}: DropDownFilterProps) => {
  const [selectedValues, setSelectedValues] = useState<Status[]>([]);

  const handleSelectionChange = (newSelectedValues: Status[]) => {
    setSelectedValues(newSelectedValues);
    onSelectionChange(newSelectedValues);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-12 border-dashed">
          <PlusCircleIcon />
          {title}
          {selectedValues.length > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />

              <div className="space-x-1 lg:flex">
                {options
                  .filter((option) => selectedValues.includes(option.value))
                  .map((option) => (
                    <Badge
                      variant="secondary"
                      key={option.value}
                      className="rounded-sm px-1 font-normal"
                    >
                      {option.label}
                    </Badge>
                  ))}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      const newSelectedValues = isSelected
                        ? selectedValues.filter((val) => val !== option.value)
                        : [...selectedValues, option.value];
                      handleSelectionChange(newSelectedValues);
                    }}
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon />
                    </div>
                    {option.icon && (
                      <option.icon
                        className={cn(
                          "mr-2 h-4 w-4 text-muted-foreground",
                          option.value === "Alive" && "text-green-500",
                          option.value === "Dead" && "text-red-500",
                          option.value === "unknown" && "text-muted-foreground"
                        )}
                      />
                    )}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => handleSelectionChange([])}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default DropDownFilter;
