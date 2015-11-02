
var app = (function(){
  var api = {
    views: {},
    models: {},
    collections: {},
    router: null,
    records: null,
    init: function() {
      console.log("app: >init");
      this.records = new api.collections.Records();
      ViewsFactory.list().render();
      Backbone.history.start();
      console.log("app: <init");
      return this;
    }
  };

  var ViewsFactory = {
    list: function(){
      if(!this.listView) {
        this.listView = new api.views.list({
          el: "#record-item",
          model: api.records
        });
      }
      return this.listView;
    }
  };

  return api;
})();

