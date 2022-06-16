import http from "../http-common"

export interface Contact {
  title: string
  description: string
  logoLink: string
}

const create = (data: Contact) => {
  return http.post<Contact>("/contacts", data)
}

const getAll = () => {
  return http.get<Array<Contact>>("/contacts")
}

const ContactService = {
  create,
  getAll,
}
export default ContactService
