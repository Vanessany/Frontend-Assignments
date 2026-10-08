const score=[40,10,55,95,1,23,76,88,15,100];
let total=0;
for(const item of score){
    console.log(item)
    total+=item;
}
console.log(total);
const len=score.length
let average=total/len
console.log(average)
employee={Name:'Marilyn',department:'HR',role:'PA',Status:'active'};
console.log(`${employee.Name} works in ${employee.department} as a ${employee.role} and is ${Status}`)