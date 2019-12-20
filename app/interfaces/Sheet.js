import Joi from '@hapi/joi'

const schema = {
  sheetId: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  userId: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  name: [Joi.string(), Joi.number()],
}

export default schema
