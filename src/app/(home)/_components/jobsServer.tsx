import JobsClient from "./jobsClient";
import { getJobVacancies } from "../../../../actions/job-vacancy";
import { getJobClassifications } from "../../../../actions/options";

export default async function Jobs() {
  const jobs = await getJobVacancies();
  const jobClassifications = await getJobClassifications();

  return (
    <JobsClient
      initialJobs={Array.isArray(jobs) ? jobs : []}
      initialJobClassifications={
        Array.isArray(jobClassifications) ? jobClassifications : []
      }
    />
  );
}
