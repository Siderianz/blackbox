// названия рыбы
const myfish = {
   "AAS": "Edelkreps(ferskvann)",
   "ABZ": "Småsil",
   "ACH": "Røye",
   "ACH": "Røye(oppdrett)",
   "AES": "Blomsterreke",
   "AJC": "Butare",
   "AJH": "Koralldyr",
   "AKL": "Brungylt",
   "AKL": "Brungylt(oppdrett)",
   "ALB": "Albakor",
   "ALC": "Baird's slickhead *",
   "ALE": "Alewife *",
   "ALF": "Alfonsinos nei *",
   "ALV": "Revehai",
   "AMS": "Saltsjøkreps(oppdrett)",
   "ANE": "Ansjos",
   "ANF": "Andre av breiflabbfamilien",
   "ANG": "American angler *",
   "ANT": "Blå antimora",
   "API": "Deep- water catsharks * ",
   "APL": "Annen tang og tare",
   "ARG": "Strømsild / Vassild",
   "ARU": "Vassild",
   "ARY": "Strømsild",
   "ASK": "Havengler, uspes.",
   "ASN": "Grisetang",
   "ATG": "Istorsk",
   "BEL": "Hvithval",
   "BEN": "Horngjel, uspes."
};

const list = document.getElementById('datalistOptions-fish');

for (key in myfish) {
   const option = document.createElement('option');
   option.value = myfish[key];
   list.appendChild(option);
};

// названия портов
const myport = {
   "NOABE": "Abelnes",
   "NOABV": "Abelvær",
   "NOAGD": "Agdenes",
   "NOAFT": "Agnefest",
   "NOAKU": "Akershus",
   "NOAKK": "Akkarfjord",
   "NOAKL": "Akland",
   "NOALN": "Alnabru",
   "NOAVG": "Alsvåg",
   "NOALS": "Alstahaug",
   "NOALF": "Alta",
   "NOADL": "Alvdal",
   "NOALV": "Alvika",
   "NOANU": "Andebu",
   "NOADN": "Andenes",
   "NOADY": "Andøy",
   "NOAFS": "Anfinnsletta",
   "NOANS": "Ansnes",
   "NOARE": "Arendal",
   "NOAHS": "Arhus",
   "NOARF": "Arnafjord",
   "NOANB": "Arneberg",
   "NOARM": "Arnøyhamn",
   "NOASK": "Asker",
   "NOAIM": "Askim ",
   "NOASM": "Askim",
   "NOASL": "Askvoll",
   "NOASY": "Askøy",
   "NOATL": "Atløy"
}

const list2 = document.getElementById('datalistOptions-ports');

for (const key in myport) {
   const option = document.createElement('option');
   option.value = myport[key];
   list2.appendChild(option);
};


// каунтер
const foo = (counter) => foo1 = () => counter++;
const id = foo(1);
// console.log(id());
// console.log(id());
// console.log(id());

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);


// console.log(getKeyByValue(obj, document.getElementById('exampleDataList0')));

// const time = new Date();
// console.log(time.getTime());
const url = 'http://localhost:8000/api/dep';

const jsonString = async (data) => {
   try {
      const response = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const json = await response.json();
      console.log('Успех:', JSON.stringify(json));
   } catch (error) {
      console.error('Ошибка:', error);
   };
}

const getData = () => {
   const list2 = {
      "_id": id(),
      "TM": "DEP",
      "MA": document.getElementById('validationCustom01').value,
      "PO": { "code": getKeyByValue(myport, document.getElementById('exampleDataList0').value), "name": document.getElementById('exampleDataList0').value },
      "OB": [{ "code": getKeyByValue(myfish, document.getElementById('exampleDataList2').value), "name": document.getElementById('exampleDataList2').value, "weight": document.getElementById('exampleDataList3').value }],
      "DS": { "code": getKeyByValue(myport, document.getElementById('exampleDataList1').value), "name": document.getElementById('exampleDataList1').value },
      "createdAt": { "date": new Date().getTime() },
      "updatedAt": { "date": new Date().getTime() }
   }
   console.log(list2);
   jsonString(list2);
   convertToNaf(list2);
}

// //очистка всех полей
function clearAllInputs() {
   document.getElementById('validationCustom01').value = "";
   document.getElementById('exampleDataList0').value = "";
   document.getElementById('exampleDataList1').value = "";
   document.getElementById('exampleDataList2').value = "";
   document.getElementById('exampleDataList3').value = "";
}

// //генерация button при заполнении всех полей
function toggleButton() {
   const capName = document.getElementById('validationCustom01').value;
   const portDep = document.getElementById('exampleDataList0').value;
   const portArr = document.getElementById('exampleDataList1').value;
   const fishName = document.getElementById('exampleDataList2').value;
   const fishWeight = document.getElementById('exampleDataList3').value;

   if (capName && portDep && portArr && fishName && fishWeight) {
      document.getElementById('submitButton0').disabled = false;
      document.getElementById('submitButton1').disabled = false;
   } else {
      document.getElementById('submitButton0').disabled = true;
      document.getElementById('submitButton1').disabled = true;
   }
}

//SR//TM/DEP//MA/ИМЯ КАПИТАНА ИЗ ПОЛЯ//_ID/1//DA/20211210//TI/1021//OB/AAS 1000//ER//
const convertToNaf = (obj) => {
   const copiedObj = JSON.parse(JSON.stringify(obj));

   delete copiedObj["TM"];
   delete copiedObj["PO"];
   
   for (const key in copiedObj) {
      console.log(key, obj[key]);
   }
}


