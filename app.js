const personList=[
   { name:"ali", surname:"saglam", yas:"54", sehir:"adana", cocuk:["ahmet","ökkes", "recep","ayse"], maas:"80000"},
   { name:"veli", surname:"ayik", yas:"45", sehir:"bursa", cocuk:["ali","faik", "nazan","aliye"], maas:"180000"},
   { name:"salih", surname:"kara", yas:"59", sehir:"malatya", cocuk:["ahmet","selim","ayse"], maas:"60000"},
   { name:"musti", surname:"saglak", yas:"34", sehir:"adana", cocuk:["ahmet","saban"], maas:"95000"},
   { name:"ramazan", surname:"suphi", yas:"63", sehir:"istanbul", cocuk:["ahmet","mustafa", "murat","ayse","zeynep"], maas:"220000"},
   { name:"berk", surname:"sergen", yas:"29", sehir:"maras", cocuk:["ayse"], maas:"120000"},
   { name:"can", surname:"demir", yas:"26", sehir:"ankara", cocuk:[], maas:"100000"}
   
]

// console.log(personList.map(i=>i.name))
// console.log(personList.filter(i=>i.sehir=="adana"))
// console.log(personList.filter(i=>i.maas <=100000))
//  console.log(personList.filter(i=>i.cocuk.length <=1))
//  console.log(personList.filter(i=>i.cocuk.length <=2).map(i=>console.log(i.cocuk)))          ////sonuc dogru ama fazladan undefined geliyor. neden ki? 
// console.log(personList.filter(i=>i.surname.length<=4))
//  console.log(personList.filter(i=>i.yas>55))
//  console.log(personList.filter(i=>i.yas>55 && i.cocuk.length<4))
//  console.log(personList.filter(i=>i.yas<30 && i.maas>100000))
//  console.log(personList.filter(i=>i.yas<60 && i.maas>100000 && i.cocuk.length>=1))
// console.log(personList.map(i=>i.yas).reduce((a,b)=>Number(a)+Number(b))) //yas toplami
// console.log(personList.map(i=>i.yas).reduce((a,b)=>Number(a)+Number(b))/personList.length)    / / ortalama
// console.log(personList.filter(i=>i.cocuk=="ayse").map(i=>i.name +" "+ i.surname))  /// ayse adinda cocugu olanlari getir dedim ama hepsini getirmedi.
// console.log(personList.filter(i=>i.cocuk.includes("ayse")).map(i=>i.name +" "+ i.surname))
// console.log(personList.filter(i=>i.name=="musti").map(i=>i.name.replace("musti", "Mustafa"))  ); // personlardan birinin ismini düzeltme
