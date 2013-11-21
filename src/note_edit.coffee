(->
  APP.Views.NoteEditView = Backbone.View.extend(
    events: 
      "click button.save": "save"

    initialize: (options) ->
      @note = options.note

    save: (event) ->
      event.stopPropagation()
      event.preventDefault()

      # обновляем модель значениями с формы
      @note.set
        title: @$el.find("input[name=title]").val()
        author: @$el.find("input[name=author]").val()
        description: @$el.find("textarea[name=description]").val()

      window.location.hash = "notes/index"

    # отрисовка шаблона
    render: ->
      @$el.html _.template($("#formTemplate").html(), @note.toJSON())
      @$el.find("h2").text "Edit Note"
      this
  )
)()