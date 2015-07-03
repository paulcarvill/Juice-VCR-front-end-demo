// JuiceVCR.Views.Shits ||= {}

// class JuiceVCR.Views.Shits.ShowView extends Backbone.View
//   template: JST["backbone/templates/videos/show"]
//   nextTemplate: JST["backbone/templates/videos/next"]

//   events: () -> 
//     if Modernizr.touch
//       return "touchstart .next" : "navigate"
//     else
//       return "click .next": "navigate"

//   render: ->
//     $(@el).html(@template(@model.toJSON()))

//     modelnext = @model.collection.next(@model)

//     $(@el).append(@nextTemplate( { 'id' : modelnext.get('id') } )) if modelnext

//     return this

//   navigate: (e) ->
//     e.preventDefault()
//     window.router.show( @model.collection.next(@model).get('slug') )