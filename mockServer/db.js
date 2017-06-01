var jsf = require('json-schema-faker');
var schemas = require('./schemas.js');
var conceptsSchema = require('./conceptsSchema.js');
var authSchema = require('./authSchema.js');
var consentSchema = require('./consentSchema.js');

module.exports = function() {
  var data = {
    'questionnaires': [],
    'responses': [],
    'versions': [],
    'export': [],
    'datasources': [],
    'contexts':[],
    'concepts':[],
    'prefix-search':[],
    'me': null,
    'consent-types':[],
    'consent-type-mappings':[]
  };
  for (var i = 0; i < 3; i++) {
    var questionnaire = jsf(schemas.questionnaire);
    var consentTypes = jsf(consentSchema.consentTypes);
    var consentTypeMappings = jsf(consentSchema.consentTypeMappings);
    if(questionnaire.currentVersionId !== undefined)
    {
      // now make some versions, for that questionnaire
      var numberOfVersions = 2;
      for (var j = 0; j < numberOfVersions; j++) {
        var version = jsf(schemas.questionnaireVersion);
        // link then up
        version.questionnaireId = questionnaire.id;
        data.versions.push(version);

        if(j === numberOfVersions - 1) {
          // its the last one
          // so set the current title and current version id property on the
          // questionnaire its linked to
          questionnaire.currentTitle = version.title;
          questionnaire.currentVersionId = version.id;
        }
      }
      //make the export response base on questionnair id / currentVersionId
      // var questionnaireExport = jsf(schemas.questionnaireExport);
      // questionnaireExport.questionnaireId = questionnaire.id;
      // questionnaireExport.questionnaireVersionId = questionnaire.currentVersionId;
      // data.export.push(questionnaireExport);
      // save the questionnaire
      data.questionnaires.push(questionnaire);
    }
    else
    {
      data.questionnaires.push(questionnaire);
    }

    if(i < 1) {
      consentTypeMappings.questionnaireId = questionnaire.id;
      consentTypeMappings.consentTypeId = consentTypes.id;
      data['consent-type-mappings'].push(consentTypeMappings);
    }
    data['consent-types'].push(consentTypes);
  }

  for(var i = 0; i < 10; i++){
    var ontology = jsf(schemas.ontology);
    data.datasources.push(ontology);
  }

  for(var i = 0; i < 10; i++){
    var concepts = jsf(conceptsSchema.concepts);
    data.concepts.push(concepts);
    if(i < 3) {
      var prefix = jsf(conceptsSchema.prefix)
      prefix.uri = concepts.uri;
      data['prefix-search'].push(prefix);
    }
  }

  for(var i = 0; i < 3; i++){
    var response = jsf(schemas.responseSchema);
    data.responses.push(response);
  }

  var hpoCrStatus = jsf(schemas.hpoCrStatus);
  data.contexts.push(hpoCrStatus);

  // add me 
  var me = jsf(authSchema.auth);
  data.me = me;


  return data;
}
