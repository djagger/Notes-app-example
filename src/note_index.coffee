#test
(->
  window.APP = window.APP or {Routers: {}, Collections: {}, Models: {}, Views: {}}

  APP.Views.NoteIndexView = Backbone.View.extend(

    initialize: (options) ->
      @notes = options.notes
      @notes.bind "reset", @addAll, this

    render: -> 
      @$el.html $("#indexTemplate").html()
      @addAll()
      this

    addAll: ->
      # чистим контейнер каждый раз когда рендерится index
      @$el.find("tbody").children().remove()
      _.each @notes.models, $.proxy(this, "addOne")

    addOne: (note) ->
      view = new APP.Views.NoteRowView(
        notes: @notes
        note: note
      )
      @$el.find("tbody").append view.render().el

    )
)()