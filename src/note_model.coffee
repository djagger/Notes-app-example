(->
  "use strict"
  
  # модель с аргументами по-умолчанию
  APP.Models.NoteModel = Backbone.Model.extend(
  	defaults:
    	title: ""
    	description: ""
    	author: ""
  )
  
  # коллекция с нашей моделью
  APP.Collections.NoteCollection = Backbone.Collection.extend(
  	model: APP.Models.NoteModel
  )
)()