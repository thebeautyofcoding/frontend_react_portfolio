import { Card } from "../components/SkillItem/SkillItem"
import http from "../http-common"

const create = (data: Card) => {
  return http.post<Card>("/skills", data)
}

const getAll = () => {
  return http.get<Array<Card>>("/skills")
}

const ServiceService = {
  create,
  getAll,
}
export default ServiceService
