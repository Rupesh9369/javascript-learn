'use strict'
console.log(`HEllo Coders 🤡🤡🤡`);

const TeamA = 'India Team' 
const TeamB = 'USA team';

const IndiaFIRST_MATCH_SCORE = 96;
const IndiaSECOND_MATCH_SCORE = 108;
const IndiaTHIRD_MATCH_SCORE = 99;

// const usaFIRST_MATCH_SCORE = 45;
// const usaSECOND_MATCH_SCORE = 56;
// const usaTHIRD_MATCH_SCORE = 106;

const usaFIRST_MATCH_SCORE = 96;
const usaSECOND_MATCH_SCORE = 108;
const usaTHIRD_MATCH_SCORE = 99;


const india_Total_Score = IndiaFIRST_MATCH_SCORE + IndiaSECOND_MATCH_SCORE + IndiaTHIRD_MATCH_SCORE;

const usa_Total_Score =
    usaFIRST_MATCH_SCORE + usaSECOND_MATCH_SCORE + usaTHIRD_MATCH_SCORE;
  
const india_avg = india_Total_Score / 3;
const usa_avg = usa_Total_Score / 3;
// const both_avg = india_avg usa_avg;

const lessThan = india_Total_Score < usa_Total_Score;
const bigThan = india_Total_Score > usa_Total_Score;



console.log(lessThan,india_Total_Score,bigThan,usa_Total_Score)

if (lessThan && big) {
    console.log(`Both Team Average is same`)
} else {
    console.log(`Winner Is ${TeamA}`);
    
} 
const draw = true;
console.log(lessThan,bigThan)

if (!lessThan && !bigThan && draw) {
    console.log('Match is Draw 🤡');
} else {
      console.log("Match is NOTDraw 🤡");
    
}


const team1 = (99 + 12 + 90) / 3;
const team2 = (99 + 12 + 91) / 3;

if (team1 < team2) {
    console.log('INDIA is Win 🏆');
} else if (team2 > team1) {
     console.log("USA is Win 🏆");
} else if (team1 === team2) {
     console.log("Match is Draw 🏆");
} else {
     console.log("india is Win_n 🏆");
}