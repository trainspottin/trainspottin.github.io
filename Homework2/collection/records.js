
app.collections.Records = Backbone.Collection.extend({
  initialize: function() { 
   this.add( {title:"Learn Java script"} );
   this.add( {title:"Go to backbonejs.org"} );
   this.add( {title:"Develop a Backbone application"} );
  },
  model: Record,
  create: function(index){
    console.log("RecordList create index: " + index);
  },
  read: function(index){
    console.log("read...");
  },
  update: function(index){
    console.log("update...");
  },
  remove: function(index){
    console.log("remove...");
  }
});


