"use strict";

var DetailView = Backbone.View.extend({

	className: 'detail-view',
	
	template: _.template($('.detail-template').text()),

	events: {
		"click .save-button": "updateModel",
		"click .new-button": "createPhoto"
	},

	initialize: function(){
// listening to the photos instance in main.js. When things get added
// to the collection they will show up in the thumbnails.
		this.listenTo(photos, 'add', function(photo){
			new ThumbnailView({model: photo})
		})
// listening to the model and rendering any changes that happen to it.
		this.listenTo(this.model, 'change', this.render);
		
		$('.picWindow').append(this.el);
		this.render();
	},

	render: function(){

		var renderTemplate = this.template(this.model.attributes);
		this.$el.html(renderTemplate)
		return this;
	},

	updateModel: function(){
		// renaming this so I can use "that" in that.$el.find. It is only
		// relevant in the function to show the 'Saved!' status. 
		var that = this;

		
		// .set makes any changes to the model that have been changed
		// in the url input and the caption input. updateModel then 
		// saves those changes to the element. 
		this.model.set({
			url:     this.$el.find('.url-input').val(),
			caption: this.$el.find('.caption-input').val(),
		})
		// I think this is adding the changes made above to the PhotoCollection
		// instance called photos in my main.js. 
		photos.add(this.model)

		// It's supposed to display the status "Saved!"
		// when the save button is clicked and the model is
		// done saving.
		this.model.save().done(function(){
			that.$el.find('.status').html('Saved!')
		})
	},

	createPhoto: function(){
		// this is instantiating Photo constructor from image-model.js
		var photoInstance = new Photo();
// This.model is referencing... I'm still confused on this. I know we talked 
// about it, but as I'm trying to think through the flow of how this works
// I'm not following it.  
		this.model = photoInstance
// 
		this.$el.find('input').val('');

	}
})