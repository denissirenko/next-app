import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserPageDetails = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <>UserPageDetails - {id}</>;
};

export default UserPageDetails;
