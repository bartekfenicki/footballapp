const players = [
  {
    id: 1,
    first_name: "Lionel",
    last_name: "Messi",
    current_club: {
      name: "Inter Miami",
      image: "https://upload.wikimedia.org/wikipedia/en/4/46/Inter_Miami_CF_logo.svg",
    },
    previous_clubs: [
      {
        name: "Barcelona",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/2048px-FC_Barcelona_%28crest%29.svg.png",
      },
      {
        name: "Paris Saint-Germain",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
    ],
  },
  {
    id: 2,
    first_name: "Cristiano",
    last_name: "Ronaldo",
    current_club: {
      name: "Al-Nassr",
      image: "https://upload.wikimedia.org/wikipedia/en/4/41/Al-Nassr_FC_logo.png",
    },
    previous_clubs: [
      {
        name: "Sporting CP",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Sporting_Clube_de_Portugal.png/800px-Sporting_Clube_de_Portugal.png",
      },
      {
        name: "Manchester United",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
      },
      {
        name: "Real Madrid",
        image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      },
      {
        name: "Juventus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/1200px-Juventus_FC_2017_logo.svg.png",
      },
    ],
  },
  {
    id: 3,
    first_name: "Kylian",
    last_name: "Mbappé",
    current_club: {
      name: "Real Madrid",
      image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
    previous_clubs: [
      {
        name: "AS Monaco",
        image: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg",
      },
      {
        name: "Paris Saint-Germain",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
      },
    ],
  },
  {
    id: 4,
    first_name: "Kevin",
    last_name: "De Bruyne",
    current_club: {
      name: "Manchester City",
      image: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    previous_clubs: [
      {
        name: "Genk",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0f/KRC_Genk_logo.svg",
      },
      {
        name: "Chelsea",
        image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
      },
      {
        name: "Werder Bremen",
        image: "https://upload.wikimedia.org/wikipedia/en/b/be/SV-Werder-Bremen-Logo.svg",
      },
      {
        name: "Wolfsburg",
        image: "https://upload.wikimedia.org/wikipedia/en/6/66/VfL_Wolfsburg_Logo.svg",
      },
    ],
  },
  {
    id: 5,
    first_name: "Neymar",
    last_name: "Jr",
    current_club: {
      name: "Al-Hilal",
      image: "https://upload.wikimedia.org/wikipedia/en/7/74/Al-Hilal_FC_logo.svg",
    },
    previous_clubs: [
      {
        name: "Santos",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Santos_logo.svg",
      },
      {
        name: "Barcelona",
        image: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
      },
      {
        name: "Paris Saint-Germain",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
      },
    ],
  },
  {
    id: 6,
    first_name: "Robert",
    last_name: "Lewandowski",
    current_club: {
      name: "Barcelona",
      image: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    },
    previous_clubs: [
      {
        name: "Znicz Pruszków",
        image: "https://upload.wikimedia.org/wikipedia/en/8/88/Znicz_Pruszk%C3%B3w_logo.svg",
      },
      {
        name: "Lech Poznań",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2a/Lech_Pozna%C5%84_logo.svg",
      },
      {
        name: "Borussia Dortmund",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/Borussia_Dortmund_logo.svg",
      },
      {
        name: "Bayern Munich",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_FC_Bayern_M%C3%BCnchen.svg",
      },
    ],
  },
  {
    id: 7,
    first_name: "Erling",
    last_name: "Haaland",
    current_club: {
      name: "Manchester City",
      image: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    },
    previous_clubs: [
      {
        name: "Bryne FK",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Bryne_FK_logo.svg",
      },
      {
        name: "Molde FK",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3d/Molde_FK_logo.svg",
      },
      {
        name: "Red Bull Salzburg",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Red_Bull_Salzburg_logo.svg",
      },
      {
        name: "Borussia Dortmund",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/Borussia_Dortmund_logo.svg",
      },
    ],
  },
  {
    id: 8,
    first_name: "Karim",
    last_name: "Benzema",
    current_club: {
      name: "Al-Ittihad",
      image: "https://upload.wikimedia.org/wikipedia/en/3/35/Al-Ittihad_Club_logo.svg",
    },
    previous_clubs: [
      {
        name: "Lyon",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c6/Olympique_Lyonnais.svg",
      },
      {
        name: "Real Madrid",
        image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
      },
    ],
  },
  {
    id: 9,
    first_name: "Luka",
    last_name: "Modrić",
    current_club: {
      name: "Real Madrid",
      image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    },
    previous_clubs: [
      {
        name: "Dinamo Zagreb",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Dinamo_Zagreb_logo.svg",
      },
      {
        name: "Tottenham Hotspur",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
      },
    ],
  },
  {
    id: 10,
    first_name: "Virgil",
    last_name: "van Dijk",
    current_club: {
      name: "Liverpool",
      image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    },
    previous_clubs: [
      {
        name: "Groningen",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/FC_Groningen_logo.svg",
      },
      {
        name: "Celtic",
        image: "https://upload.wikimedia.org/wikipedia/en/1/15/Celtic_FC.svg",
      },
      {
        name: "Southampton",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c9/FC_Southampton.svg",
      },
    ],
  },
];

export default players;
