export interface User {
  uuid: string;
  document: {
    type: string;
    number: string;
  };
  birthdate: string;
  contact_info: {
    email: string;
    phone: {
      area_code: string;
      country_code: string;
      number: string;
      type: string;
    }[];
  };
  gender: string;
  link: string;
  name: string;
  surname: string;
}

const data: Array<User> = [
  {
    uuid: "64e0115fbecd33f1b49616f1",
    document: {
      type: "DNI",
      number: "212085210",
    },
    birthdate: "17/11/1984",
    contact_info: {
      email: "collier@mailexample.com",
      phone: [
        {
          area_code: "100",
          country_code: "+58",
          number: "10049927",
          type: "phone",
        },
        {
          area_code: "70",
          country_code: "+58",
          number: "10030638",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "occaecat",
    name: "Lenore",
    surname: "Valdez",
  },
  {
    uuid: "64e0115f905ae4ee8016a446",
    document: {
      type: "DNI",
      number: "925455488",
    },
    birthdate: "05/11/1982",
    contact_info: {
      email: "burris@mailexample.com",
      phone: [
        {
          area_code: "72",
          country_code: "+58",
          number: "11004927",
          type: "phone",
        },
        {
          area_code: "12",
          country_code: "+58",
          number: "10599478",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "incididunt",
    name: "Powell",
    surname: "Hester",
  },
  {
    uuid: "64e0115ffa86d5162597a339",
    document: {
      type: "DNI",
      number: "162659560",
    },
    birthdate: "31/10/2020",
    contact_info: {
      email: "goff@mailexample.com",
      phone: [
        {
          area_code: "38",
          country_code: "+58",
          number: "10409822",
          type: "phone",
        },
        {
          area_code: "41",
          country_code: "+58",
          number: "10206264",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "et",
    name: "Lucy",
    surname: "Stevenson",
  },
  {
    uuid: "64e0115f0ad9667374d02419",
    document: {
      type: "DNI",
      number: "987504391",
    },
    birthdate: "28/09/1973",
    contact_info: {
      email: "harper@mailexample.com",
      phone: [
        {
          area_code: "26",
          country_code: "+58",
          number: "10828387",
          type: "phone",
        },
        {
          area_code: "82",
          country_code: "+58",
          number: "11091017",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "mollit",
    name: "Ophelia",
    surname: "Larson",
  },
  {
    uuid: "64e0115fb1de904e5932ca2d",
    document: {
      type: "DNI",
      number: "892529340",
    },
    birthdate: "27/06/1972",
    contact_info: {
      email: "mcdaniel@mailexample.com",
      phone: [
        {
          area_code: "36",
          country_code: "+58",
          number: "11050429",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "duis",
    name: "Robles",
    surname: "Drake",
  },
  {
    uuid: "64e0115f240090d3f5f1e2f3",
    document: {
      type: "DNI",
      number: "560563009",
    },
    birthdate: "19/10/2002",
    contact_info: {
      email: "avery@mailexample.com",
      phone: [
        {
          area_code: "81",
          country_code: "+58",
          number: "10630450",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "ex",
    name: "Nelson",
    surname: "Mckinney",
  },
  {
    uuid: "64e0115fa63a7102cdb70326",
    document: {
      type: "DNI",
      number: "564506342",
    },
    birthdate: "22/09/1996",
    contact_info: {
      email: "trujillo@mailexample.com",
      phone: [
        {
          area_code: "31",
          country_code: "+58",
          number: "10409624",
          type: "phone",
        },
        {
          area_code: "78",
          country_code: "+58",
          number: "11108437",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "sit",
    name: "Warner",
    surname: "Wynn",
  },
  {
    uuid: "64e0115f1167d542b4d12c58",
    document: {
      type: "DNI",
      number: "320672462",
    },
    birthdate: "02/09/1984",
    contact_info: {
      email: "combs@mailexample.com",
      phone: [
        {
          area_code: "36",
          country_code: "+58",
          number: "10200277",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "labore",
    name: "Lindsey",
    surname: "Dillon",
  },
  {
    uuid: "64e0115f5cee7d476243e5c0",
    document: {
      type: "DNI",
      number: "903552710",
    },
    birthdate: "06/01/2009",
    contact_info: {
      email: "knapp@mailexample.com",
      phone: [
        {
          area_code: "41",
          country_code: "+58",
          number: "10982138",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "pariatur",
    name: "Bender",
    surname: "Weber",
  },
  {
    uuid: "64e0115f510ef0bd528b7c11",
    document: {
      type: "DNI",
      number: "318919313",
    },
    birthdate: "07/02/1985",
    contact_info: {
      email: "gamble@mailexample.com",
      phone: [
        {
          area_code: "10",
          country_code: "+58",
          number: "10122696",
          type: "phone",
        },
        {
          area_code: "44",
          country_code: "+58",
          number: "10033885",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "pariatur",
    name: "Camille",
    surname: "Smith",
  },
  {
    uuid: "64e0115f39fd181689c7478b",
    document: {
      type: "DNI",
      number: "329512397",
    },
    birthdate: "15/12/2022",
    contact_info: {
      email: "blevins@mailexample.com",
      phone: [
        {
          area_code: "17",
          country_code: "+58",
          number: "10171808",
          type: "phone",
        },
        {
          area_code: "76",
          country_code: "+58",
          number: "10812700",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "exercitation",
    name: "Fox",
    surname: "Mcbride",
  },
  {
    uuid: "64e0115fff4f1c224cdcf296",
    document: {
      type: "DNI",
      number: "189614206",
    },
    birthdate: "25/07/1978",
    contact_info: {
      email: "fleming@mailexample.com",
      phone: [
        {
          area_code: "99",
          country_code: "+58",
          number: "10135899",
          type: "phone",
        },
        {
          area_code: "61",
          country_code: "+58",
          number: "11022180",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "et",
    name: "Padilla",
    surname: "Moore",
  },
  {
    uuid: "64e0115f5e9df351623a61b4",
    document: {
      type: "DNI",
      number: "241221950",
    },
    birthdate: "22/01/2020",
    contact_info: {
      email: "pearson@mailexample.com",
      phone: [
        {
          area_code: "98",
          country_code: "+58",
          number: "10189681",
          type: "phone",
        },
        {
          area_code: "95",
          country_code: "+58",
          number: "10897109",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "nisi",
    name: "Orr",
    surname: "Hartman",
  },
  {
    uuid: "64e0115faf0df52b87fd05a9",
    document: {
      type: "DNI",
      number: "735400069",
    },
    birthdate: "31/07/1977",
    contact_info: {
      email: "molina@mailexample.com",
      phone: [
        {
          area_code: "11",
          country_code: "+58",
          number: "10195535",
          type: "phone",
        },
        {
          area_code: "62",
          country_code: "+58",
          number: "10646874",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "dolor",
    name: "Sosa",
    surname: "Kaufman",
  },
  {
    uuid: "64e0115f25d6a92edf8fcdec",
    document: {
      type: "DNI",
      number: "180981606",
    },
    birthdate: "02/02/1995",
    contact_info: {
      email: "waller@mailexample.com",
      phone: [
        {
          area_code: "67",
          country_code: "+58",
          number: "10396979",
          type: "phone",
        },
        {
          area_code: "35",
          country_code: "+58",
          number: "10174055",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "ea",
    name: "Hooper",
    surname: "Erickson",
  },
  {
    uuid: "64e0115f7a40ad271bb2b70e",
    document: {
      type: "DNI",
      number: "732693394",
    },
    birthdate: "03/11/2010",
    contact_info: {
      email: "gardner@mailexample.com",
      phone: [
        {
          area_code: "38",
          country_code: "+58",
          number: "10945041",
          type: "phone",
        },
        {
          area_code: "47",
          country_code: "+58",
          number: "10292354",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "qui",
    name: "Christi",
    surname: "Rollins",
  },
  {
    uuid: "64e0115f1e960ececaa964d3",
    document: {
      type: "DNI",
      number: "800512787",
    },
    birthdate: "25/06/2022",
    contact_info: {
      email: "malone@mailexample.com",
      phone: [
        {
          area_code: "99",
          country_code: "+58",
          number: "10474402",
          type: "phone",
        },
        {
          area_code: "80",
          country_code: "+58",
          number: "10740340",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "aliqua",
    name: "Spence",
    surname: "Ray",
  },
  {
    uuid: "64e0115f674b7e323c9c11cd",
    document: {
      type: "DNI",
      number: "959436562",
    },
    birthdate: "28/01/1982",
    contact_info: {
      email: "davis@mailexample.com",
      phone: [
        {
          area_code: "48",
          country_code: "+58",
          number: "10789714",
          type: "phone",
        },
        {
          area_code: "22",
          country_code: "+58",
          number: "10985432",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "nulla",
    name: "Angelita",
    surname: "Summers",
  },
  {
    uuid: "64e0115f9625a8068176b5f6",
    document: {
      type: "DNI",
      number: "369388713",
    },
    birthdate: "28/11/1989",
    contact_info: {
      email: "pugh@mailexample.com",
      phone: [
        {
          area_code: "49",
          country_code: "+58",
          number: "10411684",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "officia",
    name: "Walls",
    surname: "Hardy",
  },
  {
    uuid: "64e0115f68ddfd8014e56636",
    document: {
      type: "DNI",
      number: "384039363",
    },
    birthdate: "18/05/1990",
    contact_info: {
      email: "buckley@mailexample.com",
      phone: [
        {
          area_code: "50",
          country_code: "+58",
          number: "10338463",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "labore",
    name: "Terrie",
    surname: "Velasquez",
  },
  {
    uuid: "64e0115fce65e709b481ba31",
    document: {
      type: "DNI",
      number: "540653355",
    },
    birthdate: "13/04/2021",
    contact_info: {
      email: "preston@mailexample.com",
      phone: [
        {
          area_code: "30",
          country_code: "+58",
          number: "10202411",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "officia",
    name: "Yvette",
    surname: "Nixon",
  },
  {
    uuid: "64e0115f68321eb6d3dbdc24",
    document: {
      type: "DNI",
      number: "936944043",
    },
    birthdate: "18/08/2005",
    contact_info: {
      email: "woodward@mailexample.com",
      phone: [
        {
          area_code: "74",
          country_code: "+58",
          number: "10910340",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "eiusmod",
    name: "Charlotte",
    surname: "Sears",
  },
  {
    uuid: "64e0115fa4a87ffc1d8557e1",
    document: {
      type: "DNI",
      number: "997224395",
    },
    birthdate: "09/09/2006",
    contact_info: {
      email: "manning@mailexample.com",
      phone: [
        {
          area_code: "66",
          country_code: "+58",
          number: "10703557",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "nulla",
    name: "Deleon",
    surname: "Michael",
  },
  {
    uuid: "64e0115fb4417292433b5c36",
    document: {
      type: "DNI",
      number: "943850913",
    },
    birthdate: "21/10/1980",
    contact_info: {
      email: "mercer@mailexample.com",
      phone: [
        {
          area_code: "62",
          country_code: "+58",
          number: "10925392",
          type: "phone",
        },
        {
          area_code: "52",
          country_code: "+58",
          number: "10785507",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "incididunt",
    name: "Evangeline",
    surname: "Joseph",
  },
  {
    uuid: "64e0115fe7c8395281f702ae",
    document: {
      type: "DNI",
      number: "535009708",
    },
    birthdate: "23/07/1999",
    contact_info: {
      email: "montgomery@mailexample.com",
      phone: [
        {
          area_code: "10",
          country_code: "+58",
          number: "10796173",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "est",
    name: "Barry",
    surname: "Alexander",
  },
  {
    uuid: "64e0115fe6fd08b588c9c7bd",
    document: {
      type: "DNI",
      number: "686577881",
    },
    birthdate: "26/05/1986",
    contact_info: {
      email: "small@mailexample.com",
      phone: [
        {
          area_code: "66",
          country_code: "+58",
          number: "10795207",
          type: "phone",
        },
        {
          area_code: "38",
          country_code: "+58",
          number: "10647952",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "mollit",
    name: "Suarez",
    surname: "Tran",
  },
  {
    uuid: "64e0115f2d1a4ae8760e12ef",
    document: {
      type: "DNI",
      number: "365001762",
    },
    birthdate: "17/06/1974",
    contact_info: {
      email: "wallace@mailexample.com",
      phone: [
        {
          area_code: "54",
          country_code: "+58",
          number: "10096395",
          type: "phone",
        },
        {
          area_code: "97",
          country_code: "+58",
          number: "10759802",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "duis",
    name: "Velasquez",
    surname: "Odom",
  },
  {
    uuid: "64e0115f309ac67ced800a95",
    document: {
      type: "DNI",
      number: "943045000",
    },
    birthdate: "15/12/1995",
    contact_info: {
      email: "reeves@mailexample.com",
      phone: [
        {
          area_code: "49",
          country_code: "+58",
          number: "11014355",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "elit",
    name: "Nikki",
    surname: "Kennedy",
  },
  {
    uuid: "64e0115fb458ead78ff71d2e",
    document: {
      type: "DNI",
      number: "391532223",
    },
    birthdate: "01/03/2018",
    contact_info: {
      email: "rodriquez@mailexample.com",
      phone: [
        {
          area_code: "77",
          country_code: "+58",
          number: "10359450",
          type: "phone",
        },
        {
          area_code: "84",
          country_code: "+58",
          number: "10168346",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "ipsum",
    name: "Marcella",
    surname: "Hampton",
  },
  {
    uuid: "64e0115f72549fbd3c16420c",
    document: {
      type: "DNI",
      number: "391419880",
    },
    birthdate: "04/08/1998",
    contact_info: {
      email: "wyatt@mailexample.com",
      phone: [
        {
          area_code: "12",
          country_code: "+58",
          number: "10323823",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "nulla",
    name: "Viola",
    surname: "Hicks",
  },
  {
    uuid: "64e0115fc1f2ff3e108f6314",
    document: {
      type: "DNI",
      number: "462192210",
    },
    birthdate: "01/11/1971",
    contact_info: {
      email: "mason@mailexample.com",
      phone: [
        {
          area_code: "64",
          country_code: "+58",
          number: "10078877",
          type: "phone",
        },
        {
          area_code: "48",
          country_code: "+58",
          number: "10086336",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "non",
    name: "Angela",
    surname: "Guy",
  },
  {
    uuid: "64e0115f2e15ba7471f0c3ef",
    document: {
      type: "DNI",
      number: "271133096",
    },
    birthdate: "06/02/2005",
    contact_info: {
      email: "noel@mailexample.com",
      phone: [
        {
          area_code: "36",
          country_code: "+58",
          number: "10967948",
          type: "phone",
        },
        {
          area_code: "22",
          country_code: "+58",
          number: "10852053",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "quis",
    name: "Roy",
    surname: "Sexton",
  },
  {
    uuid: "64e0115fdb12feb0a67e20e6",
    document: {
      type: "DNI",
      number: "950739919",
    },
    birthdate: "05/11/1985",
    contact_info: {
      email: "peters@mailexample.com",
      phone: [
        {
          area_code: "22",
          country_code: "+58",
          number: "10531330",
          type: "phone",
        },
        {
          area_code: "18",
          country_code: "+58",
          number: "10760604",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "labore",
    name: "Mendoza",
    surname: "Sheppard",
  },
  {
    uuid: "64e0115fecd67521c27d7ed2",
    document: {
      type: "DNI",
      number: "550429845",
    },
    birthdate: "06/01/2008",
    contact_info: {
      email: "vazquez@mailexample.com",
      phone: [
        {
          area_code: "47",
          country_code: "+58",
          number: "10992592",
          type: "phone",
        },
        {
          area_code: "51",
          country_code: "+58",
          number: "10348464",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "fugiat",
    name: "Ursula",
    surname: "Willis",
  },
  {
    uuid: "64e0115f453ff06963e6a823",
    document: {
      type: "DNI",
      number: "756500944",
    },
    birthdate: "20/06/2023",
    contact_info: {
      email: "camacho@mailexample.com",
      phone: [
        {
          area_code: "14",
          country_code: "+58",
          number: "11000971",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "quis",
    name: "Howell",
    surname: "Wright",
  },
  {
    uuid: "64e0115fadd28d3df7a9b41e",
    document: {
      type: "DNI",
      number: "957032420",
    },
    birthdate: "07/02/1988",
    contact_info: {
      email: "faulkner@mailexample.com",
      phone: [
        {
          area_code: "81",
          country_code: "+58",
          number: "11058144",
          type: "phone",
        },
        {
          area_code: "77",
          country_code: "+58",
          number: "10321368",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "aliqua",
    name: "Shaw",
    surname: "Mcfadden",
  },
  {
    uuid: "64e0115f21825a3d8b8cf82c",
    document: {
      type: "DNI",
      number: "567108062",
    },
    birthdate: "02/02/1992",
    contact_info: {
      email: "mcgee@mailexample.com",
      phone: [
        {
          area_code: "71",
          country_code: "+58",
          number: "10172474",
          type: "phone",
        },
        {
          area_code: "25",
          country_code: "+58",
          number: "10067916",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "consequat",
    name: "Sylvia",
    surname: "Peterson",
  },
  {
    uuid: "64e0115f37b2d611b8db4fd7",
    document: {
      type: "DNI",
      number: "987315560",
    },
    birthdate: "25/01/2011",
    contact_info: {
      email: "jennings@mailexample.com",
      phone: [
        {
          area_code: "22",
          country_code: "+58",
          number: "10073095",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "exercitation",
    name: "Rasmussen",
    surname: "Mays",
  },
  {
    uuid: "64e0115f25f4d474c84fa66e",
    document: {
      type: "DNI",
      number: "669353231",
    },
    birthdate: "13/09/2022",
    contact_info: {
      email: "calhoun@mailexample.com",
      phone: [
        {
          area_code: "96",
          country_code: "+58",
          number: "10435829",
          type: "phone",
        },
        {
          area_code: "45",
          country_code: "+58",
          number: "10888260",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "pariatur",
    name: "Lamb",
    surname: "Guerrero",
  },
  {
    uuid: "64e0115ffa479f06ebc1ad7d",
    document: {
      type: "DNI",
      number: "225195650",
    },
    birthdate: "13/11/2014",
    contact_info: {
      email: "hays@mailexample.com",
      phone: [
        {
          area_code: "35",
          country_code: "+58",
          number: "10910512",
          type: "phone",
        },
        {
          area_code: "11",
          country_code: "+58",
          number: "11029925",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "minim",
    name: "Madden",
    surname: "Hopper",
  },
  {
    uuid: "64e0115f84ad32e4ded09ced",
    document: {
      type: "DNI",
      number: "600445471",
    },
    birthdate: "24/06/1998",
    contact_info: {
      email: "lowe@mailexample.com",
      phone: [
        {
          area_code: "89",
          country_code: "+58",
          number: "11107382",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "enim",
    name: "Joy",
    surname: "Wade",
  },
  {
    uuid: "64e0115ff6dd78d98af1e061",
    document: {
      type: "DNI",
      number: "480789580",
    },
    birthdate: "04/10/1989",
    contact_info: {
      email: "reese@mailexample.com",
      phone: [
        {
          area_code: "39",
          country_code: "+58",
          number: "10821631",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "qui",
    name: "Nannie",
    surname: "Watson",
  },
  {
    uuid: "64e0115ffafcfe40c28fbd57",
    document: {
      type: "DNI",
      number: "447151371",
    },
    birthdate: "17/02/1991",
    contact_info: {
      email: "hamilton@mailexample.com",
      phone: [
        {
          area_code: "18",
          country_code: "+58",
          number: "10972624",
          type: "phone",
        },
        {
          area_code: "37",
          country_code: "+58",
          number: "10056502",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "enim",
    name: "Holder",
    surname: "Hahn",
  },
  {
    uuid: "64e0115fc106d6a33e1245ff",
    document: {
      type: "DNI",
      number: "747303679",
    },
    birthdate: "17/04/1980",
    contact_info: {
      email: "solomon@mailexample.com",
      phone: [
        {
          area_code: "10",
          country_code: "+58",
          number: "10037614",
          type: "phone",
        },
        {
          area_code: "33",
          country_code: "+58",
          number: "10389837",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "aliquip",
    name: "Debbie",
    surname: "Christian",
  },
  {
    uuid: "64e0115f965eb1d2fde2160c",
    document: {
      type: "DNI",
      number: "125596077",
    },
    birthdate: "02/07/2001",
    contact_info: {
      email: "keith@mailexample.com",
      phone: [
        {
          area_code: "46",
          country_code: "+58",
          number: "10684259",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "laborum",
    name: "Davidson",
    surname: "Stout",
  },
  {
    uuid: "64e0115f28dcc86a8560d329",
    document: {
      type: "DNI",
      number: "981286815",
    },
    birthdate: "01/06/2016",
    contact_info: {
      email: "rodgers@mailexample.com",
      phone: [
        {
          area_code: "62",
          country_code: "+58",
          number: "10184889",
          type: "phone",
        },
        {
          area_code: "87",
          country_code: "+58",
          number: "10850579",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "incididunt",
    name: "Mcconnell",
    surname: "Forbes",
  },
  {
    uuid: "64e0115f1759db41aaa72458",
    document: {
      type: "DNI",
      number: "804544498",
    },
    birthdate: "12/04/1994",
    contact_info: {
      email: "alexander@mailexample.com",
      phone: [
        {
          area_code: "26",
          country_code: "+58",
          number: "11052903",
          type: "phone",
        },
        {
          area_code: "33",
          country_code: "+58",
          number: "10483385",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "consectetur",
    name: "Downs",
    surname: "Maddox",
  },
  {
    uuid: "64e0115f6d4a4a58a5b5a06d",
    document: {
      type: "DNI",
      number: "691671499",
    },
    birthdate: "28/03/2000",
    contact_info: {
      email: "vega@mailexample.com",
      phone: [
        {
          area_code: "94",
          country_code: "+58",
          number: "10906623",
          type: "phone",
        },
        {
          area_code: "40",
          country_code: "+58",
          number: "10787394",
          type: "phone",
        },
      ],
    },
    gender: "Masculino",
    link: "in",
    name: "Patrick",
    surname: "Marks",
  },
  {
    uuid: "64e0115f4096253727504f75",
    document: {
      type: "DNI",
      number: "551258891",
    },
    birthdate: "11/10/1986",
    contact_info: {
      email: "cooley@mailexample.com",
      phone: [
        {
          area_code: "90",
          country_code: "+58",
          number: "10982553",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "dolor",
    name: "Cora",
    surname: "Contreras",
  },
  {
    uuid: "64e0115f244f9cc9c1ae0b7d",
    document: {
      type: "DNI",
      number: "884719030",
    },
    birthdate: "31/01/1988",
    contact_info: {
      email: "rhodes@mailexample.com",
      phone: [
        {
          area_code: "42",
          country_code: "+58",
          number: "10824854",
          type: "phone",
        },
        {
          area_code: "19",
          country_code: "+58",
          number: "10029640",
          type: "phone",
        },
      ],
    },
    gender: "Femenino",
    link: "duis",
    name: "Cassie",
    surname: "Mayer",
  },
];

async function getUsers() {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  return data;
}

export { getUsers };
