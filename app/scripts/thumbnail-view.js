"use strict";

// Create a View constructor called ThumbnailView 
var ThumbnailView = Backbone.View.extend({

	// set the class on this.el
	// it will now be <div class="thumbnail"></div>
	className: 'thumbnail',

	// create a template connected from the template script tag in index.html
	template: _.template($('.thumbnail-template').text()),
	// detailmplate: _.template($('.detail-template').text()),

	// list of events and the methods to run in response.
	// this only applies to this instance's this.el and its children
	// When a thumbnail gets clicked the showDetailView function is run.
	events: {
		"click": "showDetailView"
	},

	// This takes the render function below and puts it in a div and then appends it to 
	// the thumbnailWindow div. Initialize happens automatically
	// when the page loads. If any changes are made to the model they will be rendered back
	// in the thumbnailWindow.
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);

		$('.thumbnailWindow').append(this.el);
		this.render()
	},

	//The render function. Takes the template and model attributes
	// and stores them as renderTemplate. 
	render: function() {
		var renderedTemplate = this.template(this.model.attributes)
		// here the el is getting the html of renderedTemplate added to it.
		this.$el.html(renderedTemplate)
	},

// When a thumbnail gets clicked the detail view instance in main.js gets 
// removed and then populated with that thumbnail.
	showDetailView: function() {
    	detailViewInstance.remove();
    	detailViewInstance = new DetailView({model: this.model})
		}
})
// a new instance of PhotoCollection from model.js. 
// var displayPhotos = new PhotoCollection();

// this displays the models from the collection in a new instance of 
// ThumbnailView.  
// displayPhotos.fetch().done(function(){
//   displayPhotos.each(function(photo){
//     new ThumbnailView({model: photo});
//   })
// });












