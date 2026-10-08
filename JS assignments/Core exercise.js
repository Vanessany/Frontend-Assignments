const score=[40,10,55,95,1,23,76,88,15,100];
let total=0;
for(const item of score){
    console.log(item)
    total+=item;
    console.log(total)

}
console.log(total);
const len=score.length
let average=total/len
console.log(average)
const employee={Name:'Marilyn',department:'HR',role:'PA',Status:'active'};
console.log(`${employee.Name} works in ${employee.department} as a ${employee.role} and is ${employee.Status}`)

const names=['Amma','Dayvi','Berthie','Nicole']
for(let i=0;i<names.length;i++){
    console.log(i+1+'.'+names[i])
}

function checker(number){
    if(number%2===0){
        return'Even'
    }else{
        return'Odd'
    }
}
const type=checker(3)
console.log(type)
