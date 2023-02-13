export const updateActiveTabFromURL = (urlPath: string): number => {
  let tabIndex = 0;
  switch (true) {
    case isExactPath(urlPath, "/"):
      tabIndex = 0;
      break;
    case isExactPath(urlPath, "/about"):
      tabIndex = 1;
      break;
    case containsPath(urlPath, "/blog"):
      tabIndex = 2;
      break;
    case isExactPath(urlPath, "/contact"):
      tabIndex = 3;
      break;
    default:
      tabIndex = 0;
      break;
  }

  return tabIndex;
};

const isExactPath = (url: string, path: string) => {
  return url === path;
};

const containsPath = (url: string, path: string) => {
  return url.includes(path);
};

export const isBlockObjectImage = (block_type: string): boolean => {
  if (block_type === "image") {
    return true;
  }
  return false;
};
