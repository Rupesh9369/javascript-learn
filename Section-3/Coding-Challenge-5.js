console.log(`hello`);

const clcAvg = (a, b, c) => (a + b + c) / 3;

console.log(clcAvg(3, 4, 5));

const socreIndia = clcAvg(999, 45, 67);
const socreUsa = clcAvg(888, 44, 666);
console.log(socreIndia , socreUsa);

const checkWinner = function chkWinner(india, usa) {
    if (usa >= 2 + india) {
        console.log(`INDIA is winner 🎉 (${socreIndia} vs. ${socreUsa})`);
        
        
    } else if(usa >= 2 * usa) {
        console.log(`USA is winner 🎉`);
    } else {
        console.log(`No One Wines 😥`)
    }

}
checkWinner(socreIndia,socreUsa);