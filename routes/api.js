__path = process.cwd()
var express = require('express');

var creator = "@yuzzukamiyaka"
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var ggs = require('google-it');

var ling = require("knights-canvas");
var ytsd = require('ytsr');
var googleImage = require('g-i-s');
var web = require("web-screenshot.js");
var TikTokScraper = require('tiktok-scraper');
var yz = require('yuzzu-api');
var Canvas = require("discord-canvas"),
  Discord = require("discord.js");
var translate = require('@vitalets/google-translate-api');
var hx = require('hxz-api');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	
	
	Base,
	Searchnabi,
    Gempa
} = require('./../lib');

var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";


loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'Apikey??? Contact Me On WhatsApp'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey??? Contact Me On WhatsApp'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: '404 not result'
    }
}


//NSFW
router.get('/nsfw/ass', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ass.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/ahegao', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ahegao.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/bdsm', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/bdsm.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/blowjob', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/blowjob.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/cuckold', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cuckold.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/cum', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/cum.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/ero', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/ero.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/femdom', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/femdom.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/foot', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/foot.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/gangbang', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/gangbang.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/glasses', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/glasses.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/hentai', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hentai.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/hentaigif', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/hnt_gifs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/jahy', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/jahy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/masturbation', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/masturbation.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/nsfwNeko', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/nsfwNeko.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/orgy', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/orgy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/panties', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/panties.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/pussy', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/pussy.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/thighs', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/thighs.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/nsfw/yuri', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/yuri.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
///MEDIA SOSIAL DOWNLOAD AND STALK

router.get('/tiktod/stalk', async (req, res, next) => {
        username = req.query.username
    if (!username) return res.json(loghandler.notusername)
    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

//BASE

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

//MARKER BROOOOOOOOOOOOOO

//ISLAMMMMMMMMMMMMMMMM

router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/hadits', async (req, res, next) => {
            kitab = req.query.kitab,
            nomor = req.query.nomor
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quran', async (req, res, next) => {
            surah = req.query.surah,
            ayat = req.query.ayat
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


//////////////////============//////
//FUNNN
router.get('/caklontong', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/YuzzuKamiyaka/database-api/main/fun/caklontong.json`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/tebakgambar', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/YuzzuKamiyaka/database-api/main/fun/tebakgambar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data.result;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/hilih', async (req, res, next) => {
            kata = req.query.kata
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//NEWSSSS

router.get('/news/infogempa', async (req, res, next) => {
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/news/covidindo', async (req, res, next) => {
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/covid-indonesia`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/covidworld', async (req, res, next) => {
       fetch(encodeURI(`https://covid19-api-zhirrr.vercel.app/api/world`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/news/covid', async (req, res, next) => {
       yz.covid()
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/news/cnn', async (req, res, next) => {
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnn-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/cnbc', async (req, res, next) => {
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/cnbc-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/republika', async (req, res, next) => {
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/republika-news/`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/tempo', async (req, res, next) => {
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/tempo-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/antara', async (req, res, next) => {
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/antara-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/news/kumparan', async (req, res, next) => {
       fetch(encodeURI(`https://news-api-zhirrr.vercel.app/v1/kumparan-news`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


//OTHER
router.get('/simi', async (req, res, next) => {
            text = req.query.text
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
    
       fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=id`))
        .then(response => response.json())
        .then(data => {
        var result = data.success;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/darkjokes', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/YuzzuKamiyaka/database-api/main/meme/darkjokes.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
        var result = data[Math.floor(Math.random() * data.length)];
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/shorturl', async (req, res, next) => {
        url = req.query.url
     if (!url) return res.json(loghandler.noturl)
     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `Eror? lapor ke owner ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/kbbi', async (req, res, next) => {
            kata = req.query.kata
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://kbbi-api-zhirrr.vercel.app/api/kbbi?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kodepos', async (req, res, next) => {
	    kota = req.query.kota
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//WELCOME
router.get('/welcome2', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
if (!req.query.gcicon) return res.json({ status: 404, error: 'masukkan param gcicon'})

const welcomer = await new ling.Welcome()
                    .setUsername(req.query.name)
                    .setGuildIcon(req.query.gcicon)
                    .setGuildName(req.query.gcname)
                    .setAvatar(req.query.picurl)
                    .setMemberCount(req.query.mem)
                    .setAvatar(req.query.picurl)
                    .setBackground(req.query.bgurl)
                    .toAttachment()
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png');
               res.send(buffer)
        
})

router.get('/goodbye2', async (req, res, next) => {
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.picurl) return res.json({ status: 404, error: 'masukkan param picurl'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param bgurl'})
if (!req.query.gcicon) return res.json({ status: 404, error: 'masukkan param gcicon'})

const welcomer = await new ling.Goodbye()
                    .setUsername(req.query.name)
                    .setGuildIcon(req.query.gcicon)
                    .setGuildName(req.query.gcname)
                    .setAvatar(req.query.picurl)
                    .setMemberCount(req.query.mem)
                    .setAvatar(req.query.picurl)
                    .setBackground(req.query.bgurl)
                    .toAttachment()
                const base64 = `${welcomer.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png')
               res.send(buffer)
        
})

router.get('/rank', async (req, res, next) => {
if (!req.query.icon) return res.json({ status: 404, error: 'masukkan param icon'})
if (!req.query.user) return res.json({ status: 404, error: 'masukkan param user'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param background'})
if (!req.query.needxp) return res.json({ status: 404, error: 'masukkan param NeedXp'})
if (!req.query.currxp) return res.json({ status: 404, error: 'masukkan param CurrXp'})
if (!req.query.level) return res.json({ status: 404, error: 'masukkan param Level'})
if (!req.query.rank) return res.json({ status: 404, error: 'masukkan param Rank'})

const ranger = await new ling.Rank()
    .setAvatar(req.query.icon) 
    .setUsername(req.query.user) 
    .setBg(req.query.bgurl)
    .setNeedxp(req.query.needxp) 
    .setCurrxp(req.query.currxp) 
    .setLevel(req.query.level) 
    .setRank(req.query.rank) 
    .toAttachment()
                const base64 = `${ranger.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png')
               res.send(buffer)
        
})

router.get('/level', async (req, res, next) => {
if (!req.query.icon) return res.json({ status: 404, error: 'masukkan param icon'})
const leveltod = await new ling.Up()
    .setAvatar(req.query.icon) 
    .toAttachment()
                const base64 = `${leveltod.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png')
               res.send(buffer)
        
})

router.get('/welcome', async (req, res, next) => {
if (!req.query.icon) return res.json({ status: 404, error: 'masukkan param icon'})
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param background'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param jumlah mem'})

const welcomer2 = await new knights.Welcome2()
    .setAvatar(req.query.icon)
    .setUsername(req.query.name) 
    .setBg(req.query.bgurl) 
    .setGroupname(req.query.gcname) 
    .setMember(req.query.mem) 
    .toAttachment()
                const base64 = `${welcomer2.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png')
               res.send(buffer)
        
})

router.get('/goodbye', async (req, res, next) => {
if (!req.query.icon) return res.json({ status: 404, error: 'masukkan param icon'})
if (!req.query.name) return res.json({ status: 404, error: 'masukkan param name'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param background'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param jumlah mem'})

const good2 = await new knights.Goodbye2()
    .setAvatar(req.query.icon)
    .setUsername(req.query.name) 
    .setBg(req.query.bgurl) 
    .setGroupname(req.query.gcname) 
    .setMember(req.query.mem) 
    .toAttachment()
                const base64 = `${good2.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png')
               res.send(buffer)
        
})

router.get('/goodbye3', async (req, res, next) => {
if (!req.query.user) return res.json({ status: 404, error: 'masukkan param user'})
if (!req.query.iminator) return res.json({ status: 404, error: 'masukkan param iminator'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.avatar) return res.json({ status: 404, error: 'masukkan param jumlah avatar'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param jumlah bgurl'})

const goodbye3 = await new Canvas.Goodbye()
  .setUsername(req.query.user)
  .setDiscriminator(req.query.iminator)
  .setMemberCount(req.query.mem)
  .setGuildName(req.query.gcname)
  .setAvatar(req.query.avatar)
  .setColor("border", "#FFFEDC")
  .setColor("username-box", "#FFFEDC")
  .setColor("discriminator-box", "#FFFEDC")
  .setColor("message-box", "#FFFEDC")
  .setColor("title", "#FFFEDC")
  .setColor("avatar", "#FFFEDC")
  .setBackground(req.query.bgurl)
  .toAttachment()
                const base64 = `${goodbye3.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png')
               res.send(buffer)
        
})

router.get('/welcome3', async (req, res, next) => {
if (!req.query.user) return res.json({ status: 404, error: 'masukkan param user'})
if (!req.query.iminator) return res.json({ status: 404, error: 'masukkan param iminator'})
if (!req.query.mem) return res.json({ status: 404, error: 'masukkan param mem'})
if (!req.query.gcname) return res.json({ status: 404, error: 'masukkan param gcname'})
if (!req.query.avatar) return res.json({ status: 404, error: 'masukkan param jumlah avatar'})
if (!req.query.bgurl) return res.json({ status: 404, error: 'masukkan param jumlah bgurl'})

const welcomer3 = await new Canvas.Welcome()
  .setUsername(req.query.user)
  .setDiscriminator(req.query.iminator)
  .setMemberCount(req.query.mem)
  .setGuildName(req.query.gcname)
  .setAvatar(req.query.avatar)
  .setColor("border", "#FFFEDC")
  .setColor("username-box", "#FFFEDC")
  .setColor("discriminator-box", "#FFFEDC")
  .setColor("message-box", "#FFFEDC")
  .setColor("title", "#FFFEDC")
  .setColor("avatar", "#FFFEDC")
  .setBackground(req.query.bgurl)
  .toAttachment()
                const base64 = `${welcomer3.toBuffer().toString('base64')}`
                buffer = Buffer.from(base64, 'base64')
               res.type('png')
               res.send(buffer)
        
})

//SEARC

router.get('/wiki', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       yz.wiki(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/hero', async (req, res, next) => {
    hero = req.query.hero
    if (!hero) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter hero"})

       yz.herodetail(`${hero}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/herolist', async (req, res, next) => {
       yz.herolist()
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/films', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       yz.film(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/pinterest', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       yz.pinterest(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/playstore', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       yz.playstore(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/lirik', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
       yz.lirik(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/googleimage', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
       googleImage(`${judul}`, google)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/translate', async (req, res, next) => {
	    var text = req.query.text,
	    to = req.query.to
	if(!text) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter text"})
	if(!to) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter to"})
       
       translate(`${text}`, {to: `${to}`})
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/googlesearch', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
       ggs({'query' : `${judul}`})
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//MEDIAAAAAAAAA
router.get('/github/stalk', async (req, res, next) => {
            username = req.query.username
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter username"})

       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})
router.get('/repository/stalk', async (req, res, next) => {
            username = req.query.username
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "masukan nama repository yang ingin kamu cari"})

       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/infonpm', async (req, res, next) => {
            query = req.query.query
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `Eror? lapor ke owner ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/igstalk', async (req, res, next) => {
    user = req.query.user
    if (!user) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter user"})

       yz.igstalk(`${user}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//ANIMEEEEEE

router.get('/otaku', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       yz.otaku(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/komiku', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       yz.komiku(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/chara', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
       hx.chara(`${judul}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/couple', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/YuzzuKamiyaka/database-api/main/fun/couple.js`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

//FOWNLOADD

router.get('/yts', async (req, res, next) => {
    judul = req.query.judul
    if (!judul) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})
const filter1 = await ytsd.getFilters(`${judul}`)
const filters1 = filter1.get('Type').get('Video')
const { items } = await ytsd(filters1.url, { limit: 10 })
        .then(data => {
        var result = data.items;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ssweb', async (req, res, next) => {
    url = req.query.url
if (!url) return res.json({ status: 404, error: 'masukkan param url'})
    ssweb = await web.capture(`${url}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/fbdown', async (req, res, next) => {
    link = req.query.link
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter link"})

       yz.fbdown(`${link}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/ytdl', async (req, res, next) => {
    link = req.query.link
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter link"})

       yz.ytdl(`${link}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/igstory', async (req, res, next) => {
    user = req.query.user
    if (!user) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter judul"})

       yz.igstory(`${user}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/tiktok', async (req, res, next) => {
    link = req.query.link
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter link"})

       yz.tiktok(`${link}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/twitter', async (req, res, next) => {
    link = req.query.link
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter link"})

       yz.twitter(`${link}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/mediafire', async (req, res, next) => {
    link = req.query.link
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter link"})

       yz.mediafire(`${link}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/instagram', async (req, res, next) => {
    link = req.query.link
    if (!link) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter link"})

       yz.igdl(`${link}`)
        .then(data => {
        var result = data;
             res.json({
             	author: 'YuzzuKamiyaka',
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

module.exports = router
