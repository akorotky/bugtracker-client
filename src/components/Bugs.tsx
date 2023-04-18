import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BugResource } from "../types/BugTypes";
import { fetchData } from "../utils";

interface BugProps {
  root: string;
}

export default function Bugs({ root }: BugProps) {
  const [bugData, setBugData] = useState<BugResource[]>();
  const location = useLocation();
  const resource = root + location.pathname + location.search;

  useEffect(() => {
    fetchData(resource).then((data) => {
      setBugData(data._embedded?.bugs);
    });
  }, []);

  return (
    <div>
      {bugData?.map((bug) => (
        <div key={bug.id}>
          <Link to={bug.id.toString()}>{bug.title}</Link>
        </div>
      ))}
    </div>
  );
}
