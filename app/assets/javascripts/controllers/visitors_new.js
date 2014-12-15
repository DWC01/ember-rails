App.VisitorsNewController = Ember.Controller.extend({

  actions: {
    createVisitor: function() {

      var self = this;
      var fields = this.get('fields')

      if (App.Visitor.valid(fields)) {
        var visitor = this.store.createRecord('visitor', fields)
        visitor.save().then(function(visitor) {
          self.transitionToRoute('visitor', visitor)
        });
      } else {
        this.set('showError', true)
      }
    }
  }

});