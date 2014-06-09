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

		var that = this;

		
		// .set makes any changes to the model that have been chagned
		// in the url input and the caption input. updateModel then 
		// saves those changes to the element. 
		this.model.set({
			url:     this.$el.find('.url-input').val(),
			caption: this.$el.find('.caption-input').val(),
		})

		photos.add(this.model)

		this.model.save().done(function(){
			this.$el.find('.status').html('Saved!')
		})
	},

	createPhoto: function(){
		// this is a new instance of the model
		var photoInstance = new Photo();
// This.model is   
		this.model = photoInstance
// 
		this.$el.find('input').val('');

	}
})