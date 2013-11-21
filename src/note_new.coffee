(->
  APP.Views.NoteNewView = Backbone.View.extend(
    
    events:
      "click button.save": "save"

    initialize: (options) ->
      @note = options.note
      @notes = options.notes

    save: (event) ->
      event.stopPropagation()
      event.preventDefault()

      # обновляем нашу модель со значениями из формы
      @note.set
        title: @$el.find("input[name=title]").val()
        author: @$el.find("input[name=author]").val()
        description: @$el.find("textarea[name=description]").val()
        id: Math.floor(Math.random() * 100) + 1

      @notes.add @note
      
      window.location.hash = "notes/index"

    # отрисовываем шаблон
    render: ->
      @$el.html _.template($("#formTemplate").html(), @note.toJSON())
      @$el.find("h2").text "Create New Note"
      this
  )
)()