App.VisitorsRoute = Ember.Route.extend({
  model: function(params) { return this.store.find('visitor', params.id) }
})