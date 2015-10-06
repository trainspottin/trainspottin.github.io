//views/menu.js
app.views.menu = Backbone.View.extend({
  template: _.template($("#tpl-menu").html()),
  initialize: function(){
    console.log("menu: >init");
    this.render();
    console.log("menu: <init");
  },
  render: function(){
    console.log("render...");
    this.$el.html(this.tmeplate({}));
  }
});

