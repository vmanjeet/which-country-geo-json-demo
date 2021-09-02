var wc = require("which-country");
// const data c= require("./data");

const data = [
  {
    geometry: {
      coordinates: [
        [
          [14.4168866192168, 50.0897112298328],
          [14.421693324715, 50.0901380206545],
          [14.4208349844482, 50.0881554762726],
          [14.4168866192168, 50.0897112298328],
        ],
      ],
      type: "Polygon",
    },
    id: "a3fb8218-400a-491b-a81f-6410659d41bb",
    type: "Feature",
    properties: {
      name: "prague",
      rawProperties: "{}",
      area: 9,
      country: "CZE",
      countryName: "Czech Republic",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c45b444244e45df563",
    },
    geometry: {
      coordinates: [
        [
          [12.68859888601648, 48.46733022020544],
          [12.69053960861964, 48.46677648772342],
          [12.69015068521473, 48.46601874472082],
          [12.69004514467267, 48.46582468233216],
          [12.68926670444889, 48.46629716230398],
          [12.68844853517275, 48.46698246665144],
          [12.68859888601648, 48.46733022020544],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000085","Nummer":9,"Name":"Gremelsberger Wiese","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":1.2342,"LFlaeche":1.2342}',
      name: "Gremelsberger Wiese",
      area: 3,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.9",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c45b444244e45df561",
    },
    geometry: {
      coordinates: [
        [
          [12.66822630202159, 48.46645017249198],
          [12.66822401824478, 48.46646145368572],
          [12.66839946698092, 48.46651698723112],
          [12.66857948669228, 48.46656735268984],
          [12.6687609987252, 48.46661359619804],
          [12.66890982716217, 48.46664357766272],
          [12.66903998114946, 48.46666441340368],
          [12.66933751698321, 48.46671512190334],
          [12.66942583260391, 48.46672900308648],
          [12.66949087594623, 48.46673685026278],
          [12.66949499527771, 48.46672723527052],
          [12.66953725764536, 48.4653464920476],
          [12.66933556653986, 48.46536151565704],
          [12.66889346515481, 48.46537965289428],
          [12.66825385201907, 48.46535692773098],
          [12.66826168998913, 48.46561337987388],
          [12.66826068277087, 48.46603120220888],
          [12.66822630202159, 48.46645017249198],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000084","Nummer":8,"Name":"Männer - Wiesacker","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":1.3075,"LFlaeche":1.3075}',
      name: "Männer - Wiesacker",
      area: 3,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.8",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c35b444244e45df55f",
    },
    geometry: {
      coordinates: [
        [
          [12.66850690943378, 48.46268717793236],
          [12.66843309633413, 48.46285289640756],
          [12.67103121814588, 48.4627961220343],
          [12.67099410259808, 48.46277061903854],
          [12.67091004684095, 48.4625488954478],
          [12.67086907636733, 48.46214922090504],
          [12.67076031519531, 48.46183807220944],
          [12.67087295935326, 48.46115224673406],
          [12.6709198023205, 48.46075709560094],
          [12.67042319602596, 48.4607077443503],
          [12.67022007808916, 48.46069516969818],
          [12.6700145475827, 48.4607149831496],
          [12.66880520828195, 48.46087877178774],
          [12.66873797219841, 48.46089660916734],
          [12.66869881852662, 48.46173380498788],
          [12.66864123212969, 48.46219763334274],
          [12.66859866552837, 48.46242585059558],
          [12.66850690943378, 48.46268717793236],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000083","Nummer":7,"Name":"Männer - Holzacker","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":3.7296,"LFlaeche":3.7296}',
      name: "Männer - Holzacker",
      area: 9,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.7",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c35b444244e45df55d",
    },
    geometry: {
      coordinates: [
        [
          [12.67419370200503, 48.47509561068086],
          [12.67380431462509, 48.4751565271607],
          [12.67365666987439, 48.47519075599708],
          [12.67369728262241, 48.47645878191972],
          [12.67441683050469, 48.47637731414586],
          [12.67458048562857, 48.47556185396284],
          [12.67460379244352, 48.47539511906162],
          [12.67470709003499, 48.47496259172842],
          [12.67419370200503, 48.47509561068086],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000078","Nummer":4,"Name":"Kramer Acker","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":0.9476,"LFlaeche":0.9476}',
      name: "Kramer Acker",
      area: 2,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.5",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c35b444244e45df55b",
    },
    geometry: {
      coordinates: [
        [
          [12.68961211519343, 48.42686961194892],
          [12.68928545397594, 48.42677444762358],
          [12.68922976290801, 48.42675292873784],
          [12.68901683642992, 48.42672479844906],
          [12.68858748800139, 48.42669976315224],
          [12.68827450089448, 48.42670631417734],
          [12.68815246602785, 48.42676477960564],
          [12.68786061243611, 48.42688541337324],
          [12.6876461090219, 48.42705063830068],
          [12.68789620384389, 48.42827946639236],
          [12.68792756162828, 48.42837010743424],
          [12.68830678624011, 48.42841469028168],
          [12.68875492114468, 48.42847891322106],
          [12.6891133541336, 48.42860455448644],
          [12.68934775868018, 48.42868147739048],
          [12.6896129577288, 48.42871738709778],
          [12.68999499488821, 48.42870996830008],
          [12.69046660640695, 48.42871145275638],
          [12.6904412856301, 48.42849838218674],
          [12.69041775469972, 48.42824789020782],
          [12.6903546127819, 48.42805573055556],
          [12.69029086536863, 48.42781887956736],
          [12.69012510449833, 48.4275697919137],
          [12.69016016338101, 48.42738755348628],
          [12.69011953595135, 48.42719148144738],
          [12.69001661032119, 48.42705468720088],
          [12.68961211519343, 48.42686961194892],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6424000001","Nummer":6,"Name":"Volksdorf-unten","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":3.5838,"LFlaeche":3.5838}',
      name: "Volksdorf-unten",
      area: 9,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.6",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c35b444244e45df559",
    },
    geometry: {
      coordinates: [
        [
          [12.68081958800703, 48.4664762588026],
          [12.68006862117569, 48.4666108507125],
          [12.68041551588501, 48.4679069203332],
          [12.68077738878101, 48.46923941464448],
          [12.6807722662011, 48.4692394975148],
          [12.68077381364795, 48.4692452775684],
          [12.68081781283547, 48.46929206810094],
          [12.68098777190517, 48.46934043618846],
          [12.68116584230559, 48.4693644426226],
          [12.68149779400555, 48.46937033026222],
          [12.68269202370773, 48.46933965811622],
          [12.682747261118, 48.46929391602892],
          [12.6826838877882, 48.46906614307028],
          [12.6823607989459, 48.46789628912754],
          [12.68234284993741, 48.46784864347394],
          [12.68213982217305, 48.46731099498882],
          [12.68202427785233, 48.46718014028452],
          [12.68184742990883, 48.46702527777586],
          [12.6817957609864, 48.46698469259886],
          [12.68159603981974, 48.46683064225206],
          [12.68141143242301, 48.46671840162352],
          [12.68119396849745, 48.46661704067666],
          [12.68090300000219, 48.46652711481426],
          [12.68085648534489, 48.46648582123386],
          [12.68081958800703, 48.4664762588026],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000081","Nummer":3,"Name":"Hausacker","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":4.2222,"LFlaeche":4.2222}',
      name: "Hausacker",
      area: 10,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.4",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c35b444244e45df557",
    },
    geometry: {
      coordinates: [
        [
          [12.66926145077077, 48.46969525541466],
          [12.66898026657855, 48.46968268338006],
          [12.66849155545932, 48.46966430323448],
          [12.6683365422916, 48.47126629574376],
          [12.66833392195411, 48.47129328959432],
          [12.66827796847219, 48.47187203638794],
          [12.6681495028231, 48.47320022068862],
          [12.66856370613438, 48.4731038370124],
          [12.66894218401192, 48.47299569922182],
          [12.67064362995297, 48.4725095232986],
          [12.67150292617572, 48.47224065618212],
          [12.67311606663546, 48.47177915020126],
          [12.67416712277059, 48.47148081257834],
          [12.67451520046316, 48.47136644973936],
          [12.67555411205564, 48.47108157004768],
          [12.67603424928824, 48.47093198374882],
          [12.67617387034801, 48.4708854435782],
          [12.67625672447989, 48.46981438959964],
          [12.67636643421622, 48.46867857328928],
          [12.67559356954173, 48.46871846004874],
          [12.67533628688079, 48.46874371301756],
          [12.67508243319176, 48.46878279430508],
          [12.67434337906201, 48.46892499290292],
          [12.67323929830951, 48.46918767138304],
          [12.67120833615359, 48.46964703341488],
          [12.67094390232552, 48.46969453070736],
          [12.67070140640653, 48.46972382371794],
          [12.67044926181078, 48.46973932346414],
          [12.67017915955089, 48.46973649195814],
          [12.66926145077077, 48.46969525541466],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000080","Nummer":2,"Name":"Rattenbach Acker","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":17.6753,"LFlaeche":17.6753}',
      name: "Rattenbach Acker",
      area: 44,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.3",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c35b444244e45df555",
    },
    geometry: {
      coordinates: [
        [
          [12.66278299651394, 48.47509463170158],
          [12.66284188904778, 48.47509589166756],
          [12.66285815235444, 48.47509356740744],
          [12.66285831038142, 48.47509624298552],
          [12.66312939081585, 48.47506824053622],
          [12.66332108707014, 48.47507190078246],
          [12.66329636772235, 48.47493224597592],
          [12.66328831237105, 48.47475761119968],
          [12.66328627504615, 48.4746015050014],
          [12.66368132233491, 48.4746315992407],
          [12.66406629147452, 48.4746977218069],
          [12.66407743717423, 48.47472265758784],
          [12.66412524989585, 48.47475003279446],
          [12.66418176410428, 48.47478860207006],
          [12.66436469507727, 48.47473223887632],
          [12.66448179403202, 48.47467850415674],
          [12.66468170310537, 48.47459668243442],
          [12.66488093627619, 48.4745204243774],
          [12.66498645994646, 48.474454661886],
          [12.66501929732802, 48.4743967657665],
          [12.66501936889397, 48.47418827857684],
          [12.66499402721693, 48.47396318499044],
          [12.66494887131371, 48.47372145260214],
          [12.66492299554153, 48.47366948057618],
          [12.66484463883201, 48.47367179526866],
          [12.66399517632389, 48.47379397882504],
          [12.66312046706151, 48.4739125787646],
          [12.66274851918312, 48.47394264608784],
          [12.6627486300717, 48.47396130336322],
          [12.66276030172146, 48.47427177301326],
          [12.66276133909798, 48.47429917096828],
          [12.66275957608461, 48.47456808012276],
          [12.66277329069269, 48.47493494720106],
          [12.66278299651394, 48.47509463170158],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000324","Nummer":26,"Name":"Schildhammer","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":1.7283,"LFlaeche":1.7283}',
      name: "Schildhammer",
      area: 4,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.23",
    __v: 0,
  },
  {
    _id: {
      $oid: "612fc5c35b444244e45df553",
    },
    geometry: {
      coordinates: [
        [
          [12.6627486300717, 48.47396130336322],
          [12.6625346781911, 48.47394931964864],
          [12.66235923960402, 48.47394385855472],
          [12.66231347302192, 48.47394243387752],
          [12.66221875295049, 48.47394284270996],
          [12.66208309339505, 48.47394638895346],
          [12.6620849894076, 48.47398202951994],
          [12.66209652725674, 48.47408204421136],
          [12.6620969964674, 48.47411806191062],
          [12.6621306886506, 48.47484105089196],
          [12.66216260121099, 48.47527273813402],
          [12.66216884020948, 48.4754973534782],
          [12.66221817421933, 48.47626159179212],
          [12.66221978708947, 48.47627774476334],
          [12.6622199312782, 48.47628881011762],
          [12.66222618175121, 48.47638563495922],
          [12.66225683545194, 48.47637386126614],
          [12.66244413882872, 48.47630890143334],
          [12.66261959501699, 48.47625643081824],
          [12.66279232440313, 48.47619953950106],
          [12.66284803553407, 48.47616465449092],
          [12.66281132320325, 48.47556066878326],
          [12.66279312053603, 48.47526119546656],
          [12.66278357960275, 48.4751042249042],
          [12.66277329069269, 48.47493494720106],
          [12.66275957608461, 48.47456808012276],
          [12.66276030172146, 48.47427177301326],
          [12.6627486300717, 48.47396130336322],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000551","Nummer":25,"Name":"Kirchengrund","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":1.2299,"LFlaeche":1.2299}',
      name: "Kirchengrund",
      area: 3,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.22",
    __v: 0,
  },

  {
    _id: {
      $oid: "61306d939e35418554eb8181",
    },
    geometry: {
      coordinates: [
        [
          [77.2178316664955, 28.6678370929869],
          [77.21607206894754, 28.664692765058845],
          [77.21195203583181, 28.66471159372547],
          [77.20917397577756, 28.66948411107785],
          [77.21976214434613, 28.66468826486083],
          [77.2178316664955, 28.6678370929869],
        ],
      ],
      type: "Polygon",
    },
    id: "cff6115e-0697-46a8-9f37-cccc76b0c6b5",
    type: "Feature",
    properties: {
      name: "delhi10",
      rawProperties: "{}",
      area: 34.46,
      country: "IND",
      countryName: "India",
    },
    __v: 0,
  },
  ,
  {
    _id: {
      $oid: "612fc5c35b444244e45df551",
    },
    geometry: {
      coordinates: [
        [
          [12.68615554299012, 48.47194702562698],
          [12.68618907647454, 48.47189646536946],
          [12.68618186219921, 48.47176278437754],
          [12.68622028006939, 48.47170338193642],
          [12.68546667092358, 48.46900201114092],
          [12.68294987562187, 48.46948767808514],
          [12.68289550751404, 48.4695377316855],
          [12.68315694575037, 48.470475754145],
          [12.6832894898015, 48.47073818788984],
          [12.68364084381949, 48.47128160680474],
          [12.68378131067334, 48.47139875790192],
          [12.68408452528457, 48.47159021083504],
          [12.68429101327443, 48.4716888927338],
          [12.68468170308673, 48.47180788035766],
          [12.68514499245197, 48.47196501342076],
          [12.6852796174615, 48.47199955298114],
          [12.6854454300406, 48.47201007531246],
          [12.68607866438536, 48.47196250257046],
          [12.68615554299012, 48.47194702562698],
        ],
      ],
      type: "Polygon",
    },
    type: "Feature",
    properties: {
      rawProperties:
        '{"FID":"DEBYLI6456000089","Nummer":18,"Name":"kiesgrubenacker","Jahr":2018,"Land":9,"Betrieb":276092771410030,"Flaeche":5.5589,"LFlaeche":5.5589}',
      name: "kiesgrubenacker",
      area: 14,
      country: "USA",
      countryName: "United States of America",
    },
    id: "daw_299292.16",
    __v: 0,
  },
];

const getPolygonCenterCoordinateAsAPoint = (polygon) => {
  if ("geometry" in polygon) polygon = polygon.geometry;
  if (!Array.isArray(polygon)) polygon = polygon.coordinates[0];

  let minx = 1000;
  let miny = 1000;
  let maxx = -1000;
  let maxy = -1000;
  for (let i = 0; i < polygon.length; i++) {
    const point = polygon[i];
    const x = point[0];
    const y = point[1];

    if (x < minx) minx = x;
    else if (x > maxx) maxx = x;
    if (y < miny) miny = y;
    else if (y > maxy) maxy = y;
  }

  return {
    coordinates: [minx + (maxx - minx) / 2, miny + (maxy - miny) / 2],
  };
};

data.map((i) => {
  const latlong = getPolygonCenterCoordinateAsAPoint(i.geometry);
  console.log(
    ` latlong is ${latlong.coordinates} Country ${wc(latlong.coordinates)}`
  );
});
