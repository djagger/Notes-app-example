(function() {
  (function() {
    window.APP = window.APP || {
      Routers: {},
      Collections: {},
      Models: {},
      Views: {}
    };
    return APP.Routers.NoteRouter = Backbone.Router.extend({
      routes: {
        "note/new": "create",
        "notes/index": "index",
        "note/:id/edit": "edit",
        "note/:id/view": "show"
      },
      initialize: function(options) {
        this.notes = options.notes;
        this.notes.bind("reset", this.updateDebug, this);
        this.notes.bind("add", this.updateDebug, this);
        this.notes.bind("remove", this.updateDebug, this);
        return this.index();
      },
      updateDebug: function() {
        return $("#output").text(JSON.stringify(this.notes.toJSON(), null, 4));
      },
      create: function() {
        this.currentView = new APP.Views.NoteNewView({
          notes: this.notes,
          note: new APP.Models.NoteModel()
        });
        return $("#primary-content").html(this.currentView.render().el);
      },
      edit: function(id) {
        var note;
        note = this.notes.get(id);
        this.currentView = new APP.Views.NoteEditView({
          note: note
        });
        return $("#primary-content").html(this.currentView.render().el);
      },
      show: function(id) {
        var note;
        note = this.notes.get(id);
        this.currentView = new APP.Views.NoteShowView({
          note: note
        });
        return $("#primary-content").html(this.currentView.render().el);
      },
      index: function() {
        this.currentView = new APP.Views.NoteIndexView({
          notes: this.notes
        });
        return $("#primary-content").html(this.currentView.render().el);
      }
    });
  })();

}).call(this);

/*
//@ sourceMappingURL=note_router.js.map
*/