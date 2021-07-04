const {Guest, Book, Host, Comment} = require('.')

Book.belongsTo(Guest); 
Book.belongsTo(Host)
Comment.belongsTo(Guest)
Comment.belongsTo(Host)
Comment.belongsTo(Book)
Guest.hasMany(Book, {as: 'books'})
Host.hasMany(Book, {as:'hostBooks'})
Guest.hasMany(Comment, {as: 'comments'})
Host.hasMany(Comment, {as: 'hostComments'})
Book.hasMany(Comment, {as: 'bookComments'})