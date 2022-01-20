import { useEffect, useState } from "react";
import { fetchPeople } from "../api";
import BAButton from "../elements/BAButton";
import BASearchField from "../elements/BASearchField";
import ListItem from "./ListItem";
import data from "../data.json";

export default function List() {
  const [pageNumber, setPageNumber] = useState(1);
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  // useEffect to fetch data
  useEffect(() => {
    fetchPeople(pageNumber, people, (array) => {
      setPeople(array);
      setFilteredPeople(array);
    });

    // eslint-disable-next-line
  }, [pageNumber]);

  return (
    <section>
      <BASearchField />
      {filteredPeople.map(
        (
          { name, gender, mass, skin_color, hair_color, eye_color, birth_year },
          idx
        ) => (
          <div key={idx}>
            <ListItem
              mass={mass}
              name={name}
              gender={gender}
              skin_color={skin_color}
              hair_color={hair_color}
              eye_color={eye_color}
              birth_year={birth_year}
            />
          </div>
        )
      )}
      <BAButton
        value={data.loadMoreButtonText}
        handleButtonClick={() => setPageNumber(pageNumber + 1)}
      />
    </section>
  );
}
