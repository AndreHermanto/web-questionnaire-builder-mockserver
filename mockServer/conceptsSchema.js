var conceptsSchema = {
  "type": "object",
  "properties": {
    "uri": {
      "type": "string",
      "faker": "lorem.words"
    },
    "label": {
      "type": "string",
      "faker": "lorem.words"
    },
    "type": {
      "type": "string",
      "faker": "lorem.words"
    },
    "dataSource": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "faker": "random.uuid"
        },
        "acronym": {
          "type": "string",
          "faker": "lorem.words"
        },
        "title": {
          "type": "string",
          "faker": "lorem.words"
        },
        "updatePattern": {
          "type": "string",
          "faker": "random.number"
        },
        "autoUpdate": {
          "type": "boolean"
        },
        "url": {
          "type":"string",
          "faker": "internet.url"
        },
        "filterByPrefix": {
          "type": "string",
          "faker": "lorem.words"
        },
        "description": {
          "type": "string",
          "faker": "lorem.words"
        },
        "dateCreated": {
          "type": "string",
          "faker": "date.recent"
        },
        "lastUpdated": {
          "type": "string",
          "faker": "date.recent"
        },
        "creator": {
          "type": "string",
          "faker": "lorem.words"
        },
        "lastUpdatedBy": {
          "type": "string",
          "faker": "lorem.words"
        }
      },
      "required": ["id", "acronym", "title", "updatePattern", "autoUpdate",
      "url", "filterByPrefix", "description", "dateCreated", "lastUpdated",
      "creator", "lastUpdatedBy"]
    },
    "dataSourceVersion": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "faker": "random.uuid"
        },
        "version": {
          "type": "string",
          "faker": "lorem.words"
        },
        "dateCreated": {
          "type": "string",
          "faker": "date.recent"
        },
        "creator": {
          "type": "string",
          "faker": "lorem.words"
        }
      },
      "required":["id", "version", "dateCreated", "creator"]
    },
    "synonyms": {
      "type": "array",
      "minItems": 0,
      "items": {
        "type": "string",
        "faker": "lorem.words"
      }
    },
    "altIds": {
      "type": "array",
      "minItems": 0,
      "items": {
        "type": "string",
        "faker": "lorem.words"
      }
    },
    "subclasses": {
      "type": "array",
      "minItems": 0,
      "items": {
        "type": "object",
        "properties": {
          "uri": {
            "type": "string",
            "faker": "lorem.words"
          },
          "label": {
            "type": "string",
            "faker": "lorem.words"
          },
          "type": {
            "type": "string",
            "faker": "lorem.words"
          },
          "dataSource": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "faker": "random.uuid"
              },
              "acronym": {
                "type": "string",
                "faker": "lorem.words"
              },
              "title": {
                "type": "string",
                "faker": "lorem.words"
              },
              "updatePattern": {
                "type": "string",
                "faker": "random.number"
              },
              "autoUpdate": {
                "type": "boolean"
              },
              "url": {
                "type":"string",
                "faker": "internet.url"
              },
              "filterByPrefix": {
                "type": "string",
                "faker": "lorem.words"
              },
              "description": {
                "type": "string",
                "faker": "lorem.words"
              },
              "dateCreated": {
                "type": "string",
                "faker": "date.recent"
              },
              "lastUpdated": {
                "type": "string",
                "faker": "date.recent"
              },
              "creator": {
                "type": "string",
                "faker": "lorem.words"
              },
              "lastUpdatedBy": {
                "type": "string",
                "faker": "lorem.words"
              }
            },
            "required": ["id", "acronym", "title", "updatePattern", "autoUpdate",
            "url", "filterByPrefix", "description", "dateCreated", "lastUpdated",
            "creator", "lastUpdatedBy"]
          },
          "dataSourceVersion": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "faker": "random.uuid"
              },
              "version": {
                "type": "string",
                "faker": "lorem.words"
              },
              "dateCreated": {
                "type": "string",
                "faker": "date.recent"
              },
              "creator": {
                "type": "string",
                "faker": "lorem.words"
              }
            },
            "required":["id", "version", "dateCreated", "creator"]
          },
          "synonyms": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          },
          "altIds": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          },
          "subclasses": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          },
          "superclasses": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          }
        },
        "required": ["uri", "label", "type", "dataSource", "dataSourceVersion"]
      }
    },
    "superclasses": {
      "type": "array",
      "minItems": 0,
      "items": {
        "type": "object",
        "properties": {
          "uri": {
            "type": "string",
            "faker": "lorem.words"
          },
          "label": {
            "type": "string",
            "faker": "lorem.words"
          },
          "type": {
            "type": "string",
            "faker": "lorem.words"
          },
          "dataSource": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "faker": "random.uuid"
              },
              "acronym": {
                "type": "string",
                "faker": "lorem.words"
              },
              "title": {
                "type": "string",
                "faker": "lorem.words"
              },
              "updatePattern": {
                "type": "string",
                "faker": "random.number"
              },
              "autoUpdate": {
                "type": "boolean"
              },
              "url": {
                "type":"string",
                "faker": "internet.url"
              },
              "filterByPrefix": {
                "type": "string",
                "faker": "lorem.words"
              },
              "description": {
                "type": "string",
                "faker": "lorem.words"
              },
              "dateCreated": {
                "type": "string",
                "faker": "date.recent"
              },
              "lastUpdated": {
                "type": "string",
                "faker": "date.recent"
              },
              "creator": {
                "type": "string",
                "faker": "lorem.words"
              },
              "lastUpdatedBy": {
                "type": "string",
                "faker": "lorem.words"
              }
            },
            "required": ["id", "acronym", "title", "updatePattern", "autoUpdate",
            "url", "filterByPrefix", "description", "dateCreated", "lastUpdated",
            "creator", "lastUpdatedBy"]
          },
          "dataSourceVersion": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "faker": "random.uuid"
              },
              "version": {
                "type": "string",
                "faker": "lorem.words"
              },
              "dateCreated": {
                "type": "string",
                "faker": "date.recent"
              },
              "creator": {
                "type": "string",
                "faker": "lorem.words"
              }
            },
            "required":["id", "version", "dateCreated", "creator"]
          },
          "synonyms": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          },
          "altIds": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          },
          "subclasses": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          },
          "superclasses": {
            "type": "array",
            "minItems": 0,
            "items": {
              "type": "string",
              "faker": "lorem.words"
            }
          }
        },
        "required": ["uri", "label", "type", "synonyms", "altIds", "dataSource", "dataSourceVersion"]
      }
    }
  },
  "required": ["uri", "label", "type", "dataSource", "dataSourceVersion"]
}


