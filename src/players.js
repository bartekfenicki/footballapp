const playersData = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "nationality": "Argentina",
    "current_club": "Inter Miami",
    "previous_clubs": ["Barcelona", "Paris Saint-Germain"],
    "position": "Forward",
    "is_active": true,
    "goals": 800,
    "assists": 350,
    "trophies": {
      "ballon_dor": 8,
      "world_cup": 1,
      "euros": 0,
      "domestic_cups": 10,
      "league_titles": 12,
      "champions_leagues": 4,
      "europa_leagues": 0
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "nationality": "Portugal",
    "current_club": "Al-Nassr",
    "previous_clubs": ["Sporting CP", "Manchester United", "Real Madrid", "Juventus"],
    "position": "Forward",
    "is_active": true,
    "goals": 850,
    "assists": 250,
    "trophies": {
      "ballon_dor": 5,
      "world_cup": 0,
      "euros": 1,
      "domestic_cups": 8,
      "league_titles": 7,
      "champions_leagues": 5,
      "europa_leagues": 0
    }
  },
  {
    "id": 3,
    "name": "Neymar Jr.",
    "nationality": "Brazil",
    "current_club": "Al-Hilal",
    "previous_clubs": ["Santos", "Barcelona", "Paris Saint-Germain"],
    "position": "Forward",
    "is_active": true,
    "goals": 450,
    "assists": 250,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 8,
      "league_titles": 6,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 4,
    "name": "Kylian Mbappé",
    "nationality": "France",
    "current_club": "Paris Saint-Germain",
    "previous_clubs": ["Monaco"],
    "position": "Forward",
    "is_active": true,
    "goals": 250,
    "assists": 150,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 1,
      "euros": 0,
      "domestic_cups": 7,
      "league_titles": 6,
      "champions_leagues": 0,
      "europa_leagues": 0
    }
  },
  {
    "id": 5,
    "name": "Kevin De Bruyne",
    "nationality": "Belgium",
    "current_club": "Manchester City",
    "previous_clubs": ["Genk", "Chelsea", "Werder Bremen", "Wolfsburg"],
    "position": "Midfielder",
    "is_active": true,
    "goals": 100,
    "assists": 200,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 6,
      "league_titles": 5,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 6,
    "name": "Robert Lewandowski",
    "nationality": "Poland",
    "current_club": "Barcelona",
    "previous_clubs": ["Znicz Pruszków", "Lech Poznań", "Borussia Dortmund", "Bayern Munich"],
    "position": "Striker",
    "is_active": true,
    "goals": 600,
    "assists": 150,
    "trophies": {
      "ballon_dor": 1,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 6,
      "league_titles": 9,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 7,
    "name": "Zlatan Ibrahimović",
    "nationality": "Sweden",
    "current_club": "Retired",
    "previous_clubs": ["Malmo", "Ajax", "Juventus", "Inter Milan", "Barcelona", "AC Milan", "Paris Saint-Germain", "Manchester United", "LA Galaxy"],
    "position": "Striker",
    "is_active": false,
    "goals": 570,
    "assists": 200,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 8,
      "league_titles": 11,
      "champions_leagues": 0,
      "europa_leagues": 1
    }
  },
  {
    "id": 8,
    "name": "Luka Modrić",
    "nationality": "Croatia",
    "current_club": "Real Madrid",
    "previous_clubs": ["Dinamo Zagreb", "Tottenham Hotspur"],
    "position": "Midfielder",
    "is_active": true,
    "goals": 80,
    "assists": 150,
    "trophies": {
      "ballon_dor": 1,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 6,
      "league_titles": 4,
      "champions_leagues": 5,
      "europa_leagues": 0
    }
  },
  {
    "id": 9,
    "name": "Virgil van Dijk",
    "nationality": "Netherlands",
    "current_club": "Liverpool",
    "previous_clubs": ["Groningen", "Celtic", "Southampton"],
    "position": "Defender",
    "is_active": true,
    "goals": 50,
    "assists": 20,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 3,
      "league_titles": 2,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 10,
    "name": "Erling Haaland",
    "nationality": "Norway",
    "current_club": "Manchester City",
    "previous_clubs": ["Molde", "Red Bull Salzburg", "Borussia Dortmund"],
    "position": "Striker",
    "is_active": true,
    "goals": 200,
    "assists": 50,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 3,
      "league_titles": 4,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 11,
    "name": "Mohamed Salah",
    "nationality": "Egypt",
    "current_club": "Liverpool",
    "previous_clubs": ["El Mokawloon", "Basel", "Chelsea", "Fiorentina", "Roma"],
    "position": "Forward",
    "is_active": true,
    "goals": 300,
    "assists": 150,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 5,
      "league_titles": 2,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 12,
    "name": "Sergio Ramos",
    "nationality": "Spain",
    "current_club": "Sevilla",
    "previous_clubs": ["Sevilla", "Real Madrid", "Paris Saint-Germain"],
    "position": "Defender",
    "is_active": true,
    "goals": 100,
    "assists": 40,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 1,
      "euros": 2,
      "domestic_cups": 4,
      "league_titles": 5,
      "champions_leagues": 4,
      "europa_leagues": 0
    }
  },
  {
    "id": 13,
    "name": "Wojciech Szczęsny",
    "nationality": "Poland",
    "current_club": "Barcelona",
    "previous_clubs": ["Arsenal", "Roma", "Juventus"],
    "position": "Goalkeeper",
    "is_active": true,
    "goals": 0,
    "assists": 6,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 6,
      "league_titles": 4,
      "champions_leagues": 0,
      "europa_leagues": 1
    }
  },
  {
    "id": 14,
    "name": "Bruno Fernandes",
    "nationality": "Portugal",
    "current_club": "Manchester United",
    "previous_clubs": ["Novara", "Udinese", "Sporting CP"],
    "position": "Midfielder",
    "is_active": true,
    "goals": 150,
    "assists": 130,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 2,
      "league_titles": 0,
      "champions_leagues": 0,
      "europa_leagues": 0
    }
  },
  {
    "id": 15,
    "name": "Karim Benzema",
    "nationality": "France",
    "current_club": "Al-Ittihad",
    "previous_clubs": ["Lyon", "Real Madrid"],
    "position": "Striker",
    "is_active": true,
    "goals": 450,
    "assists": 150,
    "trophies": {
      "ballon_dor": 1,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 5,
      "league_titles": 4,
      "champions_leagues": 5,
      "europa_leagues": 0
    }
  },
  {
    "id": 16,
    "name": "Gareth Bale",
    "nationality": "Wales",
    "current_club": "Retired",
    "previous_clubs": ["Southampton", "Tottenham Hotspur", "Real Madrid"],
    "position": "Forward",
    "is_active": false,
    "goals": 250,
    "assists": 150,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 6,
      "league_titles": 3,
      "champions_leagues": 5,
      "europa_leagues": 0
    }
  },
  {
    "id": 17,
    "name": "Alisson Becker",
    "nationality": "Brazil",
    "current_club": "Liverpool",
    "previous_clubs": ["Internacional", "Roma"],
    "position": "Goalkeeper",
    "is_active": true,
    "goals": 0,
    "assists": 4,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 5,
      "league_titles": 1,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 18,
    "name": "Raheem Sterling",
    "nationality": "England",
    "current_club": "Chelsea",
    "previous_clubs": ["QPR", "Liverpool", "Manchester City"],
    "position": "Forward",
    "is_active": true,
    "goals": 150,
    "assists": 80,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 5,
      "league_titles": 3,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 19,
    "name": "Riyad Mahrez",
    "nationality": "Algeria",
    "current_club": "Al-Ahli",
    "previous_clubs": ["Leicester City", "Manchester City"],
    "position": "Forward",
    "is_active": true,
    "goals": 120,
    "assists": 80,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 5,
      "league_titles": 3,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 20,
    "name": "Pierre-Emerick Aubameyang",
    "nationality": "Gabon",
    "current_club": "Chelsea",
    "previous_clubs": ["AC Milan", "Saint-Étienne", "Borussia Dortmund", "Arsenal"],
    "position": "Striker",
    "is_active": true,
    "goals": 250,
    "assists": 120,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 3,
      "league_titles": 2,
      "champions_leagues": 0,
      "europa_leagues": 0
    }
  },
  {
    "id": 21,
    "name": "Declan Rice",
    "nationality": "England",
    "current_club": "Arsenal",
    "previous_clubs": ["West Ham United"],
    "position": "Midfielder",
    "is_active": true,
    "goals": 20,
    "assists": 40,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 1,
      "league_titles": 0,
      "champions_leagues": 0,
      "europa_leagues": 0
    }
  },
  {
    "id": 22,
    "name": "Phil Foden",
    "nationality": "England",
    "current_club": "Manchester City",
    "previous_clubs": ["Manchester City"],
    "position": "Midfielder",
    "is_active": true,
    "goals": 60,
    "assists": 50,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 3,
      "league_titles": 4,
      "champions_leagues": 1,
      "europa_leagues": 0
    }
  },
  {
    "id": 23,
    "name": "Harry Kane",
    "nationality": "England",
    "current_club": "Bayern Munich",
    "previous_clubs": ["Tottenham Hotspur"],
    "position": "Striker",
    "is_active": true,
    "goals": 300,
    "assists": 60,
    "trophies": {
      "ballon_dor": 0,
      "world_cup": 0,
      "euros": 0,
      "domestic_cups": 0,
      "league_titles": 1,
      "champions_leagues": 0,
      "europa_leagues": 0
    }
  }
]

  export default playersData;
