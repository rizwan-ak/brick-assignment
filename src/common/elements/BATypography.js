import React from "react";
import "../styles/typography.css";

export default function JWTypography({ variant, value }) {
  return (
    <>
      {variant === "heading" ? (
        <h1 className={variant}>{value}</h1>
      ) : variant === "error" ? (
        <h1 className={variant} aria-live="assertive">
          {value}
        </h1>
      ) : (
        <p className={variant}>{value}</p>
      )}
    </>
  );
}
