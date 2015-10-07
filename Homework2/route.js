var AppRoute = Backbone.Router.extend({
  routes: {
    "": "default",
    "item/:id": "item"
  },
  default: function() {
    itemView.disable();
    appView.enable();
    appView.render();
  },
  item: function(id) {
    appView.disable();
    itemView.enable();
    itemView.render();
  }
});
