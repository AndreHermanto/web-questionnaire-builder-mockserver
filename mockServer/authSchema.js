var authSchema = {
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "faker": "random.uuid"
    },
    "firstName": {
      "type": "string",
      "faker": "name.firstName"
    },
    "lastName": {
      "type": "string",
      "faker": "name.lastName"
    },
    "email": {
      "type": "string",
      "faker": "internet.email"
    },
    "roles": {
      "type": "array",
      "minItems": 0,
        "items": {
          "enum": ["ROLE1", "ROLE2"]
        }
    }
  },
  "required": ["userId", "firstName", "lastName", "email", "roles"]
}

exports.auth = authSchema;