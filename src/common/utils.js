export const filterPeople = (val, array, callback) => {
  return callback(
    array.filter((el) => el?.name?.toLowerCase().includes(val.toLowerCase()))
  );
};
