__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/home', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/anime', (req, res) => {
    res.sendFile(__path + '/views/anime.html')
})

router.get('/download', (req, res) => {
    res.sendFile(__path + '/views/download.html')
})

router.get('/fun', (req, res) => {
    res.sendFile(__path + '/views/fun.html')
})

router.get('/info', (req, res) => {
    res.sendFile(__path + '/views/info.html')
})

router.get('/media', (req, res) => {
    res.sendFile(__path + '/views/media.html')
})

router.get('/other', (req, res) => {
    res.sendFile(__path + '/views/other.html')
})

router.get('/photooxy', (req, res) => {
    res.sendFile(__path + '/views/photooxy.html')
})

router.get('/baseenc', (req, res) => {
    res.sendFile(__path + '/views/base.html')
})

router.get('/profil', (req, res) => {
    res.sendFile(__path + '/views/pages-profile.html')
})

module.exports = router
