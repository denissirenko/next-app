import { getServerSession } from "next-auth";
import Link from "next/link";
import Image from "next/image";

import { authOptions } from "./api/auth/authOptions";

import Img from "@/public/images/img.jpeg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1>
        Hello{" "}
        {session && session.user!.name && <span>, {session.user!.name}</span>}
      </h1>
      <Image alt="img" src={Img} />
      <Link className="btn" href="/users">
        Users
      </Link>
    </>
  );
}
