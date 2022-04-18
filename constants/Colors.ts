import { white } from "react-native-paper/lib/typescript/styles/colors";

const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const primaryBlue = "#8ab4f7";
export const gray1 = "#848e90";
export const gray2 = "#ababab";
export const gray3 = "#2e2f32";
export const charcoalblue = "#e0f1f0";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
