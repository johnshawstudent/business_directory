// link to mongoose
var mongoose = require('mongoose');

// define the article schema
var articleSchema = new mongoose.Schema({
   created: {
       type: Date,
       default: Date.now
   },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: ''
    }
});

// get handler for add to dispaly a blnak form
router.get('/add', function (req, res, next) {
  res.render('/articles/add', {
  title: 'Add a new article'
  });
});


router.post('/add', function(req, res, next) {
  Article.create { {
    title: req.body.title,
    content: req.body.content
  }
res.redirect('/articles')
};
})

// make it public
module.exports = mongoose.model('Article', articleSchema);