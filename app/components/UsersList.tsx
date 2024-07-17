import React from "react";
import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  name: string;
  id: number;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UsersList = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <Link href="/users?sortOrder=name">Name</Link>
          </li>
          <li>
            <Link href="/users?sortOrder=email">Email</Link>
          </li>
        </ul>
      </div>
      <ul>
        {sortedUsers.map(({ id, name, email }) => (
          <li key={id}>
            {name} - {email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
