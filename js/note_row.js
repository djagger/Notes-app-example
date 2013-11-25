(function() {
  (function() {
    "use strict";
    return APP.Views.NoteRowView = Backbone.View.extend({
      tagName: "tr",
      events: {
        "click a.delete": "destroy"
      },
      initialize: function(options) {
        this.note = options.note;
        return this.notes = options.notes;
      },
      render: function() {
        this.$el.html(_.template($("#rowTemplate").html(), this.note.toJSON()));
        return this;
      },
      destroy: function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.notes.remove(this.note);
        return this.$el.remove();
      }
    });
  })();

}).call(this);

/*
//@ sourceMappingURL=note_row.js.map
*/