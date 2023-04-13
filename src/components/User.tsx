import React from "react";
import { UserDTO } from "../types/UserTypes";
import { useLoaderData } from "react-router-dom";

export default function User() {
  const userData = useLoaderData() as UserDTO;

  return <div>{userData.username}</div>;
}
