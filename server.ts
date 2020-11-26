import express from 'express'
import {searchRoute} from './search_bar'
import {sortingRoute} from './sorting'
import {createEventRoute} from './createEvent'
import {bottomBarRoute} from './bottomBar'






let app = express()

console.log(app);
app.use(express.static('public'))
app.use(searchRoute)
app.use(sortingRoute)
app.use(createEventRoute)
app.use(bottomBarRoute)



let port = 8080
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`)
})