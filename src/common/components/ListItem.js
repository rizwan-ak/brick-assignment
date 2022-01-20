import { useState } from "react";
import BAIcon from "../elements/BAIcon";
import BATypography from "../elements/BATypography";
import "../styles/list.css";

export default function ListItem({
  name,
  gender,
  mass,
  skin_color,
  hair_color,
  eye_color,
  birth_year,
}) {
  const [isArrowDown, setIsArrowDown] = useState(false);

  return (
    <div className="list-item">
      <div className="inline-text">
        <BATypography value={name} variant="title" />
        <BAIcon
          isUp={isArrowDown}
          handleArrowClick={() => setIsArrowDown(!isArrowDown)}
        />
      </div>
      {isArrowDown && (
        <div className="info-container">
          <div className="inline-text">
            <BATypography value={`Gender: ${gender}`} variant="sub-title" />
            <BATypography
              value={`Skin Color: ${skin_color}`}
              variant="sub-title"
            />
          </div>
          <div className="inline-text">
            <BATypography value={`Mass: ${mass}`} variant="sub-title" />
            <BATypography
              value={`Hair Color: ${hair_color}`}
              variant="sub-title"
            />
          </div>
          <div className="inline-text">
            <BATypography
              value={`Date of Birth: ${birth_year}`}
              variant="sub-title"
            />
            <BATypography
              value={`Eye Color: ${eye_color}`}
              variant="sub-title"
            />
          </div>
        </div>
      )}
    </div>
  );
}
