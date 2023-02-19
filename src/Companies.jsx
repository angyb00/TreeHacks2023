import React from 'react';
import {useMutation, useQuery} from "../convex/_generated/react"



function Companies({ companies }) {

  const jobs = useQuery("listJobs") || []
  return (
    <ul>
      {jobs.map(job => (
        <li key={job._id.toString()}>
          Company: {job.Applied_Jobs["Job_1"]["Company"]} Position: {job.Applied_Jobs["Job_1"]["Position"]} Application Status: {job.Applied_Jobs["Job_1"]["Application_Status"]}
        </li>
      ))}
    </ul>
  );
}

export default Companies;
