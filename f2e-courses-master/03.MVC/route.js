var AppRoute = Backbone.Router.extend({

  routes: {
    "": "defaults",
    "item/:id": "item"
  },

  defaults: function () {
    itemView.disable();
    appView.enable();
    appView.render();
  },

  item: function (id) {
    var item = appView.todos.get(id);
    appView.disable();
    itemView.enable();
    itemView.render(item);
  }

});
