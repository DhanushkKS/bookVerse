export const generateUniqueKey = (prefix) =>
  `${prefix}_${new Date().getTime()}`;
