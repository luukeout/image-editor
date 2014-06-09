
// Makes you have to use var to set variables.
"use strict";

// create a Model constructor called Photo. 
var Photo = Backbone.Model.extend({
  // override the default "id" with "_id" since the db sends it as "_id"
  idAttribute: "_id"
});

// create a collection constructor called PhotoCollection
// It knows about the model constructor and the server collection. 
var PhotoCollection = Backbone.Collection.extend({
  model: Photo,
  // This is the url it's going to use to communicate back and forth with the server.
  url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'
})