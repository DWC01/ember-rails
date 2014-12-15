App.VisitorsController = Ember.ArrayController.extend({
  sortProperties: ['firstName', 'lastName'],

  visitors: function() {
    return this.get('search') ? this.get('searchedVisitors') : this
  }.property('search', 'searchedLeads'),

  searchedVisitors: function() {
    var search = this.get('search').toLowerCase()
    return this.filter(function(lead) {
      return lead.get('fullName').toLowerCase().indexOf(search) != -1
    })
  }.property('search', 'this.@each.fullName')

})