App.VisitorEditRoute = Ember.Route.extend({

  activate:   function() { this.controllerFor('visitor').set('isEditing', true) },
  deactivate: function() { this.controllerFor('visitor').set('isEditing', false) }

})