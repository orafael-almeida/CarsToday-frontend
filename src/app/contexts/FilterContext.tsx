import React, { createContext, useState, useContext, ReactNode } from "react";

interface FilterContextProps {
  isMakeOpen: boolean;
  setIsMakeOpen: (isOpen: boolean) => void;
  isYearOpen: boolean;
  setIsYearOpen: (isOpen: boolean) => void;
  selectedMakeId: string;
  setSelectedMakeId: (makeId: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  handleMakeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleYearChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [selectedMakeId, setSelectedMakeId] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMakeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedMakeId(event.target.value);
    setIsMakeOpen(false);
  };

  const handleYearChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedYear(event.target.value);
    setIsYearOpen(false);
  };

  return (
    <FilterContext.Provider
      value={{
        isMakeOpen,
        setIsMakeOpen,
        isYearOpen,
        setIsYearOpen,
        selectedMakeId,
        setSelectedMakeId,
        selectedYear,
        setSelectedYear,
        handleMakeChange,
        handleYearChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
