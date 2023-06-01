export const getDate = (createdAt: string) => {
  const date = new Date(createdAt);
  return `${date.toLocaleString("en-GB", {
    month: "long",
  })} ${date.toLocaleString("en-GB", {
    day: "numeric",
  })}, ${date.toLocaleString("en-GB", {
    year: "numeric",
  })}`;
};
