import React from "react"
import { useEffect } from "react"
import CompletedJobsService from "../../services/CompletedJobsService"
import style from "./CompletedJobs.module.css"
function CompletedJobs() {
  useEffect(() => {
    return CompletedJobsService.getUpworkScreenShot()
  }, [])
  return <div>CompletedJobs</div>
}

export default CompletedJobs
