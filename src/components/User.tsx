import React from "react";
import { UserResource } from "../types/UserTypes";
import { useLoaderData } from "react-router-dom";

export default function User() {
  const userData = useLoaderData() as UserResource;

  return <div>{userData.username}</div>;
}
