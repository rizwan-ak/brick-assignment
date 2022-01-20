import { lazy, Suspense, useEffect, useState } from "react";
import { fetchPeople } from "../api";
import BAButton from "../elements/BAButton";
import BASearchField from "../elements/BASearchField";
import BATypography from "../elements/BATypography";
import data from "../data.json";
import { filterPeople } from "../utils";
const ListItem = lazy(() => import("./ListItem"));

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
      <BASearchField
        onChange={(val) => filterPeople(val, people, setFilteredPeople)}
      />
      {filteredPeople.map(
        (
          { name, gender, mass, skin_color, hair_color, eye_color, birth_year },
          idx
        ) => (
          <div key={idx}>
            <Suspense
              fallback={
                <BATypography value={data.ladingText} variant="loading" />
              }
            >
              <ListItem
                mass={mass}
                name={name}
                gender={gender}
                skin_color={skin_color}
                hair_color={hair_color}
                eye_color={eye_color}
                birth_year={birth_year}
              />
            </Suspense>
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
