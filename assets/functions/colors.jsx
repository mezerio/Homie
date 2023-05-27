// import { useSelector } from "react-redux";

// const ColorScheme = () => {
//   const { colorTheme } = useSelector((state) => state.myReducer);

//   let colorScheme = {};

//   switch (colorTheme) {
//     case "dark":
//       colorScheme = {
//         primary: "#282828",
//         secondary: "#363636",
//         tertiary: "#969696",
//         base: "#613a97",
//         primaryAccent: "#00897b",
//         secondaryAccent: "#00897b",
//         tertiaryAccent: "#00897b",
//         primaryFont: "white",
//         secondaryFont: "black",
//         tertiaryFont: "red",
//         alert: "red",
//       };
//       break;
//     case "light":
//       colorScheme = {
//         primary: "white",
//         secondary: "#c9e7f3",
//         tertiary: "#f2f3f5",
//         base: "#613a97",
//         primaryAccent: "#8ecae4",
//         secondaryAccent: "#8ecae4",
//         tertiaryAccent: "#8ecae4",
//         primaryFont: "black",
//         secondaryFont: "white",
//         tertiaryFont: "red",
//         alert: "red",
//       };
//       break;
//     case "purple":
//       colorScheme = {
//         primary: "#2F1E40",
//         secondary: "#50336d",
//         tertiary: "#7851a9",
//         base: "#613a97",
//         primaryAccent: "#fbbc94",
//         secondaryAccent: "#ffcba3",
//         tertiaryAccent: "#b768a2",
//         primaryFont: "white",
//         secondaryFont: "black",
//         tertiaryFont: "red",
//         alert: "red",
//       };
//       break;
//     case "green":
//       colorScheme = {
//         primary: "#35455d",
//         secondary: "#92b1b6",
//         tertiary: "#bfd1df",
//         base: "#613a97",
//         primaryAccent: "#ced2c2",
//         secondaryAccent: "#ced2c2",
//         tertiaryAccent: "#ced2c2",
//         primaryFont: "white",
//         secondaryFont: "black",
//         tertiaryFont: "red",
//         alert: "red",
//       };
//       break;
//     default:
//       colorScheme = {
//         primary: "#282828",
//         secondary: "#363636",
//         tertiary: "#969696",
//         base: "#613a97",
//         primaryAccent: "#00897b",
//         secondaryAccent: "#00897b",
//         tertiaryAccent: "#00897b",
//         primaryFont: "white",
//         secondaryFont: "black",
//         tertiaryFont: "red",
//         alert: "red",
//       };
//   }

//   return colorScheme;
// };

// export default ColorScheme;

// var colorScheme = {
//   primary: "#282828",
//   secondary: "#363636",
//   tertiary: "#969696",
//   base: "#613a97",
//   primaryAccent: "#00897b",
//   secondaryAccent: "#00897b",
//   tertiaryAccent: "#00897b",
//   primaryFont: "white",
//   secondaryFont: "black",
//   tertiaryFont: "red",
//   alert: "red",
// };

var colorScheme = {};

colorScheme["dark"] = {
  primary: "#2D2D2D",
  secondary: "#3E3E3E",
  accent: "#FF9F2E",
  primaryFont: "#FFFFFF",
  secondaryFont: "#AFAFAF",
};

colorScheme["green"] = {
  primary: "#B0FFDE",
  secondary: "#91F1C9",
  accent: "#555554",
  primaryFont: "#FFFFFF",
  secondaryFont: "#6C6C6C",
};

colorScheme["purple"] = {
  primary: "#9E82BA",
  secondary: "#D9C7EB",
  accent: "#FF9F2E",
  primaryFont: "#FFFFFF",
  secondaryFont: "#868182",
};

colorScheme["light"] = {
  primary: "#F6F6F6",
  secondary: "#E8E8E8",
  accent: "#F87621",
  primaryFont: "#404040",
  secondaryFont: "#848484",
};

export default colorScheme;
