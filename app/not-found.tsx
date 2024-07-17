import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn btn-primary mt-5" href="/">
        Return Home
      </Link>
    </>
  );
};

export default NotFound;
