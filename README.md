Laborationer för kursen 1dv450 - webbramverk

###Starta applikationen
Publicerad applikation: [här](https://obscure-castle-94632.herokuapp.com/)

Inloggningsuppgifter:
* admin@user.se - adminpassword
* rebecca@awesome.se - hejsan

###Om du hellre vill starta applikationen från din egen dator
(Ha ruby och on rails installerat på datorn!)

1. Ta ner applikationen från github.
2. Packa upp zipfilen
3. Öppna en git bash(eller annan konsol) i mappen applikationen ligger i
4. Skriv in 'bundle install --without production' - för att installera alla gems
5. Skriv in 'rake db:schema:load' - för att starta upp databasen
6. Skriv in 'rake db:seed' - för att få in admin i databasen.
7. Skriv in 'rails s' - för att starta upp servern! (Den berättar sedan sökvägen för dig, tror det blir localhost:3000)

##Lycka till!
