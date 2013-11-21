(->
  window.APP = window.APP or
    Routers: {}
    Collections: {}
    Models: {}
    Views: {}

  APP.Routers.NoteRouter = Backbone.Router.extend(
    routes:
      "note/new": "create"
      "notes/index": "index"
      "note/:id/edit": "edit"
      "note/:id/view": "show"

    initialize: (options) ->
      @notes = options.notes
      
      @notes.bind "reset", @updateDebug, this
      @notes.bind "add", @updateDebug, this
      @notes.bind "remove", @updateDebug, this
      @index()

    updateDebug: ->
      $("#output").text JSON.stringify(@notes.toJSON(), null, 4)

    
    create: ->
      @currentView = new APP.Views.NoteNewView(
        notes: @notes
        note: new APP.Models.NoteModel()
      )
      $("#primary-content").html @currentView.render().el

    edit: (id) ->
      note = @notes.get(id)
      @currentView = new APP.Views.NoteEditView(note: note)
      $("#primary-content").html @currentView.render().el

    show: (id) ->
      note = @notes.get(id)
      @currentView = new APP.Views.NoteShowView(note: note)
      $("#primary-content").html @currentView.render().el

    index: ->
      @currentView = new APP.Views.NoteIndexView(notes: @notes)
      $("#primary-content").html @currentView.render().el
  )
)()