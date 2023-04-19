function CalorieCounter(input){
    if (input===''){
        return 0;
    }
    const singleElf = input.split('\n')
    const elvesStrArray=singleElf.map((elf) => elf.split('\n'))
    const elvesArray=elvesStrArray.map((foodItem) => Number(foodItem))
    console.log(elvesStrArray);
    const ElvesTotal = elvesArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
      );
      console.log(ElvesTotal);

    return ElvesTotal
}
module.exports = CalorieCounter;