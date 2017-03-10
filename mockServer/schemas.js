var responseSchema = {
  "title": "Response",
  "type": "object",
  "required": [
    "id",
    "userId",
    "questionnaireId",
    "questionnaireVersionId",
    "completed"
  ],
  "properties": {
    "id": {
      "type": "string",
      "faker": "random.uuid"
    },
    "userId": {
      "type": "string",
      "faker": "random.uuid"
    },
    "questionnaireId": {
      "type": "string",
      "faker": "random.uuid"
    },
    "questionnaireVersionId": {
      "type": "string",
      "faker": "random.uuid"
    },
    "completed": {
      "type": "boolean",
      "faker": "random.boolean"
    },
    "answeredQuestions": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "answers"
        ],
        "properties": {
          "id": {
            "type": "string",
            "faker": "random.uuid"
          },
          "answers": {
            "type": "array",
            "items": {
              "type": "object",
              "required": [
                "id",
                "text",
                "followUp"
              ],
              "properties": {
                "id": {
                  "type": "string",
                  "faker": "random.uuid"
                },
                "text": {
                  "type": "string",
                  "faker": "lorem.words"
                },
                "followUp": {
                  "type": "object",
                  "properties": {
                    "text": {
                      "type": "string",
                      "faker": "lorem.words"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};


var questionnaireSchema = {
  "title": "Questionnaire",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "faker": "random.uuid"
    },
    "currentVersionId": {
      "type": "string",
      "faker": "random.uuid"
    },
    "dateCreated": {
      "type": "string",
      "faker": "date.recent"
    },
    "lastUpdated": {
      "type": "string",
      "faker": "date.recent"
    },
    "status": {
      "type": "string",
      "faker": "lorem.word"
    },
    "currentTitle": {
      "type": "string",
      "faker": "lorem.sentence"
    },
    "creator": {
      "type": "string",
      "faker": "lorem.word"
    }
  },
  "required": [
    "id",
    "dateCreated",
    "lastUpdated",
    "status",
    "currentTitle",
    "currentVersionId",
    "creator"
  ]
};

var questionnaireVersionSchema = {
  "title": "version",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "faker": "random.uuid"
    },
    "questionnaireId": {
      "type": "string",
      "faker": "random.uuid"
    },
    "title": {
      "type": "string",
      "faker": "lorem.sentence"
    },
    "description": {
      "type": "string",
      "faker": "lorem.sentences"
    },
    "date": {
      "type": "string",
      "faker": "date.recent"
    },
    "body": {
      "type": "string",
      "enum": ["[]"]
    },
    "creator": {
      "type": "string",
      "faker": "lorem.word"
    }
  },
  "required": [
    "id",
    "questionnaireId",
    "title",
    "description",
    "date",
    "creator",
    "body"
  ]
};

var ontologySchema = {
  "title": "Ontology",
  "type": "object",
  "properties": {
    "acronym": {
      "type": "string",
      "faker": "lorem.word"
    },
    "title": {
      "type": "string",
      "faker": "lorem.words"
    },
    "description": {
      "type": "string",
      "faker": "lorem.sentence"
    },
    "updatePattern": {
      "type": "integer",
      "minimum": 0,
      "maximum": 30
    },
    "url": {
      "type": "string",
      "faker": "internet.url"
    },
    "specDefinition": {
      "type": "string",
      "faker": "internet.url"
    },
    "dateCreated": {
      "type": "string",
      "faker": "date.recent"
    },
    "lastUpdated": {
      "type": "string",
      "faker": "date.recent"
    }
  },
  "required": ["acronym", "title", "updatePattern", "url", "specDefinition"]
}

var hpoCrStatusSchema = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "faker": "random.uuid"
    },
    "contextId": {
      "type": "string",
      "enum": ["5893c8cdf381950f56db2881"]
    },
    "key": {
      "type": "string",
      "enum": ["hpo_concept_recognition_enabled"]
    },
    "value": {
      "type": "boolean"
    }
  },
  "required": ["id", "contextId", "key", "value"]
}

var selectDatasourceIdSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "faker": "lorem.word"
      },
      "displayLabel": {
        "type": "string",
        "faker": "lorem.words"
      },
      "label": {
        "type": "string",
        "faker": "lorem.words"
      },
      "type": {
        "type": "string",
        "faker": "lorem.word"
      }
    },
    "required": ["id", "displayLabel", "label", "type"]
  }
}

var allDatasourceSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "faker": "lorem.word"
      },
      "displayLabel": {
        "type": "string",
        "faker": "lorem.words"
      },
      "label": {
        "type": "string",
        "faker": "lorem.words"
      },
      "type": {
        "type": "string",
        "faker": "lorem.word"
      },
      "datasourceId": {
        "type": "string",
        "faker": "lorem.word"
      },
      "datasourceTitle": {
        "type": "string",
        "faker": "lorem.word"
      },
      "datasourceVersionId": {
        "type": "string",
        "faker": "lorem.word"
      }
    },
    "required": [
      "id",
      "displayLabel",
      "label",
      "type",
      "datasourceId",
      "datasourceTitle",
      "datasourceVersionId"
    ]
  }
}

exports.questionnaire = questionnaireSchema;
exports.questionnaireVersion = questionnaireVersionSchema;
exports.responseSchema = responseSchema;
exports.hpoCrStatus = hpoCrStatusSchema;
exports.ontology = ontologySchema;
exports.selectDatasourceId = selectDatasourceIdSchema;
exports.allDatasource = allDatasourceSchema;
