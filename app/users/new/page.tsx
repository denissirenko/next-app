"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
  const router = useRouter();
  return (
    <>
      <button
        className="btn btn-primary mb-5"
        onClick={() => router.push("/users")}
      >
        Create New User
      </button>
      <h1>New User Page</h1>
    </>
  );
};

export default NewUser;
