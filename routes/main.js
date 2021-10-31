__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/anime.html')
})

router.get('/docs/anime', (req, res) => {
    res.sendFile(__path + '/views/anime.html')
})

router.get('/download', (req, res) => {
    res.sendFile(__path + '/views/download.html')
})

router.get('/docs/fun', (req, res) => {
    res.sendFile(__path + '/views/fun.html')
})

router.get('/docs/info', (req, res) => {
    res.sendFile(__path + '/views/info.html')
})

router.get('/docs/media', (req, res) => {
    res.sendFile(__path + '/views/media.html')
})

router.get('/docs/other', (req, res) => {
    res.sendFile(__path + '/views/other.html')
})

router.get('/docs/photooxy', (req, res) => {
    res.sendFile(__path + '/views/photooxy.html')
})

router.get('/docs/baseenc', (req, res) => {
    res.sendFile(__path + '/views/base.html')
})

router.get('/docs/profil', (req, res) => {
    res.sendFile(__path + '/views/pages-profile.html')
})

module.exports = router
