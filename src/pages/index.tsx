import CopyTextButton from "@/components/CopyTextButton";
import { wordCardContainerStyle } from "@/utils/constants/others";
import { Words } from "@/utils/types";
import Head from "next/head";
import { useState } from "react";
import { Box, Button, Flex, Text } from "theme-ui";

export default function Home() {
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

  const handleWordContainerClick = (clickedId: number) => {
    const updatedWords = words?.map((item) => {
      if (item.id === clickedId) {
        return { ...item, isTrWordViewed: !item.isTrWordViewed };
      } else {
        return item;
      }
    });
    setWords(updatedWords);
  };

  return (
    <>
      <Head>
        <title>EN - TR WORDS</title>
        <meta name="description" content="EN-TR WORDS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
            flexWrap: "wrap",
            padding: 16,
            userSelect: "none",
          }}
        >
          {words?.map((word) => {
            return (
              <Box
                key={word.id}
                sx={{
                  width: 350,
                  height: 110,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Flex
                  sx={{
                    ...wordCardContainerStyle,
                    left: word?.isTrWordViewed ? 0 : -350,
                  }}
                  onClick={() => handleWordContainerClick(word.id)}
                >
                  {word.tr}
                  <CopyTextButton
                    isTrWordViewed={word.isTrWordViewed}
                    word={{ tr: word.tr, en: word.en }}
                  />
                </Flex>
                <Flex
                  sx={{
                    ...wordCardContainerStyle,
                    left: word?.isTrWordViewed ? -350 : 0,
                  }}
                  onClick={() => handleWordContainerClick(word.id)}
                >
                  {word.en}
                  <CopyTextButton
                    isTrWordViewed={word.isTrWordViewed}
                    word={{ tr: word.tr, en: word.en }}
                  />
                </Flex>
              </Box>
            );
          })}
        </Flex>
      </main>
    </>
  );
}
