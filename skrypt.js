const dane = {

1:{
tytul:"E-uzależnienia – co to jest?",
opis:"E-uzależnienia to uzależnienia związane z nadmiernym korzystaniem z internetu i urządzeń elektronicznych takich jak komputer telefon czy tablet. Osoba uzależniona spędza bardzo dużo czasu online często kosztem szkoły pracy snu czy kontaktów z innymi ludźmi. Z czasem trudno jej ograniczyć korzystanie z technologii mimo że zauważa negatywne skutki."
},

2:{
tytul:"Uzależnienie od mediów społecznościowych",
opis:"Polega na ciągłym sprawdzaniu aplikacji społecznościowych publikowaniu postów i oczekiwaniu na reakcje innych. Osoba uzależniona często odczuwa potrzebę bycia cały czas online i może czuć niepokój gdy nie ma dostępu do telefonu lub internetu."
},

3:{
tytul:"Uzależnienie od gier komputerowych",
opis:"To sytuacja gdy granie w gry staje się najważniejszą aktywnością w życiu. Osoba spędza przy grach wiele godzin dziennie zaniedbując naukę obowiązki i relacje z innymi ludźmi. Może też mieć trudności z przerwaniem gry."
},

4:{
tytul:"Uzależnienie od oglądania filmów i seriali",
opis:"Polega na ciągłym oglądaniu kolejnych odcinków seriali lub filmów na platformach streamingowych. Osoba może spędzać na tym całe noce co prowadzi do zmęczenia problemów z koncentracją i zaniedbywania obowiązków."
},

5:{
tytul:"Uzależnienie od telefonu",
opis:"Osoba uzależniona od telefonu często sprawdza powiadomienia wiadomości i aplikacje nawet bez wyraźnej potrzeby. Telefon staje się nieodłącznym elementem codziennego życia a jego brak może powodować stres lub rozdrażnienie."
},

6:{
tytul:"Jak radzić sobie z e-uzależnieniami",
opis:"Aby ograniczyć e-uzależnienia warto ustalić limit czasu korzystania z internetu i urządzeń elektronicznych. Pomocne jest także rozwijanie innych zainteresowań takich jak sport spotkania z przyjaciółmi czy czytanie książek. W trudniejszych przypadkach można porozmawiać z rodzicami nauczycielem lub specjalistą który pomoże znaleźć rozwiązanie problemu."
}

}

function otworzBlok(id){
document.getElementById("nakladka").classList.add("aktywna")
document.getElementById("tytul").innerText=dane[id].tytul
document.getElementById("opis").innerText=dane[id].opis
}

function zamknijBlok(){
document.getElementById("nakladka").classList.remove("aktywna")
}