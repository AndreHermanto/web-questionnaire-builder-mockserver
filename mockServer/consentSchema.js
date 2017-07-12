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
    "questionnaires": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          'questionnaireId',
          'versionPublished'
        ],
        "properties": {
          "questionnaireId": {
            type: "string",
            faker: "random.uuid"
          },
          "versionPublished": {
            type: "string",
            faker: "random.uuid"
          }
          // "order": {
          //   type: "string",
          //   faker: "random.uuid"
          // }
          // "constraintBy": {
          //   type: "string",
          //   faker: "random.uuid"
          // }
        }
      }
    }
  },
  "required": [
    "id",
    "consentTypeId",
    "questionnaires"
  ]
}
exports.consentTypes = consentTypesSchema;
exports.consentTypeMappings  = consentTypeMappingSchema;
