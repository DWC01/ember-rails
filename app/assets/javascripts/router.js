// For more information see: http://emberjs.com/guides/routing/
App.Router.reopen({
  location: 'auto',
  rootURL: '/'
})

App.Router.map(function() {
  this.resource('visitors', { path: '/' }, function() {
    this.resource('visitor', { path: '/visitors/:id' }, function(){
      this.route('edit')
    })
  })
})