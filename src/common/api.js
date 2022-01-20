import axios from "axios";
const api = axios.create({ baseURL: "https://swapi.dev/api/" });

export const fetchPeople = async (pageNumber, people, callback) => {
  try {
    let tempArray = [];
    for (let idx = 1; idx <= 5; idx++) {
      const response = await api.get(`people/${idx}/`);
      tempArray.push(response.data);
    }
    return callback(tempArray);
  } catch (err) {
    // setIsError(true);
    console.error(err);
  }
};
