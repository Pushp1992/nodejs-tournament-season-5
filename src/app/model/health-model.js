// Health model which expose the schema of member profile with it's respective fields

const mongoose = require('mongoose');

const HealthSchema = mongoose.Schema({
    memberId: Number,
    city: String,
    city_code: String,
    name: String,
    gender: String,
    age: Number,
    hobbies: Array,
    bio: String,
    intro_title: String
}, {
    timeStamps: true
});

module.exports = mongoose.model('Health', HealthSchema);