---
title: Wordpress på VM-instans i Google Cloud Platform
date: "2018-02-13"
---

Borde jag sätta upp en egen Wordpress-server eller är det bättre att rikta in sig på en Wordpress-tjänst? Här går meningarna isär och istället för att fundera så mycket bestämde jag mig för att sätta upp en egen server i Google Cloud.

Ett par av de grundläggande kraven är egen domän, flera samtidiga webbplatser, skicka epost från webbplatsen med nya domännamnet, SSL-certifikat från Let's Encrypt. Jag bör även börja snickra på ett eget tema, kanske kan [\_S](http://underscores.me) vara ett alternativ. Nope. Fastnade istället för ett bastema från [Beans](http://www.getbeans.io).

## Steg 1. Sätt upp en VM-instans i Google Cloud Platform

Att sätta upp en VM i Compute Engine är enkelt och du kan med fördel använda en färdigbyggd image. I detta exempel använder jag [WordPress Multisite Certified by Bitnami](https://console.cloud.google.com/launcher/details/bitnami-launchpad/wordpress-multisite) som installeras på den billigaste VM-instansen (f1-micro, 1 vCPU, 0.6 GB memory). Fungerar så länge du inte har för hög trafik och kan i efterhand ändras till en lite vassare maskin.

Om du ska koppla ett domännamn till sidan är det även viktigt att du [ändrar serverns IP-adress från Ephemeral till Static](https://console.cloud.google.com/networking/addresses/list).

## Steg 2. Styr din domän till den nya servern

**Krav:** serverns IP-adress `x.x.x.x` och ditt domännamn `ropaolle.se`, jag ville även peka `www.ropaolle.se` och `wp.ropaolle.se` till servern så att jag kan sätta upp mer än en sida.

| A-pekare       | IP-adress | Kommentar                              |
| -------------- | --------- | -------------------------------------- |
| @.ropaolle.se  | x.x.x.x   | Pekar ropaolle.se till huvudsiten.     |
| \*.ropaolle.se | x.x.x.x   | Pekar www.ropaolle.se till huvudsiten. |
| wp.ropaolle.se | x.x.x.x   | Pekar wp.ropaolle.se till subsiten.    |

## Steg 3. Konfigurera utgående epost via Mailgun/Loopia

Att få till epost via din nya domän visade sig vara lite svårare än väntat Men genom att koppla domänen ropaolle.se till ett [https://www.mailgun.com](Mailgunkonto) gick det att få till.

Sidan använder WP Mail SMTP för att använda Mailgun som E-posttjänst och möjliggör utgående E-post. Samtidigt som det även går att koppla Mailgunkontot till Gmail för hantering av in/utgående E-post.

### Aktivera Plugins/WP Mail SMTP och konfigurera dina grundinställningar

From Email: `namn@dindomän.se`&nbsp;
From Name: `ropaolle.se`&nbsp;
Mailer: `Mailgun`&nbsp;
Mailgun API Key: `https://app.mailgun.com/app/domains/dindomän.se`&nbsp;
Domain name: `ropaolle.se`&nbsp;

## Steg 4. Konfigurera Wordpress Superuser

När du fått igång E-post är det även lämpligt att ändra ditt lösenord samt ange administratörens E-post, vilket kräver fungerande E-post för att nunna genomföras.
