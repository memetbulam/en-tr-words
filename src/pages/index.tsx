import { Words } from "@/utils/types";
import Head from "next/head";
import { useState } from "react";
import { Box, Flex, Text } from "theme-ui";

export default function Home() {
  const [words, setWords] = useState<Words[]>([
    { id: 0, en: "Never", tr: "Hiç, asla", isTrWordViewed: true },
    { id: 1, en: "Rarely", tr: "Nadiren", isTrWordViewed: true },
    { id: 2, en: "Sometimes", tr: "Bazen", isTrWordViewed: true },
    { id: 3, en: "Often", tr: "Çoğu zaman, sıklıkla", isTrWordViewed: true },
    { id: 4, en: "Always", tr: "Her zaman, hep", isTrWordViewed: true },
    {
      id: 5,
      en: "Prefer",
      tr: "Tercih etmek, öncelik tanımak",
      isTrWordViewed: true,
    },
    { id: 6, en: "Weekend", tr: "Hafta sonu", isTrWordViewed: true },
    { id: 7, en: "Every", tr: "Her, her türlü", isTrWordViewed: true },
    { id: 8, en: "Fancy", tr: "Süslü, fantezi", isTrWordViewed: true },
    { id: 9, en: "Practise", tr: "Pratik", isTrWordViewed: true },
  ]);

  const handleTrContainerClick = (word: Words) => {
    const updatedWords = words?.map((item) => {
      if (item.id === word.id) {
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
                    position: "absolute",
                    left: word?.isTrWordViewed ? 0 : -350,
                    top: 0,
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                    borderRadius: 6,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "4px 8px",
                    transition: "left 500ms",
                  }}
                  onClick={() => handleTrContainerClick(word)}
                >
                  {word.tr}
                </Flex>
                <Flex
                  sx={{
                    position: "absolute",
                    left: word?.isTrWordViewed ? -350 : 0,
                    top: 0,
                    backgroundColor: "lightblue",
                    border: "1px solid black",
                    borderRadius: 6,
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "4px 8px",
                    transition: "left 500ms",
                  }}
                  onClick={() => handleTrContainerClick(word)}
                >
                  {word.en}
                </Flex>
                {/* <Flex>{word.en}</Flex> */}
              </Box>
            );
          })}
        </Flex>
      </main>
    </>
  );
}
