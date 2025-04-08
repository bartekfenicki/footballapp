const playersData = [
  {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    nationality: "Portugal",
    age: 39,
    clues: [
      "I have won league titles in England, Spain, and Italy.",
      "I am the all-time top scorer in the UEFA Champions League.",
      "I made my professional debut for Sporting CP.",
      "I won my first Ballon d'Or in 2008.",
      "I have played over 200 games for my national team."
    ]
  },
  {
    firstName: "Lionel",
    lastName: "Messi",
    nationality: "Argentina",
    age: 36,
    clues: [
      "I have won the most Ballon d'Or awards in history.",
      "I spent over 20 years at the same club before moving to another league in 2021.",
      "I scored over 90 goals in a single calendar year.",
      "I won my first FIFA World Cup in 2022.",
      "I have played my entire international career for the same national team."
    ]
  },
  {
    firstName: "Kevin",
    lastName: "De Bruyne",
    nationality: "Belgium",
    age: 32,
    clues: [
      "I started my senior career at Genk before moving to England.",
      "I briefly played in the Bundesliga before returning to the Premier League.",
      "I am known for my vision, passing, and long-range shots.",
      "I won the Premier League Playmaker of the Season award multiple times.",
      "I have been a key player for my country’s golden generation."
    ]
  },
  {
    firstName: "Zlatan",
    lastName: "Ibrahimović",
    nationality: "Sweden",
    age: 42,
    clues: [
      "I have played in Serie A, La Liga, Ligue 1, and the Premier League.",
      "I am known for my acrobatic goals and martial arts background.",
      "I have scored in every decade since the 1990s.",
      "I once famously said, 'I don’t do auditions.'",
      "I have won league titles in almost every country I played in."
    ]
  },
  {
    firstName: "Robert",
    lastName: "Lewandowski",
    nationality: "Poland",
    age: 35,
    clues: [
      "I scored five goals in nine minutes during a Bundesliga match.",
      "I moved to Bayern Munich after dominating with Borussia Dortmund.",
      "I have won multiple Bundesliga Golden Boots.",
      "I captained my national team in multiple international tournaments.",
      "I have scored over 600 career goals across club and country."
    ]
  },
  {
    firstName: "Neymar",
    lastName: "Jr",
    nationality: "Brazil",
    age: 32,
    clues: [
      "I started my career at Santos before moving to Europe.",
      "I was part of the most expensive transfer in football history.",
      "I won the Champions League with Barcelona.",
      "I have scored over 75 goals for my national team.",
      "I am known for my dribbling, flair, and samba-style play."
    ]
  },
  {
    firstName: "Zinedine",
    lastName: "Zidane",
    nationality: "France",
    age: 51,
    clues: [
      "Won the World Cup in 1998.",
      "Famous for a legendary Champions League final volley.",
      "Received a red card in his last professional match.",
      "Won three consecutive Champions League titles as a coach.",
      "One of the greatest midfielders of all time."
    ]
  },
  {
    firstName: "Ronaldinho",
    lastName: "Gaucho",
    nationality: "Brazil",
    age: 44,
    clues: [
      "Won the Ballon d'Or in 2005.",
      "Known for his mesmerizing skills and dribbling.",
      "Scored a famous free-kick against England in the 2002 World Cup.",
      "Played for Barcelona, AC Milan, and PSG.",
      "Always had a smile on his face when playing."
    ]
  },
  {
    firstName: "Andrea",
    lastName: "Pirlo",
    nationality: "Italy",
    age: 44,
    clues: [
      "One of the best deep-lying playmakers in football history.",
      "Won the World Cup in 2006 with Italy.",
      "Had an incredible free-kick ability.",
      "Played for both AC Milan and Juventus.",
      "Nicknamed ‘The Maestro’ for his calmness on the ball."
    ]
  },
  {
    firstName: "Thierry",
    lastName: "Henry",
    nationality: "France",
    age: 46,
    clues: [
      "Arsenal’s all-time leading goal scorer.",
      "Part of the 'Invincibles' team that went unbeaten in the Premier League.",
      "Won the 1998 World Cup and 2000 Euros with France.",
      "Played in the MLS after leaving Barcelona.",
      "Known for his trademark finesse finishing."
    ]
  },
  {
    firstName: "Xavi",
    lastName: "Hernandez",
    nationality: "Spain",
    age: 44,
    clues: [
      "Considered one of the best midfielders ever.",
      "Won two European Championships and a World Cup with Spain.",
      "Spent almost his entire career at Barcelona.",
      "Known for his passing and vision on the pitch.",
      "Became Barcelona’s head coach after retiring."
    ]
  },
  {
    firstName: "Kaka",
    lastName: "Ricardo",
    nationality: "Brazil",
    age: 41,
    clues: [
      "Won the Ballon d'Or in 2007.",
      "Played for AC Milan, Real Madrid, and Orlando City.",
      "Scored one of the best solo goals against Manchester United.",
      "Won the 2002 World Cup with Brazil.",
      "Known for his humble personality off the pitch."
    ]
  },
  {
    firstName: "James",
    lastName: "Rodríguez",
    nationality: "Colombia",
    age: 32,
    clues: [
      "Won the Golden Boot at the 2014 FIFA World Cup.",
      "Became a star after his performances at the 2014 World Cup.",
      "Has played for clubs like Real Madrid, Bayern Munich, and Everton.",
      "Known for his vision, passing, and long-range shooting.",
      "Has faced ups and downs in his club career, moving between top European teams."
    ]
  },
  {
    firstName: "Sergio",
    lastName: "Aguero",
    nationality: "Argentina",
    age: 35,
    clues: [
      "Known for his late-game heroics, including a famous goal in the 2012 Premier League title race.",
      "Has won multiple Premier League titles with Manchester City.",
      "Has scored over 400 career goals across club and country.",
      "Was part of Argentina's squad that won the 2021 Copa América.",
      "Retired from professional football at a young age due to health issues."
    ]
  },
  {
    firstName: "Joao",
    lastName: "Félix",
    nationality: "Portugal",
    age: 24,
    clues: [
      "Became one of the most expensive teenagers in football history when moving to Atlético Madrid.",
      "Known for his flair, dribbling, and creativity in the final third.",
      "Has played in both La Liga and the Premier League on loan.",
      "Was a star at Benfica before moving to Atlético.",
      "Has represented Portugal at major international tournaments."
    ]
  },
  {
    firstName: "Marek",
    lastName: "Hamšík",
    nationality: "Slovakia",
    age: 36,
    clues: [
      "Played for Napoli for over a decade, becoming the club’s all-time top scorer.",
      "Was Slovakia's captain during their major international tournaments.",
      "Known for his passing range and leadership in midfield.",
      "Made a move to China in the later stages of his career.",
      "Has been one of the most underrated midfielders in Europe."
    ]
  },
  {
    firstName: "David",
    lastName: "Villa",
    nationality: "Spain",
    age: 42,
    clues: [
      "Was part of the famous Spanish team that won the 2010 FIFA World Cup.",
      "Known for his excellent finishing ability and positioning.",
      "Has scored over 300 career goals for club and country.",
      "Has played in Spain, the United States, and Japan.",
      "Retired from international football after the 2014 World Cup."
    ]
  },
  {
    firstName: "Raúl",
    lastName: "González",
    nationality: "Spain",
    age: 46,
    clues: [
      "Spent the majority of his career at Real Madrid, becoming a club legend.",
      "Is the second-highest scorer in Real Madrid’s history.",
      "Won multiple La Liga and Champions League titles with Real Madrid.",
      "Was a key part of Spain’s national team in the 2000s.",
      "Played in Germany with Schalke 04 towards the end of his career."
    ]
  },
  {
    firstName: "Sami",
    lastName: "Khedira",
    nationality: "Germany",
    age: 36,
    clues: [
      "Played a crucial role in Germany’s 2014 World Cup-winning team.",
      "Had successful club stints at Stuttgart, Real Madrid, and Juventus.",
      "Was known for his versatility in midfield, capable of breaking up attacks and making key passes.",
      "Won multiple league titles in both Spain and Italy.",
      "Is one of the most underrated midfielders of his generation."
    ]
  },
  {
    firstName: "Pierre-Emerick",
    lastName: "Aubameyang",
    nationality: "Gabon",
    age: 34,
    clues: [
      "Has won the Premier League Golden Boot.",
      "Known for his lightning-fast pace and clinical finishing.",
      "Played for top clubs such as Borussia Dortmund and Arsenal.",
      "Was named the African Footballer of the Year in 2015.",
      "Has consistently been one of the most prolific strikers in Europe."
    ]
  },
  {
    firstName: "Cesc",
    lastName: "Fàbregas",
    nationality: "Spain",
    age: 36,
    clues: [
      "Started his career at Arsenal before moving to Barcelona and Chelsea.",
      "Known for his vision and passing range in the midfield.",
      "Was a key player in Spain’s golden generation that won the 2010 World Cup and 2008/2012 Euros.",
      "Became one of the most sought-after midfielders in Europe in his youth.",
      "Has played in multiple top leagues, including the Premier League, La Liga, and Serie A."
    ]
  },
  {
    firstName: "Gareth",
    lastName: "Bale",
    nationality: "Wales",
    age: 34,
    clues: [
      "Became a star at Tottenham Hotspur before moving to Real Madrid.",
      "Known for his incredible pace and powerful left foot.",
      "Has won multiple Champions League titles with Real Madrid.",
      "Played a crucial role in Wales’ qualification for major tournaments.",
      "Retired from football after a varied career in Spain and the U.S."
    ]
  },
  {
    firstName: "Mario",
    lastName: "Götze",
    nationality: "Germany",
    age: 31,
    clues: [
      "Scored the winning goal in the 2014 FIFA World Cup final for Germany.",
      "Had a stellar club career at Borussia Dortmund and Bayern Munich.",
      "Faced serious health challenges during his career but made a successful comeback.",
      "Known for his creativity, vision, and technical skills.",
      "Won multiple Bundesliga titles during his career."
    ]
  },
  {
    firstName: "Bastian",
    lastName: "Schweinsteiger",
    nationality: "Germany",
    age: 39,
    clues: [
      "Played a major role in Germany’s 2014 World Cup victory.",
      "Had a long and successful career at Bayern Munich before moving to Manchester United.",
      "Known for his leadership, work rate, and passing in midfield.",
      "Was a key figure in Bayern’s dominance in Germany during the 2010s.",
      "Retired after a stint in the MLS with Chicago Fire."
    ]
  },
  {
    firstName: "Dani",
    lastName: "Alves",
    nationality: "Brazil",
    age: 40,
    clues: [
      "Has won the most trophies in football history.",
      "Spent over 8 years at Barcelona, winning numerous La Liga and Champions League titles.",
      "Known for his attacking runs and incredible crossing ability.",
      "Has played for top clubs like Juventus, PSG, and Sao Paulo.",
      "Has represented Brazil in multiple World Cups and Copa Americas."
    ]
  },
  {
    firstName: "Luka",
    lastName: "Modrić",
    nationality: "Croatia",
    age: 38,
    clues: [
      "Won the Ballon d'Or in 2018, breaking the Messi-Ronaldo dominance.",
      "Has been a key player for Real Madrid for over a decade.",
      "Played a major role in Croatia’s historic 2018 World Cup run to the final.",
      "Known for his vision, passing, and composure under pressure.",
      "Has won multiple Champions League and La Liga titles with Real Madrid."
    ]
  },
  {
    firstName: "Kasper",
    lastName: "Schmeichel",
    nationality: "Denmark",
    age: 37,
    clues: [
      "Famous for being part of Leicester City's historic Premier League-winning team in 2016.",
      "Has been Denmark’s first-choice goalkeeper for years.",
      "Is the son of legendary goalkeeper Peter Schmeichel.",
      "Played a key role in Denmark’s Euro 2020 campaign.",
      "Has played in the Premier League, Ligue 1, and other top leagues."
    ]
  },
  {
    firstName: "Edinson",
    lastName: "Cavani",
    nationality: "Uruguay",
    age: 37,
    clues: [
      "Has scored over 350 career goals at club and international level.",
      "Has played for top European clubs like Paris Saint-Germain and Manchester United.",
      "Known for his poaching ability, movement off the ball, and aerial prowess.",
      "Is Uruguay’s all-time top scorer.",
      "Has won multiple league titles and domestic cups in France and England."
    ]
  },
  {
    firstName: "N'Golo",
    lastName: "Kanté",
    nationality: "France",
    age: 32,
    clues: [
      "A key part of France's 2018 World Cup-winning team.",
      "Known for his tireless work rate, breaking up opposition attacks.",
      "Has won Premier League titles with Leicester City and Chelsea.",
      "Played a vital role in Chelsea’s 2021 Champions League victory.",
      "One of the most selfless midfielders in the world."
    ]
  },
  {
    firstName: "Jan",
    lastName: "Oblak",
    nationality: "Slovenia",
    age: 31,
    clues: [
      "Has been Atlético Madrid's number one goalkeeper for years.",
      "Considered one of the best goalkeepers in the world.",
      "Has won multiple Zamora trophies, awarded to La Liga's best goalkeeper.",
      "Played a key role in Atlético Madrid’s 2020-21 La Liga title win.",
      "Known for his incredible reflexes, shot-stopping, and commanding presence."
    ]
  },
  {
    firstName: "Sergio",
    lastName: "Ramos",
    nationality: "Spain",
    age: 37,
    clues: [
      "One of the best defenders of his generation, known for his leadership.",
      "Has won multiple Champions League and La Liga titles with Real Madrid.",
      "Scored crucial goals, including in Champions League finals.",
      "A key part of Spain's 2010 World Cup and 2008/2012 Euros victories.",
      "Known for his aggressive style of defending and ability to score headers."
    ]
  },
  {
    firstName: "Kylian",
    lastName: "Mbappé",
    nationality: "France",
    age: 25,
    clues: [
      "Became a global star at the 2018 World Cup, helping France win the trophy.",
      "Known for his blistering pace and clinical finishing.",
      "Has played for Paris Saint-Germain for several years, winning multiple Ligue 1 titles.",
      "Is already one of the top goal scorers in both Ligue 1 and international competitions.",
      "Considered one of the brightest young talents in world football."
    ]
  },
  {
    firstName: "Marco",
    lastName: "Reus",
    nationality: "Germany",
    age: 34,
    clues: [
      "Spent his entire career at Borussia Dortmund, becoming their captain.",
      "Known for his dribbling, pace, and versatility in attack.",
      "Has been part of the German national team for major tournaments.",
      "Struggled with injuries, but when fit, is one of Germany's top attacking players.",
      "Never won the Bundesliga title, despite being one of the league's best players."
    ]
  },
  {
    firstName: "Juan",
    lastName: "Mata",
    nationality: "Spain",
    age: 35,
    clues: [
      "Was a key player at Chelsea, winning the Champions League and FA Cup.",
      "Known for his technical ability, vision, and set-piece expertise.",
      "Had a successful spell at Manchester United, winning multiple trophies.",
      "Was part of Spain’s squad for the 2010 World Cup and 2012 Euros.",
      "Often regarded as one of the most intelligent footballers off the pitch."
    ]
  },
  {
    firstName: "Gerard",
    lastName: "Piqué",
    nationality: "Spain",
    age: 36,
    clues: [
      "Was a key player for Barcelona during their dominant years in Europe.",
      "Won multiple La Liga, Champions League, and World Cup titles.",
      "Is married to pop star Shakira.",
      "Announced his retirement from football in 2022 after over 15 years at Barcelona.",
      "Known for his leadership and ability to read the game from the back."
    ]
  },
  {
    firstName: "Isco",
    lastName: "Alarcón",
    nationality: "Spain",
    age: 31,
    clues: [
      "Was once considered one of the brightest young talents in world football.",
      "Had a highly successful period at Real Madrid, winning multiple Champions League titles.",
      "Known for his dribbling and vision in midfield.",
      "Struggled for game time towards the end of his Real Madrid career.",
      "Has been part of Spain's national team in recent years, despite a dip in form."
    ]
  },
  {
    firstName: "Alisson",
    lastName: "Becker",
    nationality: "Brazil",
    age: 31,
    clues: [
      "Is one of the top goalkeepers in the world and plays for Liverpool.",
      "Was instrumental in Liverpool’s 2019 Champions League victory and 2020 Premier League win.",
      "Known for his incredible reflexes and ability to play with his feet.",
      "Was the first goalkeeper to score a competitive goal in a Premier League match.",
      "Has represented Brazil in major international tournaments, including the Copa América."
    ]
  },
  {
    firstName: "Toni",
    lastName: "Kroos",
    nationality: "Germany",
    age: 34,
    clues: [
      "Has been an integral part of Real Madrid’s midfield for almost a decade.",
      "Has won multiple Champions League titles with Real Madrid.",
      "Played a key role in Germany’s 2014 World Cup victory.",
      "Known for his passing range, composure, and ability to control a game.",
      "One of the most consistent and influential midfielders in world football."
    ]
  },
  {
    firstName: "Mousa",
    lastName: "Dembélé",
    nationality: "Belgium",
    age: 31,
    clues: [
      "Was a key player in Tottenham Hotspur's midfield.",
      "Has struggled with injuries throughout his career, limiting his potential.",
      "Known for his dribbling, balance, and ability to break through opposition lines.",
      "Was part of Belgium’s golden generation but never reached the peak of his potential.",
      "Has played for top clubs in both England and Spain during his career."
    ]
  },
  {
    firstName: "Philippe",
    lastName: "Coutinho",
    nationality: "Brazil",
    age: 31,
    clues: [
      "Had a breakout season at Liverpool, which earned him a move to Barcelona.",
      "Played an important role in Bayern Munich's 2020 Champions League win, albeit on loan.",
      "Known for his dribbling, creativity, and long-range shots.",
      "Has had a difficult time at Barcelona, struggling to find his best form.",
      "Represented Brazil in the 2018 World Cup and won the 2013 FIFA Confederations Cup."
    ]
  },
  {
    firstName: "Mats",
    lastName: "Hummels",
    nationality: "Germany",
    age: 35,
    clues: [
      "Has been a mainstay in the German national defense for years.",
      "Was part of Germany's 2014 World Cup-winning team.",
      "Played a key role in Borussia Dortmund’s defense before moving back to the club from Bayern Munich.",
      "Known for his aerial ability and composure under pressure.",
      "Is regarded as one of the best central defenders of his generation."
    ]
  },
  {
    firstName: "Jack",
    lastName: "Grealish",
    nationality: "England",
    age: 28,
    clues: [
      "Became one of the most expensive English players when he moved to Manchester City.",
      "Known for his dribbling skills, close control, and drawing fouls.",
      "Played a key role in England’s run to the Euro 2020 final.",
      "Was previously a standout performer for Aston Villa in the Premier League.",
      "Has shown his ability to shine in big moments, particularly with his ball progression."
    ]
  },
  {
    firstName: "Jordi",
    lastName: "Alba",
    nationality: "Spain",
    age: 35,
    clues: [
      "Has been Barcelona's first-choice left-back for over a decade.",
      "Known for his speed, overlapping runs, and connection with Lionel Messi on the field.",
      "Has won multiple La Liga and Champions League titles with Barcelona.",
      "Played a key role in Spain’s victories in the 2008 and 2012 Euros.",
      "Is considered one of the best full-backs of his generation."
    ]
  },
  {
    firstName: "Fabian",
    lastName: "Ruiz",
    nationality: "Spain",
    age: 28,
    clues: [
      "A talented midfielder known for his technical ability and vision.",
      "Made a name for himself at Real Betis before moving to Napoli.",
      "Has been linked with moves to top clubs in Europe, including PSG and others.",
      "Has represented Spain at various youth levels and made his senior debut recently.",
      "Is known for his passing range, positioning, and ability to contribute both defensively and offensively."
    ]
  },
  {
    firstName: "Raheem",
    lastName: "Sterling",
    nationality: "England",
    age: 29,
    clues: [
      "Made his professional debut at Liverpool before joining Manchester City.",
      "Has won multiple Premier League titles with Manchester City.",
      "Known for his explosive pace, dribbling, and ability to score goals.",
      "Was a key player for England in their 2020 Euro semi-final run.",
      "Moved to Chelsea in 2022 to continue his Premier League career."
    ]
  },
  {
    firstName: "Harry",
    lastName: "Kane",
    nationality: "England",
    age: 30,
    clues: [
      "Is Tottenham Hotspur's all-time top scorer.",
      "Has been one of the Premier League's most prolific goal scorers for several years.",
      "Has represented England in multiple major tournaments, including the 2018 World Cup.",
      "Is known for his ability to score goals with both feet and his head.",
      "Has been linked with moves to top clubs like Bayern Munich and Manchester United."
    ]
  },
  {
    firstName: "Bruno",
    lastName: "Fernandes",
    nationality: "Portugal",
    age: 29,
    clues: [
      "Joined Manchester United in January 2020 and quickly became a key player.",
      "Is known for his creativity, passing, and ability to score long-range goals.",
      "Has been Manchester United's captain on several occasions.",
      "Played a major role in Portugal's Euro 2020 campaign.",
      "Has a penchant for scoring goals from midfield and creating assists."
    ]
  },
  {
    firstName: "Sadio",
    lastName: "Mane",
    nationality: "Senegal",
    age: 31,
    clues: [
      "Was a key figure in Liverpool's recent success, including their Champions League and Premier League titles.",
      "Known for his pace, dribbling, and ability to finish in tight spaces.",
      "Moved to Bayern Munich in 2022 after 6 years at Liverpool.",
      "Helped Senegal win the 2021 Africa Cup of Nations.",
      "Was a fan favorite at Liverpool for his work ethic and commitment on the pitch."
    ]
  },
  {
    firstName: "Jack",
    lastName: "Harrison",
    nationality: "England",
    age: 27,
    clues: [
      "Made a name for himself at Leeds United in the Premier League.",
      "Known for his direct running, crossing ability, and hard work on the left wing.",
      "Has been an important player in Leeds United's return to the Premier League.",
      "Spent part of his early career on loan from Manchester City before joining Leeds.",
      "Has represented England at youth levels."
    ]
  },
  {
    firstName: "Jadon",
    lastName: "Sancho",
    nationality: "England",
    age: 24,
    clues: [
      "Started his professional career at Manchester City before making a name for himself at Borussia Dortmund.",
      "Known for his flair, dribbling, and creativity on the wing.",
      "Joined Manchester United in 2021 for a big-money transfer.",
      "Has represented England in major tournaments, including the 2020 Euros.",
      "Was one of the brightest young talents in Europe before his move to the Premier League."
    ]
  },
  {
    firstName: "Raul",
    lastName: "Jiménez",
    nationality: "Mexico",
    age: 32,
    clues: [
      "Has been Wolverhampton Wanderers' main striker since his arrival in 2018.",
      "Known for his aerial ability, physicality, and clinical finishing.",
      "Suffered a serious head injury in 2020 but made a successful recovery.",
      "Has been a key player for Mexico in international tournaments like the Gold Cup and World Cup qualifiers.",
      "Helped Wolves secure a return to the Premier League with his goal-scoring ability."
    ]
  },
  {
    firstName: "James",
    lastName: "Maddison",
    nationality: "England",
    age: 27,
    clues: [
      "Has been one of Leicester City's standout players in recent years.",
      "Known for his creativity, set-piece expertise, and ability to score long-range goals.",
      "Represented England at youth levels and made his senior debut in 2019.",
      "Has been linked with moves to top Premier League clubs due to his impressive form.",
      "Is often the focal point of Leicester’s attacking play, with his ability to provide key passes."
    ]
  },
  {
    firstName: "Bukayo",
    lastName: "Saka",
    nationality: "England",
    age: 22,
    clues: [
      "A product of Arsenal's youth academy.",
      "Has quickly become one of the most exciting young talents in the Premier League.",
      "Known for his versatility, playing both as a winger and full-back.",
      "Was a key player for England in their Euro 2020 run to the final.",
      "Has consistently been one of Arsenal's top performers in recent seasons."
    ]
  },
  {
    firstName: "Dominic",
    lastName: "Calvert-Lewin",
    nationality: "England",
    age: 26,
    clues: [
      "Made a name for himself at Everton, becoming their main striker.",
      "Known for his heading ability, strength, and clinical finishing.",
      "Has been a regular in England's squad during international breaks.",
      "Was a standout performer for Everton during their 2020-2021 season.",
      "Has been a key figure in Everton's attack for several years."
    ]
  },
  {
    firstName: "Emiliano",
    lastName: "Martínez",
    nationality: "Argentina",
    age: 32,
    clues: [
      "Moved to Aston Villa in 2020 after an impressive stint at Arsenal.",
      "Helped Argentina win the 2021 Copa América, playing a crucial role in the final.",
      "Known for his shot-stopping ability, leadership, and penalty-saving prowess.",
      "Was pivotal in Villa’s rise in the Premier League after his arrival.",
      "Has been linked with a future move to some of Europe’s top clubs."
    ]
  },
  {
    firstName: "Leandro",
    lastName: "Trossard",
    nationality: "Belgium",
    age: 28,
    clues: [
      "Became a key player at Brighton & Hove Albion before moving to Arsenal in 2023.",
      "Known for his creativity, dribbling, and ability to score goals from wide positions.",
      "Has been a standout player for Belgium in international competitions.",
      "Was instrumental in helping Brighton finish in their best-ever Premier League position.",
      "Can play as a winger, attacking midfielder, or forward."
    ]
  },
  {
    firstName: "Aaron",
    lastName: "Ramsdale",
    nationality: "England",
    age: 25,
    clues: [
      "Joined Arsenal in 2021 after impressive spells at Sheffield United and Bournemouth.",
      "Has become Arsenal's first-choice goalkeeper and has been key to their defensive solidity.",
      "Known for his excellent shot-stopping ability, particularly with his quick reflexes.",
      "Was part of England’s squad in major international tournaments, including Euro 2020.",
      "Has been praised for his leadership and personality on the field."
    ]
  },
  {
    firstName: "James",
    lastName: "Ward-Prowse",
    nationality: "England",
    age: 29,
    clues: [
      "A one-club man for much of his career, playing for Southampton since his youth days.",
      "Known for his exceptional set-piece ability, particularly his free kicks.",
      "Has been Southampton’s captain and a key player in their midfield.",
      "Represents England at international level, making a significant impact in World Cup qualifiers.",
      "Regarded as one of the best English dead-ball specialists in recent years."
    ]
  },
  {
    firstName: "Ben",
    lastName: "White",
    nationality: "England",
    age: 26,
    clues: [
      "Joined Arsenal from Brighton & Hove Albion in 2021, becoming a key part of their defense.",
      "Versatile, can play as a central defender or right-back.",
      "Has been an important figure in Arsenal's defensive line, contributing to their defensive stability.",
      "Has represented England in major international tournaments, including Euro 2020.",
      "Known for his composure on the ball and strong defensive positioning."
    ]
  },
  {
    firstName: "Antoine",
    lastName: "Griezmann",
    nationality: "France",
    age: 32,
    clues: [
      "Started his career in La Liga with Real Sociedad before joining Atlético Madrid.",
      "Known for his work rate, versatility, and goal-scoring ability.",
      "Moved to Barcelona in 2019 before returning to Atlético Madrid on loan in 2021.",
      "Has been a key player for France, winning the 2018 World Cup.",
      "Has scored goals in key tournaments, including the UEFA European Championship."
    ]
  },
  {
    firstName: "Jules",
    lastName: "Koundé",
    nationality: "France",
    age: 25,
    clues: [
      "Joined Barcelona from Sevilla in 2022, becoming one of their most coveted defenders.",
      "Known for his strong defensive abilities, leadership, and ball-playing skills.",
      "Has been a consistent performer for France at both the club and international levels.",
      "Was part of the Sevilla team that won the UEFA Europa League multiple times.",
      "Can play as a center-back or right-back."
    ]
  },
  {
    firstName: "Iker",
    lastName: "Muniain",
    nationality: "Spain",
    age: 31,
    clues: [
      "A product of Athletic Bilbao's youth academy.",
      "Known for his pace, dribbling, and playmaking ability.",
      "Has been a key player for Athletic Bilbao for over a decade.",
      "Has represented Spain at various youth levels, though never a regular in the senior team.",
      "Spent his entire career at Athletic Bilbao, earning the club captaincy."
    ]
  },
  {
    firstName: "David",
    lastName: "Silva",
    nationality: "Spain",
    age: 38,
    clues: [
      "Spent a significant portion of his career at Manchester City before joining Real Sociedad in 2020.",
      "Known for his excellent vision, passing, and playmaking skills in midfield.",
      "Has won multiple Premier League titles with Manchester City.",
      "Played a key role in Spain's successes in the 2008 and 2012 European Championships, as well as the 2010 World Cup.",
      "One of the best Spanish midfielders of his generation."
    ]
  },
  {
    firstName: "Frenkie",
    lastName: "de Jong",
    nationality: "Netherlands",
    age: 26,
    clues: [
      "Joined Barcelona from Ajax in 2019 for a significant transfer fee.",
      "Known for his dribbling, vision, and ability to control the midfield.",
      "Has been one of the most important midfielders for both Barcelona and the Netherlands.",
      "Was a key figure in Ajax's 2018-2019 Champions League run.",
      "Has the ability to break defensive lines with his passing and dribbling."
    ]
  },
  {
    firstName: "Ansu",
    lastName: "Fati",
    nationality: "Spain",
    age: 21,
    clues: [
      "A product of Barcelona's La Masia academy.",
      "Became Barcelona's youngest-ever goal scorer in a competitive match at the age of 16.",
      "Known for his explosive pace, dribbling, and goal-scoring ability.",
      "Has faced multiple injury setbacks but remains one of the brightest young talents in Spain.",
      "Represents Spain internationally and has made appearances in major tournaments."
    ]
  },
  {
    firstName: "Gerard",
    lastName: "Piqué",
    nationality: "Spain",
    age: 36,
    clues: [
      "Started his career at Barcelona’s youth academy before making a name for himself at Manchester United.",
      "Returned to Barcelona in 2008, where he became a central figure in their defense.",
      "Has won multiple La Liga titles, UEFA Champions League trophies, and the 2010 World Cup with Spain.",
      "Known for his leadership, aerial ability, and composure on the ball.",
      "Announced his retirement from football in 2022, leaving a lasting legacy at Barcelona."
    ]
  },
  {
    firstName: "Vinícius",
    lastName: "Jr.",
    nationality: "Brazil",
    age: 23,
    clues: [
      "Joined Real Madrid from Flamengo in 2018 as one of the most highly-rated young talents in Brazil.",
      "Known for his incredible pace, dribbling, and flair on the ball.",
      "Has been one of Real Madrid’s key attacking players, especially in their recent Champions League triumphs.",
      "Represents Brazil internationally and was part of their squad in the 2022 World Cup.",
      "Has improved his goal-scoring ability, becoming more of a complete forward."
    ]
  },
  {
    firstName: "Raúl",
    lastName: "Albiol",
    nationality: "Spain",
    age: 38,
    clues: [
      "Spent much of his career at Valencia and Real Madrid before moving to Villarreal.",
      "A highly experienced central defender known for his leadership and defensive skills.",
      "Has been a key figure in Villarreal's defense and helped them win the 2021 Europa League.",
      "Has represented Spain in international tournaments, including the 2010 World Cup and 2012 European Championship.",
      "Has played for top clubs in Spain for over 15 years."
    ]
  },
  {
    firstName: "Álvaro",
    lastName: "Morata",
    nationality: "Spain",
    age: 31,
    clues: [
      "Played for both Real Madrid and Atlético Madrid in his La Liga career.",
      "Known for his movement off the ball, heading ability, and poaching instincts.",
      "Had a stint in the Premier League with Chelsea before returning to Atlético Madrid.",
      "Has represented Spain in multiple European Championships and World Cups.",
      "A key player for Atlético Madrid in their La Liga title-winning campaign."
    ]
  },
  {
    firstName: "Paulo",
    lastName: "Dybala",
    nationality: "Argentina",
    age: 29,
    clues: [
      "A product of the Instituto youth system in Argentina before moving to Europe.",
      "Had a successful spell at Juventus, where he won multiple Serie A titles.",
      "Known for his dribbling, vision, and flair on the ball.",
      "Joined Roma in 2022 and has been a key player for them.",
      "Has been a consistent performer for Argentina, winning the 2021 Copa América."
    ]
  },
  {
    firstName: "Lautaro",
    lastName: "Martínez",
    nationality: "Argentina",
    age: 26,
    clues: [
      "Joined Inter Milan in 2018, becoming one of their key attacking players.",
      "Known for his work rate, physicality, and finishing ability.",
      "Formed a deadly partnership with Romelu Lukaku during their 2020-2021 Serie A title-winning campaign.",
      "Played an important role in Argentina's 2022 World Cup victory.",
      "Has a strong aerial presence and a knack for scoring important goals."
    ]
  },
  {
    firstName: "Ciro",
    lastName: "Immobile",
    nationality: "Italy",
    age: 33,
    clues: [
      "Has been Lazio's main striker for several years and is their all-time top scorer.",
      "Known for his clinical finishing, movement off the ball, and goal-scoring instincts.",
      "Won the Serie A Golden Boot multiple times.",
      "Has represented Italy in the 2016 UEFA European Championship and the 2020 UEFA Euros.",
      "Has been consistently among the top goal scorers in Serie A."
    ]
  },
  {
    firstName: "Nicolo",
    lastName: "Barella",
    nationality: "Italy",
    age: 27,
    clues: [
      "A key midfielder for Inter Milan since joining from Cagliari in 2019.",
      "Known for his high work rate, passing, and vision in the midfield.",
      "Played a crucial role in Italy’s Euro 2020 triumph, providing key assists and contributions.",
      "A box-to-box midfielder with the ability to control games.",
      "Has been a key player for both Inter Milan and Italy over the past few years."
    ]
  },
  {
    firstName: "Zlatan",
    lastName: "Ibrahimović",
    nationality: "Sweden",
    age: 42,
    clues: [
      "Has had an illustrious career playing for top clubs in multiple countries, including Barcelona, PSG, and AC Milan.",
      "Known for his incredible self-confidence, physical presence, and acrobatic goals.",
      "Returned to AC Milan in 2020 and has been an important leader for the team.",
      "Won Serie A titles with both Juventus and AC Milan.",
      "Has scored goals in nearly every league he’s played in, with a flair for dramatic moments."
    ]
  },
  {
    firstName: "Dusan",
    lastName: "Vlahović",
    nationality: "Serbia",
    age: 23,
    clues: [
      "A rising star who joined Juventus from Fiorentina in 2022 for a significant transfer fee.",
      "Known for his powerful shooting, heading ability, and physical strength.",
      "Has been Juventus' main goal-scoring threat since his arrival.",
      "Previously had a breakout season at Fiorentina, finishing as one of Serie A's top goal scorers.",
      "Has been part of Serbia's national team and represented them in international competitions."
    ]
  },
  {
    firstName: "Theo",
    lastName: "Hernández",
    nationality: "France",
    age: 26,
    clues: [
      "Joined AC Milan in 2019 and quickly became one of the most attacking full-backs in Europe.",
      "Known for his explosive pace, dribbling, and ability to score goals from the left-back position.",
      "Was crucial in AC Milan's Serie A title win in the 2021-2022 season.",
      "Has represented France internationally and was part of their squad for major tournaments.",
      "Has the ability to track back defensively while providing attacking support on the left wing."
    ]
  },
  {
    firstName: "Milan",
    lastName: "Škriniar",
    nationality: "Slovakia",
    age: 29,
    clues: [
      "A key central defender for Inter Milan, known for his strength, leadership, and defensive intelligence.",
      "Has been a regular in Inter Milan’s defense since joining the club in 2017.",
      "Played a key role in helping Inter Milan win Serie A in the 2020-2021 season.",
      "Represents Slovakia internationally, contributing to their defense in international tournaments.",
      "Has been linked with moves to other top European clubs due to his strong performances."
    ]
  },
  {
    firstName: "Henrikh",
    lastName: "Mkhitaryan",
    nationality: "Armenia",
    age: 34,
    clues: [
      "Had a successful stint at Borussia Dortmund and Manchester United before joining Inter Milan in 2022.",
      "Known for his vision, passing, and ability to score goals from midfield.",
      "Played a key role in Inter Milan’s 2021-2022 Serie A title-winning campaign.",
      "Is the captain of the Armenian national team and has played in major international tournaments.",
      "Has consistently been one of the best creative midfielders in Europe over the years."
    ]
  },
  {
    firstName: "Romelu",
    lastName: "Lukaku",
    nationality: "Belgium",
    age: 30,
    clues: [
      "Had two stints at Inter Milan, first between 2019-2021 and then returning on loan in 2022.",
      "Known for his strength, pace, and goal-scoring ability.",
      "Played a key role in Inter Milan’s 2021 Serie A title win, scoring goals and providing assists.",
      "Has been Belgium’s main striker for many years, featuring in multiple World Cups and European Championships.",
      "Previously played for top clubs like Chelsea, Everton, and Manchester United."
    ]
  }
];

export default playersData;
