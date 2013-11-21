(->
  APP.Views.NoteShowView = Backbone.View.extend(
    
    initialize: (options) ->
      @note = options.note

    
    render: ->
      @$el.html _.template($("#showTemplate").html(), @note.toJSON())
      this
  )
)()