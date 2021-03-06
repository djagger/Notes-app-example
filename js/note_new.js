(function() {
  (function() {
    return APP.Views.NoteNewView = Backbone.View.extend({
      events: {
        "click button.save": "save"
      },
      initialize: function(options) {
        this.note = options.note;
        return this.notes = options.notes;
      },
      save: function(event) {
        event.stopPropagation();
        event.preventDefault();
        this.note.set({
          title: this.$el.find("input[name=title]").val(),
          author: this.$el.find("input[name=author]").val(),
          description: this.$el.find("textarea[name=description]").val(),
          id: Math.floor(Math.random() * 100) + 1
        });
        this.notes.add(this.note);
        return window.location.hash = "notes/index";
      },
      render: function() {
        this.$el.html(_.template($("#formTemplate").html(), this.note.toJSON()));
        this.$el.find("h2").text("Create New Note");
        return this;
      }
    });
  })();

}).call(this);

/*
//@ sourceMappingURL=note_new.js.map
*/