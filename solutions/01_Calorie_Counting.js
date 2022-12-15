const fs = require('fs');

fs.readFile('./data/01_Calorie_Counting.txt', 'utf8', (error, data)=> {
    const arrayOfCaloriesPerElf = []
    let tempTotalCalories = 0;
    data.split('\n').forEach((e)=> {
        tempTotalCalories += Number(e)
        if(e === ''){
            arrayOfCaloriesPerElf.push(tempTotalCalories)
            tempTotalCalories = 0;
        }
    })
    const sortedArrayOfTotalCaloriesPerElf = arrayOfCaloriesPerElf.sort((a, b)=> b -a);
    console.log(sortedArrayOfTotalCaloriesPerElf.at(0))
    console.log(sortedArrayOfTotalCaloriesPerElf.at(0) + sortedArrayOfTotalCaloriesPerElf.at(1) + sortedArrayOfTotalCaloriesPerElf.at(2))
})