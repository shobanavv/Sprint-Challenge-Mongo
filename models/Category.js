const CategorySchema = new mongoose.Schema ({    
    title: {
        type: String,
        required: true,
    },
    
});
 module.exports = mongoose.model('Category', CategorySchema);
 