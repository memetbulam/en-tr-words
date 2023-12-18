import React, { useEffect, useState } from "react";
import { Box, Button, Flex } from "theme-ui";
import CopyIcon from "./Icons/CopyIcon";
import GoogleIcon from "./Icons/GoogleIcon";
import DeeplIcon from "./Icons/DeeplIcon";
import { rightSideButtonStyle } from "@/utils/constants/others";

interface Props {
  isTrWordViewed: boolean;
  word: { tr: string; en: string };
}

const RightSide = ({ isTrWordViewed, word }: Props) => {
  const handleCopyClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const viewedText = isTrWordViewed ? word.tr : word.en;
    navigator.clipboard.writeText(viewedText);
  };

  const handleGoogleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (isTrWordViewed) {
      window.open(
        `https://translate.google.com/?hl=tr&sl=tr&tl=en&text=${word?.tr}&op=translate`,
        "_blank"
      );
    } else {
      window.open(
        `https://translate.google.com/?hl=tr&sl=en&tl=tr&text=${word?.en}&op=translate`,
        "_blank"
      );
    }
  };

  const handleDeeplClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (isTrWordViewed) {
      window.open(
        `https://www.deepl.com/translator#tr/en/${word?.tr}`,
        "_blank"
      );
    } else {
      window.open(
        `https://www.deepl.com/translator#en/tr/${word?.en}`,
        "_blank"
      );
    }
  };

  return (
    <Flex
      sx={{
        width: "40px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        cursor: "default",
      }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Button sx={rightSideButtonStyle} onClick={handleGoogleClick}>
        <GoogleIcon />
      </Button>
      <Button sx={rightSideButtonStyle} onClick={handleDeeplClick}>
        <DeeplIcon />
      </Button>
      <Button sx={rightSideButtonStyle} onClick={handleCopyClick}>
        <CopyIcon />
      </Button>
    </Flex>
  );
};

export default RightSide;
