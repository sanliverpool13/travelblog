export const updateActiveTabFromURL = (urlPath: string): number => {
  let tabIndex = 0;
  switch (urlPath) {
    case "/":
      tabIndex = 0;
      break;
    case "/about":
      tabIndex = 1;
      break;
    case "/blog":
      tabIndex = 2;
      break;
    case "/contact":
      tabIndex = 3;
      break;
    default:
      tabIndex = 0;
      break;
  }

  return tabIndex;
};
