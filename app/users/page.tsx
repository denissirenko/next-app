import React, { Suspense } from "react";
import UsersList from "../components/UsersList";
import Link from "next/link";
import Loading from "../loading";

interface Props {
  searchParams: {
    sortOrder: string;
  };
}

const Users = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users Page</h1>
      <Link className="btn btn-primary mb-5" href="/users/new">
        Create New User
      </Link>
      <Suspense fallback={<Loading />}>
        <UsersList sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default Users;
