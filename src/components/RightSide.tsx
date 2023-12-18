import React, { useEffect, useState } from "react";
import { Box, Button, Flex } from "theme-ui";
import CopyIcon from "./Icons/CopyIcon";

interface Props {
  isTrWordViewed: boolean;
  word: { tr: string; en: string };
}

const RightSide = ({ isTrWordViewed, word }: Props) => {
  const [isTextClicked, setIsTextClicked] = useState(false);
  const handleTextClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const viewedText = isTrWordViewed ? word.tr : word.en;
    navigator.clipboard.writeText(viewedText);
    setIsTextClicked(true);
  };

  useEffect(() => {
    if (isTextClicked) {
      setTimeout(() => {
        setIsTextClicked(false);
      }, 2000);
    }
  }, [isTextClicked]);

  return (
    <Flex
      sx={{
        width: "50px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "gray",
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Button
        sx={{
          width: 30,
          height: 30,
          backgroundColor: "transparent",
          padding: "6px",
          cursor: "pointer",
          borderRadius: "50%",
          transition: "background-color 500ms",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
        onClick={handleTextClick}
      >
        <CopyIcon />
      </Button>
    </Flex>
  );
};

export default RightSide;