var prefixSchema = {
  "type": "object",
  "properties": {
    "uri": {
      "type": "string",
      "faker": "lorem.words"
    },
    "displayLabel": {
      "type": "string",
      "faker": "lorem.words"
    },
    "preferredLabel": {
      "type": "string",
      "faker": "lorem.words"
    },
    "dataSource": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "faker": "random.uuid"
        },
        "acronym": {
          "type": "string",
          "faker": "lorem.words"
        },
        "title": {
          "type": "string",
          "faker": "lorem.words"
        },
        "updatePattern": {
          "type": "string",
          "faker": "random.number"
        },
        "autoUpdate": {
          "type": "boolean"
        },
        "url": {
          "type":"string",
          "faker": "internet.url"
        },
        "filterByPrefix": {
          "type": "string",
          "faker": "lorem.words"
        },
        "description": {
          "type": "string",
          "faker": "lorem.words"
        },
        "dateCreated": {
          "type": "string",
          "faker": "date.recent"
        },
        "lastUpdated": {
          "type": "string",
          "faker": "date.recent"
        },
        "creator": {
          "type": "string",
          "faker": "lorem.words"
        },
        "lastUpdatedBy": {
          "type": "string",
          "faker": "lorem.words"
        }
      },
      "required": ["id", "acronym", "title", "updatePattern", "autoUpdate",
      "url", "filterByPrefix", "description", "dateCreated", "lastUpdated",
      "creator", "lastUpdatedBy"]
    },
    "synonyms": {
      "type": "array",
      "minItems": 0,
      "items": {
        "type": "string",
        "faker": "lorem.words"
      }
    }
  },
  "required": ["uri", "displayLabel", "preferredLabel", "dataSource", "synonyms"]
}

exports.concepts = conceptsSchema;
exports.prefix = prefixSchema;