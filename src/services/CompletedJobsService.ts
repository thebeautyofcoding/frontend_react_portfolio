import http from "../http-common"

const getUpworkScreenShot = () => {
  http.get("/getCompletedUpworkJobs")
}

const CompletedJobsService = {
  getUpworkScreenShot,
}
export default CompletedJobsService
