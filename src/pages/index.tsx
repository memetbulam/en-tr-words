import CopyTextButton from "@/components/CopyTextButton";
import { useWordOptions } from "@/contexts/WordOptionsContext";
import { wordCardContainerStyle } from "@/utils/constants/others";
import Head from "next/head";
import { Box, Button, Flex } from "theme-ui";

export default function Home() {
  const { words, setWords, dublicateControl } = useWordOptions();

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
        <Button
          sx={{
            position: "fixed",
            right: 0,
            bottom: 0,
            padding: 0,
            width: 16,
            height: 16,
            borderRadius: "50%",
            opacity: 0,
          }}
          onClick={() => {
            dublicateControl();
          }}
        ></Button>
      </main>
    </>
  );
}
