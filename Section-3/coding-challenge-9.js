console.log(`Output : `);

const arr1 = [17, 21, 23];
const arr2 = [12,5,-5,0,4];

console.log(`...${arr1[0]}°C,...${arr1[1]}°C,...${arr1[2]}°C,`);
const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++){
        // console.log(`hey ${i}`)
        str = str + `${arr[i]}°C in ${ i + 1} days ... `;
        }
    console.log('... '+str);
}
printForecast(arr1)
