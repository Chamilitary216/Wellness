const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const Statschema = new Schema({
    username: {type: String, required: true },
    date: {type: Date, required: true},
    workout: {type: String, required: true },
    duration: { type: Number, required: true },
    social: { type: Number, required: true},
    calories: { type: Number, required: true},
},{
    timestamps: true,
});

const Stat = mongoose.model('Stat', statSchema);

module.exports = Fitness;