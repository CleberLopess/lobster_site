export const removeScroll = (action: boolean) => {
  if (action) document.documentElement.style.overflow = "hidden";
  if (!action) document.documentElement.style.overflow = "";
};
