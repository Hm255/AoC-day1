function CalorieCounter(input){
   
    let singleElf = input.split('\n')
    const elvesArray=singleElf.map((elf) => elf.split('\n'))
    console.log(elvesArray[0]);
    if (input===''){
        return 0;
    }
    return Number(input);
}
module.exports = CalorieCounter;