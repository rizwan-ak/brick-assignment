export const toggleSort = (array, isAsc, setIsAsc) => {
  setIsAsc(!isAsc);
  return isAsc
    ? array.sort((a, b) => a?.name?.first?.localeCompare(b?.name?.first))
    : array.reverse();
};

export const filterUsers = (val, array, callback) => {
  return callback(
    array.filter(
      (el) =>
        el?.name?.first?.toLowerCase().includes(val.toLowerCase()) ||
        el?.name?.last?.toLowerCase().includes(val.toLowerCase())
    )
  );
};
