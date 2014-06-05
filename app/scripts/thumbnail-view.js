// "use strict";

// Create a View constructor called ThumbnailView 
var ThumbnailView = Backbone.View.extend({

	// set the class on this.el
	// it will now be <div class="thumbnail"></div>
	className: 'thumbnail',

	// create a template connected from the template script tag in index.html
	template: _.template($('.thumbnail-template').text()),
	detailmplate: _.template($('.detail-template').text()),

	// list of events and the methods to run in response.
	// this only applies to this instance's this.el and its children
	events: {
		"click": "showDetailView"
	},

	// This takes the render function below and puts it in a div and then appends it to 
	// the container div.
	initialize: function() {
		$('.thumbnailWindow').append(this.el);
		this.render()
	},

	//  
	render: function() {
		var renderedTemplate = this.template(this.model.attributes)
		this.$el.html(renderedTemplate)
	},

	// Seems like this is creating a new View constructor, but 
	// using the model constructor as an object
	showDetailView: function() {
		$('.picWindow').empty();
		$('.picWindow').append(this.el);
		this.render()

		var renderTemp = this.detailmplate(this.model.attributes)
		this.$el.html(renderTemp);

			new DetailView({model: this.model})
		},
	

})

var displayPhotos = new PhotoCollection();
 
displayPhotos.fetch().done(function(){
  displayPhotos.each(function(photo){
    new ThumbnailView({model: photo});
  })
});












