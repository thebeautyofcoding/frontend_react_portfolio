import http from "../http-common"
export interface EmailI {
  subject: string
  message: string
  emailAddress: string
}

const sendEmail = async (data: EmailI): Promise<any> => {
  return await http.post<EmailI>("/email", data)
}

const SendEmailService = {
  sendEmail,
}
export default SendEmailService
