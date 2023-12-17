import { Words } from "@/utils/types";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface WordOptionsProps {
  children: ReactNode;
}

interface WordOptionsContextType {
  words: Words[];
  setWords: Dispatch<SetStateAction<Words[]>>;
}

const WordOptionsContext = createContext<WordOptionsContextType | undefined>(
  undefined
);

const WordOptionsProvider: React.FC<WordOptionsProps> = ({ children }) => {
  const [words, setWords] = useState<Words[]>([
    { id: 0, tr: "Hiç, asla", en: "Never", isTrWordViewed: true },
    { id: 1, tr: "Nadiren", en: "Rarely", isTrWordViewed: true },
    { id: 2, tr: "Bazen", en: "Sometimes", isTrWordViewed: true },
    { id: 3, tr: "Çoğu zaman, sıklıkla", en: "Often", isTrWordViewed: true },
    { id: 4, tr: "Her zaman, hep", en: "Always", isTrWordViewed: true },
    {
      id: 5,
      tr: "Tercih etmek, öncelik tanımak",
      en: "Prefer",
      isTrWordViewed: true,
    },
    { id: 6, tr: "Hafta sonu", en: "Weekend", isTrWordViewed: true },
    { id: 7, tr: "Her, her türlü", en: "Every", isTrWordViewed: true },
    { id: 8, tr: "Süslü, fantezi", en: "Fancy", isTrWordViewed: true },
    { id: 9, tr: "Pratik", en: "Practise", isTrWordViewed: true },
  ]);
  return (
    <WordOptionsContext.Provider value={{ words, setWords }}>
      {children}
    </WordOptionsContext.Provider>
  );
};

const useWordOptions = () => {
  const context = useContext(WordOptionsContext);
  if (!context) {
    throw new Error("useWordOptions must be used within a WordOptionsProvider");
  }
  return context;
};

export { WordOptionsProvider, useWordOptions };
