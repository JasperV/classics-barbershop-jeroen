DONE:
- cloudflare
page rules:
*www.classicsbarbershopjeroen.nl/
forward url - 302
https://classicsbarbershopjeroen.nl
- github org + config
- dns
spf, dkim, dnssec, dmarc
- google my business
- google search console
sitemap
robots.txt
- email
cbj@jasperv
admin -> jasperv
info@
- rich snippets
google rich snippets
facebook open graph
twitter card
- w3 html validator
- https://github.com/GoogleChromeLabs/quicklink
- instant.page
- https://github.com/addyosmani/critical
https://www.filamentgroup.com/lab/load-css-simpler/
- uptimerobot monitor


https://web.dev/external-anchors-use-rel-noopener/ -> en voor afspraak maken helemaal niet target=blank
google search console
https://www.bingplaces.com/
https://twitter.com/addyosmani/status/1203762151279644673 -> webp ook
loader verwijderen (of alle na pageload) - waarom anders optimaliseren?
source code -> pug, stylus, github root/src optimize static site building -> webp images etc...
https://github.com/ericalli/static-site-boilerplate
https://github.com/voorhoede/front-end-tooling-recipes/tree/master/rollup-bundle-and-watch
https://github.com/voorhoede/front-end-tooling-recipes/tree/master/revision-static-assets
auto reload and other development tools setup
https://stevepolito.design/blog/configure-cloudflare-dns-to-work-with-netlify/
https://codewithhugo.com/enable-cdn-netlify/
https://developer.okta.com/blog/2019/04/11/site-security-cloudflare-netlify
cms -> netlify, eleventy -> koppelen aan dns cache/sitemap etc... -> koppelen/tonen allerlei analytics en tests - uptime etc.. alle externe services etc...
https://testmysite.io/
switch to netlify entirely - ook dns?
pwa - workbox - with quicklink
- https://levelup.gitconnected.com/build-a-pwa-using-only-vanilla-javascript-bdf1eee6f37a
optimize with webpack or similar
analytics -> cookie melding
https://philipwalton.com/articles/the-google-analytics-setup-i-use-on-every-site-i-build/
lighthouse (ci), pagespeed test
https://mxtoolbox.com/Pro/wf/ProDomainHealth.aspx#/
https://webhint.io/scanner/
https://testmysite.io/
https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fclassicsbarbershopjeroen.nl
https://tools.pingdom.com/
https://www.webpagetest.org
https://tools.keycdn.com/speed
https://gtmetrix.com/reports/classicsbarbershopjeroen.nl/
https://search.google.com/test/mobile-friendly
alle issues fixen incl. responsive - menu auto hide on click
300 ms delay remove?
https://learndigital.withgoogle.com/digitalewerkplaats/course/digital-marketing
https://marketingplatform.google.com/about/small-business/
https://buffer.com/library/free-seo-tools
http://tools.seobook.com/
https://smallseotools.com/
internet.nl
tlsa, dane
hsts cloudflare
https://hstspreload.org/?domain=classicsbarbershopjeroen.nl
bimi record - svg logo = https://easydmarc.com/tools/bimi-record-generator
nice readme.md
chrome portal api
recaptcha -> server side verification
eigen webmail forward ding -> jumprock
eigen oauth login
eigen webhook + proxy
alles automatiseren hierboven - api github, google mybusiness, analytics (ook allerlei tests) etc... -> webhook api -> alles instellen en caches flushen etc... opnemen in cms ook
koppelen met eigen vscode online op heroku met verbinding naar vscode = volledige online omgeving voor dev en content owner - github/heroku - dan ook porten naar andere platformen




    <!-- TODO -->
    <!-- <meta name="theme-color" content="#2f2f2f" />
    <meta name="msapplication-TileColor" content="#2f2f2f" />
    <meta name="msapplication-navbutton-color" content="#2f2f2f" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#2f2f2f" />

    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/assets/fav/icon.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      size="192x192"
      href="/assets/fav/icon.png"
    />
    <link
      rel="shortcut icon"
      href="/assets/fav/favicon.ico"
      type="image/x-icon"
    />
    <link rel="icon" href="/assets/fav/favicon.ico" type="image/x-icon" />
    -->
