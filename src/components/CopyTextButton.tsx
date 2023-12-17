import React, { useEffect, useState } from "react";
import { Button } from "theme-ui";

interface Props {
  isTrWordViewed: boolean;
  word: { tr: string; en: string };
}

const CopyTextButton = ({ isTrWordViewed, word }: Props) => {
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
    <Button
      sx={{
        position: "absolute",
        bottom: "2px",
        right: "2px",
        backgroundColor: "transparent",
        fontSize: "14px",
        padding: "4px",
        color: "darkgray",
        cursor: "pointer",
        transition: "color 500ms",
        "&:hover": {
          color: "white",
        },
      }}
      onClick={handleTextClick}
    >
      {isTextClicked ? "Copied" : "Copy"}
    </Button>
  );
};

export default CopyTextButton;
