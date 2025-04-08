import{_ as w,p as G,c as u,a as t,g as _,d as m,F as v,r as P,h as k,t as o,i as b,f as i,n,j as g,k as y,T as p,e as f}from"./index-BEsjBPbV.js";import{A as N}from"./autoInput-C2u_m947.js";const T={components:{AutocompleteInput:N},data(){return{players:G,correctPlayer:{},userGuess:"",guessHistory:[],gameWon:!1,filteredSuggestions:[]}},computed:{playerNames(){return this.players.map(r=>`${r.name}`)}},methods:{startNewGame(){this.correctPlayer=this.players[Math.floor(Math.random()*this.players.length)],this.userGuess="",this.guessHistory=[],this.gameWon=!1,this.filteredSuggestions=[]},checkGuess(){if(this.gameWon)return;const r=this.players.find(e=>e.name.toLowerCase()===this.userGuess.toLowerCase());r&&(this.guessHistory.unshift(r),r.name===this.correctPlayer.name&&(this.gameWon=!0),this.userGuess="",this.filteredSuggestions=[])},getMatchClass(r,e){return r===e?"match":"wrong"},getNumberClass(r,e){return r===e?"match":"higher-lower"},getTrophyClass(r,e){return r===e?"match":r>e||r<e?"higher-lower":"wrong"},getHigherLowerText(r,e){return r===e?"✅":r>e?"⬇️":"⬆️"}},mounted(){this.startNewGame()}},x={class:"game-container"},H={key:1,class:"guess-table"},L={class:"name"},S={key:2,class:"winner"};function V(r,e,d,c,l,a){const h=b("AutocompleteInput");return i(),u("div",x,[e[4]||(e[4]=t("h1",null,"Guess the Football Player",-1)),l.gameWon?m("",!0):(i(),_(h,{key:0,modelValue:l.userGuess,"onUpdate:modelValue":e[0]||(e[0]=s=>l.userGuess=s),suggestions:a.playerNames,onSubmitted:a.checkGuess},null,8,["modelValue","suggestions","onSubmitted"])),l.guessHistory.length>0?(i(),u("div",H,[e[2]||(e[2]=t("div",{class:"guess-row header"},[t("div",null,"Name"),t("div",null,"Nationality"),t("div",null,"Club"),t("div",null,"Position"),t("div",null,"Goals"),t("div",null,"Assists"),t("div",null,"League Titles"),t("div",null,"Champions Leagues")],-1)),(i(!0),u(v,null,P(l.guessHistory,(s,C)=>(i(),u("div",{key:C,class:"guess-row"},[t("div",L,o(s.name),1),t("div",{class:n(a.getMatchClass(s.nationality,l.correctPlayer.nationality))},o(s.nationality),3),t("div",{class:n(a.getMatchClass(s.current_club,l.correctPlayer.current_club))},o(s.current_club),3),t("div",{class:n(a.getMatchClass(s.position,l.correctPlayer.position))},o(s.position),3),t("div",{class:n(a.getNumberClass(s.goals,l.correctPlayer.goals))},o(s.goals)+" ("+o(a.getHigherLowerText(s.goals,l.correctPlayer.goals))+")",3),t("div",{class:n(a.getNumberClass(s.assists,l.correctPlayer.assists))},o(s.assists)+" ("+o(a.getHigherLowerText(s.assists,l.correctPlayer.assists))+")",3),t("div",{class:n(a.getTrophyClass(s.trophies.league_titles,l.correctPlayer.trophies.league_titles))},o(s.trophies.league_titles)+" ("+o(a.getHigherLowerText(s.trophies.league_titles,l.correctPlayer.trophies.league_titles))+")",3),t("div",{class:n(a.getTrophyClass(s.trophies.champions_leagues,l.correctPlayer.trophies.champions_leagues))},o(s.trophies.champions_leagues)+" ("+o(a.getHigherLowerText(s.trophies.champions_leagues,l.correctPlayer.trophies.champions_leagues))+")",3)]))),128))])):m("",!0),l.gameWon?(i(),u("div",S,[e[3]||(e[3]=k(" 🎉 Correct! The player was ")),t("strong",null,o(l.correctPlayer.name),1),t("button",{onClick:e[1]||(e[1]=(...s)=>a.startNewGame&&a.startNewGame(...s))},"Play Again")])):m("",!0)])}const A=w(T,[["render",V],["__scopeId","data-v-28e95ede"]]),M={name:"footballdleView",components:{footdle:A},setup(){const r=f(!1),e=f(!1);return{gameStarted:r,showGame:e,startGame:()=>{r.value=!0,setTimeout(()=>{e.value=!0},1e3)}}}},W={class:"container"},F={key:"welcome",class:"welcome-container"};function I(r,e,d,c,l,a){const h=b("footdle");return i(),u(v,null,[t("div",W,[g(p,{name:"fade",mode:"out-in"},{default:y(()=>[c.gameStarted?m("",!0):(i(),u("div",F,[e[1]||(e[1]=t("h1",{class:"title"},"The Footballdle",-1)),e[2]||(e[2]=t("p",{class:"rules-heading"},"Here are the rules:",-1)),e[3]||(e[3]=t("ul",{class:"rules-list"},[t("li",null,"Firstly you have to blind guess the football player."),t("li",null,"After each guess you answer will be displayed with 6 characteristics of a player"),t("li",null,"You will be able to see what characteristics match the correct player."),t("li",null,"Use your football knowledge to guess as fast as possible!")],-1)),t("button",{class:"start-btn",onClick:e[0]||(e[0]=(...s)=>c.startGame&&c.startGame(...s))},"Start Game")]))]),_:1})]),g(p,{name:"slide"},{default:y(()=>[c.showGame?(i(),_(h,{key:"game"})):m("",!0)]),_:1})],64)}const U=w(M,[["render",I],["__scopeId","data-v-4582382e"]]);export{U as default};
