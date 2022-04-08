module.exports = (value) => {
  return value
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(" г.", "");
};
