Laborationer för kursen 1dv450 - webbramverk
####[Förändringar i API-koden under klient utvecklingen](https://github.com/RebeccaFransson/1dv450-rf222cz/wiki/F%C3%B6r%C3%A4ndringar-i-API)

####Att göra:

* Validering fattas på klienten, då detta blev försummat på grund utav tiden.
* Lägga till flera taggar, ta bort taggar.

#Klient-inloggningsuppgifter
email: rebecca@restaurantmap.com 
lösenord: hejsan

#API-dokumentation
####URL
``https://obscure-castle-94632.herokuapp.com/api/``

####Nyckel = fb3737b1c0d01edd92cf64262bc8efdf
Denna skrivs in som en parameter vid varje request

``https://obscure-castle-94632.herokuapp.com/api/creators?key=fb3737b1c0d01edd92cf64262bc8efdf``

Eller registera en applikation och få en egen API-nyckel [här](https://obscure-castle-94632.herokuapp.com/)

####Authentisering
Görs genom att skicka en post till [https://obscure-castle-94632.herokuapp.com/knock/auth_token?key=fb3737b1c0d01edd92cf64262bc8efdf](https://obscure-castle-94632.herokuapp.com/knock/auth_token)

####Exempel på anrop
Exempel på anrop kan du hitta på POSTMAN
* [POSTMAN localhost](https://www.getpostman.com/collections/92bc3f82bbab4deec2e4)
* [POSTMAN heroku(live-version)](https://www.getpostman.com/collections/df50fda93725e132316b)

För att hämta alla utav en resurs skriv resursnamnet

``https://obscure-castle-94632.herokuapp.com/api/restaurants?key=fb3737b1c0d01edd92cf64262bc8efdf``

En specifik resurs, lägg på id

``https://obscure-castle-94632.herokuapp.com/api/restaurants/1?key=fb3737b1c0d01edd92cf64262bc8efdf``

Det finns också en sök funktion till resturangerna

``http://localhost:3000/api/restaurants?query=max&key=fb3737b1c0d01edd92cf64262bc8efdf``

Man kan välja ``location_and_city`` parameter för att söka på de närmst anliggande resturangerna.
Eller ``lat`` och ``lon`` om man väljer det.

``https://obscure-castle-94632.herokuapp.com/api/restaurants?lat=55&lon=13&key=fb3737b1c0d01edd92cf64262bc8efdf``

Limit och offset kan användas för alla resurser
``https://obscure-castle-94632.herokuapp.com/api/restaurants?limit=2&offset=1&key=fb3737b1c0d01edd92cf64262bc8efdf``

Du kan också skapa, uppdatera och tabort resurser. Se postman filerna.
En restaurang kan finns på flera platser, men en plats måste tillhöra en restaurang. Så skapar man en plats måste man skicka med ett rastaurnag-id.

####Format
Formatet för responsen är JSON som standard. Om xml önskas skriv på ``.xml`` efter sökvägen.

``https://obscure-castle-94632.herokuapp.com/api/restaurants.xml?key=fb3737b1c0d01edd92cf64262bc8efdf``

![databasmodell](https://github.com/RebeccaFransson/1dv450-rf222cz/blob/master/databasmodell.png)

#Registera applikation

###Starta applikationen
Publicerad applikation: [här](https://obscure-castle-94632.herokuapp.com/)

Men för peer review 3 skall du ta ner och använda den lokala appliaktionen.

Inloggningsuppgifter:
* admin@user.se - adminpassword
* rebecca@awesome.se - hejsan

###Starta applikationen från din egen dator
(Ha ruby och on rails installerat på datorn!)

1. Ta ner applikationen från github.
2. Packa upp zipfilen
3. Öppna en git bash(eller annan konsol) i mappen applikationen ligger i
4. Skriv in 'bundle install --without production' - för att installera alla gems
5. Skriv in 'rake db:migrate' - för att starta upp databasen
6. Skriv in 'rake db:schema:load' - för att få in data i databasen.
7. Skriv in 'rails s' - för att starta upp servern! (Den berättar sedan sökvägen för dig, tror det blir localhost:3000)
8. Klientsidan öppnar du genom att dubbelklicka på ``index.html``

##Lycka till!
