var RecordView = Backbone.View.extend({
  el: '.record-item',

  enable: function(){
    this.$el.show();
  },
  disable: function(){
    this.$el.hide();
  },
  
  template: $('#record-tmpl').html(),

  rendor: function(item) {
    console.log(this.template, item.toJSON());
    this.$el.html(Mustache.rendor(this.template, item.toJSON()));
  }
});

var recordView = new RecordView();


