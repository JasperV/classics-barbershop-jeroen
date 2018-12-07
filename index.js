#!/usr/bin/env node

'use strict'

const scrape = require( 'website-scraper' )

const options = {
  urls: [
    `https://www.classicsbarbershopjeroen.nl/`
  , `https://www.classicsbarbershopjeroen.nl/contact`
  , `https://www.classicsbarbershopjeroen.nl/wij-verwerken-uw-gegevens`
  ]
, directory: './docs'
, recursive: true
, urlFilter: url => url.startsWith( `https://www.classicsbarbershopjeroen.nl` )
, maxRecursiveDepth: 2
}

scrape( options ).then( result => {
  // console.log( result.url, result.filename )
} ).catch( err => console.err )
