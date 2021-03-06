(function() {
  (function() {
    return APP.Views.NoteEditView = Backbone.View.extend({
      events: {
        "click button.save": "save"
      },
      initialize: function(options) {
        return this.note = options.note;
      },
      save: function(event) {
        event.stopPropagation();
        event.preventDefault();
        this.note.set({
          title: this.$el.find("input[name=title]").val(),
          author: this.$el.find("input[name=author]").val(),
          description: this.$el.find("textarea[name=description]").val()
        });
        return window.location.hash = "notes/index";
      },
      render: function() {
        this.$el.html(_.template($("#formTemplate").html(), this.note.toJSON()));
        this.$el.find("h2").text("Edit Note");
        return this;
      }
    });
  })();

}).call(this);

/*
//@ sourceMappingURL=note_edit.js.map
*/