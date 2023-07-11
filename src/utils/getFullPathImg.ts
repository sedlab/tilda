const getFullPathImg = (link: string): string | undefined => {
  if (link?.length > 0) {
    if (link?.includes("/static_tildacdn_com/")) {
      return link?.replace("/static_tildacdn_com/", "https://static.tildacdn.com/");
    };
    return link;
  } else {
    return undefined;
  };
};

export default getFullPathImg;
