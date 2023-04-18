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
import Bug from "./Bug";
import Bugs from "./Bugs";

const root = SERVER_BASE_PATH;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="registration" element={<Registration />} />
      <Route path="users">
        <Route
          index
          loader={() => fetchData(`${root}/users`)}
          element={<Users />}
        />
        <Route
          path=":username"
          loader={({ params }) =>
            fetchData(`${root + "/users/" + params.username}`)
          }
          element={<User />}
        ></Route>
      </Route>

      <Route path="projects">
        <Route
          index
          loader={() => fetchData(`${root}/projects`)}
          element={<Projects />}
        ></Route>
        <Route
          path=":projectId"
          loader={({ params }) =>
            fetchData(`${root + "/projects/" + params.projectId}`)
          }
          element={<Project />}
        />
      </Route>
      <Route path="bugs">
        <Route index element={<Bugs root={root} />} />
        <Route
          path=":bugId"
          loader={({ params }) =>
            fetchData(`${root + "/bugs/" + params.bugId}`)
          }
          element={<Bug />}
        />
      </Route>
    </>
  )
);
export default router;
