import { Card } from "../components/SkillItem/SkillItem"
import http from "../http-common"

const create = (data: Card) => {
  return http.post<Card>("/projects", data)
}

const getAll = () => {
  return http.get<Array<Card>>("/projects")
}

const ProjectService = {
  create,
  getAll,
}
export default ProjectService
