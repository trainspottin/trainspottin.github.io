app.views.ctrl = Backbone.View.extend({
  el: '#record-app',
  initialize: function() {
    console.log("views.ctrl: >init");
    this.render();
    console.log("views.ctrl: <init");
  },
  template: function(){ return $("#ctrl-tmpl").html(); },
  render: function() {
    console.log("views.ctrl: >render\n"+ this.template({}));
    this.$el.html( Mustache.render(this.template({})) );
    console.log("views.ctrl: <render\n"+ this.$el.html());
  }

});






