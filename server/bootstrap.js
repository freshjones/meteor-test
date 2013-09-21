// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Projects.find().count() === 0) {
    var data = [
      {name: "project 1",
       client: "CHR",
       milestones: [
         [{name:"test",date:"9-2-2013"}],
         [{name:"test1",date:"9-2-2013"}],
         [{name:"test2",date:"9-2-2013"}],
         [{name:"test3",date:"9-2-2013"}]
       ]
      },
      {name: "project 2",
    	  client: "FMK",
       milestones: [
         [{name:"test",date:"9-2-2013"}],
         [{name:"test1",date:"9-2-2013"}]
       ]
      },
      {name: "project 3",
    	  client: "RMA",
       milestones: [
         [{name:"test",date:"9-2-2013"}],
         [{name:"test1",date:"9-2-2013"}],
         [{name:"test2",date:"9-2-2013"}]
       ]
      },
    ];

    for (var i = 0; i < data.length; i++) {
      var project_id = Projects.insert({name: data[i].name, client: data[i].client, milestones: data[i].milestones});
    }
  }
});
