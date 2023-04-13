import React from "react";
import { useLoaderData } from "react-router-dom";
import { ProjectDTO } from "../types/ProjectTypes";

export default function Project() {
  const userData = useLoaderData() as ProjectDTO;

  return <div>{userData.title}</div>;
}
