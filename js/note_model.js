(function() {
  (function() {
    "use strict";
    APP.Models.NoteModel = Backbone.Model.extend({
      defaults: {
        title: "",
        description: "",
        author: ""
      }
    });
    return APP.Collections.NoteCollection = Backbone.Collection.extend({
      model: APP.Models.NoteModel
    });
  })();

}).call(this);

/*
//@ sourceMappingURL=note_model.js.map
*/