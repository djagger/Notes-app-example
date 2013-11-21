(->
  "use strict"
  APP.Views.NoteRowView = Backbone.View.extend(
    
    tagName: "tr"
    
    events:
      "click a.delete": "destroy"

    
    initialize: (options) ->
      
      @note = options.note
      @notes = options.notes


    render: ->
      @$el.html _.template($("#rowTemplate").html(), @note.toJSON())
      this

    destroy: (event) ->
      event.preventDefault()
      event.stopPropagation()
      
      @notes.remove @note
      @$el.remove()
  )
)()