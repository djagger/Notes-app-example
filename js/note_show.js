(function() {
  (function() {
    return APP.Views.NoteShowView = Backbone.View.extend({
      initialize: function(options) {
        return this.note = options.note;
      },
      render: function() {
        this.$el.html(_.template($("#showTemplate").html(), this.note.toJSON()));
        return this;
      }
    });
  })();

}).call(this);

/*
//@ sourceMappingURL=note_show.js.map
*/