export const normalizeString = (str?: string) =>
  (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u2010-\u2015]/g, " ")
    .replace(/[\u0300-\u036F]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default normalizeString;
