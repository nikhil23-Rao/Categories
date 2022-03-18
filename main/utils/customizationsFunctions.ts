// Get Theme To Update

export const getBGColor = () => {
  const theme = JSON.parse(localStorage.getItem("theme")!);
  if (!theme) return "";
  return theme.background;
};

export const getPrimaryColor = () => {
  const theme = JSON.parse(localStorage.getItem("theme")!);
  if (!theme) return "";
  return theme.primary;
};

export const getTextShadowColor = () => {
  const theme = JSON.parse(localStorage.getItem("theme")!);
  if (!theme) return "";
  return theme.shadePrimary;
};

export const getTextColor = () => {
  const theme = JSON.parse(localStorage.getItem("theme")!);
  if (!theme) return "";
  return theme.text;
};

export const getAltTextColor = () => {
  const theme = JSON.parse(localStorage.getItem("theme")!);
  if (!theme) return "";
  return theme.altText;
};

export const getColor = () => {
  const color = localStorage.getItem("color")!;
  if (!color) return "";
  return color;
};
