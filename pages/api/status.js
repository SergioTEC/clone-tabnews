function status(request, response) {
  response.status(200).json({ chave: "Enviando um valor" })
}

export default status
