const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://10.0.0.5:27017/movieApp')
    .then(() => console.log('it worked'))
    .catch(error => console.log('it is still not working'))

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})
async function addAmadeus() {
    try {
        await amadeus.save()
        console.log('amadeus was saved')
    } catch {
        console.log('amadeus was not saved')
    }
}

Movie.findOneAndUpdate({title: 'Amadeus'}, {year: 2000}, {new: true}).then(m => console.log(m))
