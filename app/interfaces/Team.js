import Joi from '@hapi/joi'

const schema = {
  team_id: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  name: [Joi.string(), Joi.number()],
  created_by: Joi.string(),
  owner: Joi.string(),
  members: Joi.array().items(Joi.string()),
}

export default schema
