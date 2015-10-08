
var Record = Backbone.Model.extend({
  defaults: 
  {
    id: -1,
    createDate: null,
    issueDate: null,
    paidDate: null,
    type: 'family',
    tags: 'clothes',
    from: 'account_id',
    to  : 'account_id',
    total: 0,
    title: 'title',
    detail: 'test comment',
    attachments: 'ids',
  },
  initialize: function()
  {
    console.log("New Record was created!!!");
  }
  
});


