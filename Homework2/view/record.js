app.views.list = Backbone.View.extend({
  el: '#record-item',
  initialize: function() {
	console.log("view.record: >initialize");
	console.log("view.record: <initialize");  
  },
  template: $('#record-tmpl').html(),
  render: function(item) {
      console.log("view.record: >render");
	  this.$el.html(Mustache.rendor(this.template, item.toJSON()));
      console.log("view.record: >render");
	  return this;
  }
});



