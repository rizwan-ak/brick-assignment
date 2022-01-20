import React, { lazy, Suspense } from "react";
import "../common/styles/people.css";
import BATypography from "../common/elements/BATypography";
import data from "../common/data.json";

const List = lazy(() => import("../common/components/List"));

const People = () => {
  return (
    <div className="app-container">
      <BATypography value={data.heading} variant="heading" />
      <Suspense
        fallback={<BATypography value={data.ladingText} variant="loading" />}
      >
        <List />
      </Suspense>
    </div>
  );
};

export default People;
