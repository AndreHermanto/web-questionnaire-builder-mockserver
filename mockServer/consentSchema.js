var consentTypesSchema = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "faker": "random.uuid"
    },
    "title": {
      "type": "string",
      "faker": "lorem.sentence"
    },
    "description": {
      "type": "string",
      "faker": "lorem.sentence"
    }
  },
  "required": [
  "id",
  "title"
  ]
}

var consentTypeMappingSchema= {
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "faker": "random.uuid"
    },
    "consentTypeId": {
      "type": "string",
      "faker": "random.uuid"
    },
    "questionnaireId": {
      "type": "string",
      "faker": "random.uuid"
    }
  },
  "required": [
    "id",
    "consentTypeId",
    "questionnaireId"
  ]
}
exports.consentTypes = consentTypesSchema;
exports.consentTypeMappings  = consentTypeMappingSchema;
