(function() {
  (function() {
    window.APP = window.APP || {
      Routers: {},
      Collections: {},
      Models: {},
      Views: {}
    };
    return APP.Views.NoteIndexView = Backbone.View.extend({
      initialize: function(options) {
        this.notes = options.notes;
        return this.notes.bind("reset", this.addAll, this);
      },
      render: function() {
        this.$el.html($("#indexTemplate").html());
        this.addAll();
        return this;
      },
      addAll: function() {
        this.$el.find("tbody").children().remove();
        return _.each(this.notes.models, $.proxy(this, "addOne"));
      },
      addOne: function(note) {
        var view;
        view = new APP.Views.NoteRowView({
          notes: this.notes,
          note: note
        });
        return this.$el.find("tbody").append(view.render().el);
      }
    });
  })();

}).call(this);

/*
//@ sourceMappingURL=note_index.js.map
*/