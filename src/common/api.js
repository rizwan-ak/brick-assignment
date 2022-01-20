import axios from "axios";
const api = axios.create({ baseURL: "https://swapi.dev/api/" });

export const fetchPeople = async (pageNumber, people, callback) => {
  try {
    let tempArray = [...people];
    for (let idx = 1 + (pageNumber - 1) * 5; idx <= 5 * pageNumber; idx++) {
      const response = await api.get(`people/${idx}/`);
      tempArray.push(response.data);
    }
    return callback(tempArray);
  } catch (err) {
    console.error(err);
  }
};
