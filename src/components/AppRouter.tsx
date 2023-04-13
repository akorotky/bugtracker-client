import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Home";
import { SERVER_BASE_PATH } from "../constants";
import Registration from "./Registration";
import Users from "./Users";
import User from "./User";
import Projects from "./Projects";
import Project from "./Project";
import { fetchData } from "../utils";

const root = SERVER_BASE_PATH;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="registration" element={<Registration />} />
      <Route
        path="users"
        loader={() => fetchData(`${root}/users`)}
        element={<Users />}
      />
      <Route
        path="users/:username"
        loader={({ params }) =>
          fetchData(`${root + "/users/" + params.username}`)
        }
        element={<User />}
      />
      <Route
        path="projects"
        loader={() => fetchData(`${root}/projects`)}
        element={<Projects />}
      />
      <Route
        path="projects/:id"
        loader={({ params }) => fetchData(`${root + "/projects/" + params.id}`)}
        element={<Project />}
      />
    </>
  )
);
export default router;
