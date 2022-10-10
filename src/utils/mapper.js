export const mapper = (data) => {
  const key = data?.["_rel"];
  data = data?.["_embedded"][key]?.data;
  return data;
};
