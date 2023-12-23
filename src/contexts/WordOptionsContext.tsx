import { Words } from "@/utils/types";
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface WordOptionsProps {
  children: ReactNode;
}

interface WordOptionsContextType {
  words: Words[];
  setWords: Dispatch<SetStateAction<Words[]>>;
  dublicateControl: () => void;
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
    { id: 10, tr: "Ev arkadaşı", en: "Flatmate", isTrWordViewed: true },
    { id: 11, tr: "Stresli", en: "Stressful", isTrWordViewed: true },
    { id: 12, tr: "Güzel", en: "Lovely", isTrWordViewed: true },
    { id: 13, tr: "Yorucu", en: "Tiring", isTrWordViewed: true },
    { id: 14, tr: "Verimli", en: "Productive", isTrWordViewed: true },
    { id: 15, tr: "Berbat", en: "Awful", isTrWordViewed: true },
    { id: 16, tr: "Çok kötü", en: "Miserable", isTrWordViewed: true },
    { id: 17, tr: "Yağmurlu", en: "Rainy", isTrWordViewed: true },
    { id: 18, tr: "Rüzgarlı", en: "Windy", isTrWordViewed: true },
    {
      id: 19,
      tr: "Gök gürültülü fırtına",
      en: "Thunderstorm",
      isTrWordViewed: true,
    },
    { id: 20, tr: "Soğuk", en: "Cold", isTrWordViewed: true },
    { id: 21, tr: "Sıcak", en: "Hot", isTrWordViewed: true },
    { id: 22, tr: "Meşgul", en: "Busy", isTrWordViewed: true },
    { id: 23, tr: "Tembel", en: "Lazy", isTrWordViewed: true },
    { id: 24, tr: "Üzgün", en: "Sad", isTrWordViewed: true },
    { id: 25, tr: "Kasaba", en: "Town", isTrWordViewed: true },
    { id: 26, tr: "Yakın", en: "Near", isTrWordViewed: true },
    { id: 27, tr: "Köy", en: "Village", isTrWordViewed: true },
    { id: 28, tr: "Sessiz", en: "Quiet", isTrWordViewed: true },
    { id: 29, tr: "Kız Çocuğu", en: "Daughter", isTrWordViewed: true },
    { id: 30, tr: "Teyze - Hala", en: "Aunt", isTrWordViewed: true },
    { id: 31, tr: "Yeğen(Oğul)", en: "Nephew", isTrWordViewed: true },
    { id: 32, tr: "Yeğen(Kız)", en: "Niece", isTrWordViewed: true },
    { id: 33, tr: "Nazik", en: "Kind", isTrWordViewed: true },
    { id: 34, tr: "Arkadaş canlısı", en: "Friendly", isTrWordViewed: true },
    { id: 35, tr: "Kibar", en: "Polite", isTrWordViewed: true },
    { id: 36, tr: "Komik", en: "Funny", isTrWordViewed: true },
    { id: 37, tr: "Eğlenceli", en: "fun", isTrWordViewed: true },
    { id: 38, tr: "Utangaç", en: "Shy", isTrWordViewed: true },
    { id: 39, tr: "Kaba", en: "Rude", isTrWordViewed: true },
    { id: 40, tr: "Tertipli", en: "Tidy", isTrWordViewed: true },
    { id: 41, tr: "Dağınık", en: "Untidy", isTrWordViewed: true },
    { id: 42, tr: "Düzenli", en: "Organised", isTrWordViewed: true },
    { id: 43, tr: "Düzensiz", en: "Disorganised", isTrWordViewed: true },
    { id: 44, tr: "Yaratıcı", en: "Creative", isTrWordViewed: true },
    { id: 45, tr: "Yardımcı", en: "Helpful", isTrWordViewed: true },
    { id: 46, tr: "Daha az", en: "Less, Fewer", isTrWordViewed: true },
    { id: 47, tr: "İş, meslek", en: "Job", isTrWordViewed: true },
    { id: 48, tr: "Yolculuk", en: "Journey", isTrWordViewed: true },
    { id: 49, tr: "Kıskanç", en: "Jealous", isTrWordViewed: true },
    { id: 50, tr: "Adalet", en: "Justice", isTrWordViewed: true },
    {
      id: 51,
      tr: "Eleştirel, direkt eleştirel",
      en: "Judgmental",
      isTrWordViewed: true,
    },
    {
      id: 52,
      tr: "Şok edici / Özel detaylar barındıran",
      en: "Juicy",
      isTrWordViewed: true,
    },
  ]);

  const dublicateControl = useCallback(() => {
    const duplicatehWords = words.filter((word, index, array) => {
      return (
        array.findIndex((w) => w.tr === word.tr || w.en === word.en) !== index
      );
    });
    console.log("Duplicate Turkish Words:", duplicatehWords);
  }, [words]);

  return (
    <WordOptionsContext.Provider value={{ words, setWords, dublicateControl }}>
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
