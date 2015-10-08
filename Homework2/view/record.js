app.views.list = Backbone.View.extend({
  el: '#record-item',
  model: null,
  initialize: function() {
    console.log("view.record: >initialize");
    console.log("view.record: <initialize");  
  },
  template: $('#record-tmpl').html(),
  render: function() {
    console.log("view.record: >render");
    var html = '';
    this.model.each( function(rec, index) {
      html+=Mustache.render($('#record-tmpl').html(), rec.toJSON());
    });
    this.$el.html(html);
    console.log("view.record: >render");
	  return this;
  }
});



