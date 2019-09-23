python -m SimpleHTTPServer 8000

- cloudflare
page rules:
*www.classicsbarbershopjeroen.nl/
forward url - 302
https://classicsbarbershopjeroen.nl
- github org + config
- dns
spf, dkim, dnssec
- google my business
- google search console
sitemap
robots.txt



contact form -> privacy statement -> recaptcha
tls/dane, dmarc goed zetten -> email policy/reports, hsts?
alle issues fixen incl. responsive
email account instellen voor admin
dns prefetch etc
https://github.com/GoogleChromeLabs/quicklink
lighthouse, pagespeed test
pwa - workbox
cms -> netlify, eleventy -> koppelen aan dns cache/sitemap etc... -> koppelen/tonen allerlei analytics en tests etc...
analytics -> cookie melding
https://github.com/voorhoede/front-end-tooling-recipes
http://staticsiteboilerplate.com/
social links en integratie in website - open graph, twitter card in header etc...
schema.org - https://developers.google.com/search/docs/guides/search-gallery
https://learndigital.withgoogle.com/digitalewerkplaats/course/digital-marketing
source code -> pug, stylus
mobile version
chrome portal api
eigen webmail forward ding -> jumprock
eigen oauth login
eigen webhook + proxy
alles automatiseren hierboven - api github, google mybusiness, analytics (ook allerlei tests) etc... -> webhook api -> alles instellen en caches flushen etc... opnemen in cms ook
koppelen met eigen vscode online op heroku met verbinding naar vscode = volledige online omgeving voor dev en content owner - github/heroku - dan ook porten naar andere platformen
