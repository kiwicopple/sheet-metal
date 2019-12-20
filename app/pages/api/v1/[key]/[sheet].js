export default async (req, res) => {
  const {
    query: { key, sheet },
  } = req

  if (!(await verifyKey)) return sendMessage(res, 401, 'Invalid Key')

  switch (req.method) {
    case 'GET':
      return sendMessage(res, 501, 'Not yet implemented')
    case 'POST':
      return sendMessage(res, 501, 'Not yet implemented')
    case 'PATCH':
      return sendMessage(res, 501, 'Not yet implemented')
    case 'PUT':
      return sendMessage(res, 501, 'Not yet implemented')
    default:
      return sendMessage(res, 501, 'Not yet implemented')
  }
}

/**
 * Send a text response to the requestor
 * @param res
 * @param statusCode The HTTP status code 
 * @param msg A message to send back 
 */
const sendMessage = (res, statusCode, msg) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = statusCode
  res.end(JSON.stringify({ message: msg || 'Server error' }))
}

/**
 * Verify that the key exists
 */
const verifyKey = async () => {
  setTimeout(() => {
    return true
  }, 20)
}
