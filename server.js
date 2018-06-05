import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import corsFilter from 'cors'

const app = express()

app.set('port', process.env.PORT || 80)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(corsFilter())
app.options('*', corsFilter()) // allow preflight (http.OPTIONS)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'))
})

app.get("/*", function(req, res, next) {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})