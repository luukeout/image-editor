"use strict";

var Router = Backbone.Router.extend({

	routes: {

		""           : "renderHome",
		"photos/:id" : "renderDetailView"
	},

	initialize: function(){

	},

	renderDetailView: function(id) {
		var showPic = new DetailView({model.get(id)})
		
	},
})