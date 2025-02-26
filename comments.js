// Create web server 
var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// In-memory database for comments
var comments = [];

// Endpoint to get all comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Endpoint to add a new comment
app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  if (comment) {
    comments.push(comment);
    res.status(201).send('Comment added');
  } else {
    res.status(400).send('Bad Request: Comment is required');
  }
});

// Endpoint to delete a comment by index
app.delete('/comments/:index', function(req, res) {
  var index = parseInt(req.params.index, 10);
  if (index >= 0 && index < comments.length) {
    comments.splice(index, 1);
    res.status(200).send('Comment deleted');
  } else {
    res.status(404).send('Not Found: Comment does not exist');
  }
});

// Start the server
var server = app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
