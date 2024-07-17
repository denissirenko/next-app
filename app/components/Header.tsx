"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { status, data: session } = useSession();

  return (
    <header className="flex items-center px-4 py-2 gap-4">
      <Link href="/">LOGO</Link>
      <Link className="btn" href="/users">
        Users
      </Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link className="btn ml-4" href="api/auth/signout">
            Sign out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link className="btn" href="api/auth/signin">
          Sign in
        </Link>
      )}
    </header>
  );
};

export default Header;
