App.VisitorsNewController = Ember.Controller.extend({

  actions: {
    createVisitor: function() {
      var self = this;
      var visitor = this.store.createRecord('visitor', this.get('fields'));
      visitor.save().then(function() {
        self.transitionToRoute('visitor', visitor);
      });
    }
  }

});