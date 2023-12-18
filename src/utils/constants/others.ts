import { ThemeUIStyleObject } from "theme-ui";

export const wordCardContainerStyle: ThemeUIStyleObject = {
  position: "absolute",
  top: 0,
  backgroundColor: "darkgray",
  border: "1px solid black",
  borderRadius: 6,
  width: "100%",
  height: "100%",
  fontSize: "20px",
  fontWeight: 500,
  cursor: "pointer",
  padding: 0,
  transition: "left 500ms",
};

export const wordCardTextStyle: ThemeUIStyleObject = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  borderTopLeftRadius: 6,
  borderBottomLeftRadius: 6,
  padding: "4px 8px",
  textAlign: "center",
};

export const rightSideButtonStyle: ThemeUIStyleObject = {
  width: 30,
  height: 30,
  backgroundColor: "transparent",
  padding: "6px",
  cursor: "pointer",
  borderRadius: "50%",
  transition: "background-color 500ms",
  "&:hover": {
    backgroundColor: "darkgray",
  },
};
