const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String,
    },
    prenume: {
        type: String,
        
    },
    varsta: {
    type: String,
        
     },
     
    present: {
        type: Boolean,
        deafult: true
    }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;