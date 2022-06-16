import http from "../http-common"
export interface MessageI {
  message: string
  sender: "bot" | "visitor" | ""
}

const sendMessage = async (data: MessageI) => {
  return await http.post<MessageI>("/predict", data)
}

const MesagePredictionService = {
  sendMessage,
}
export default MesagePredictionService
