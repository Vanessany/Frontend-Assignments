const employe={name:'Akos',score:50};
const employee2={name:'Jane',score:100};
const employee3={name:'Sammy',score:0};
const employee4={name:'Shiloh',score:80};
const employee5={name:'Godellena',score:70};
const employees=[employe,employee2,employee3,employee4,employee5];

// for(const item of employees){
//     console.log(item.name+':'+item.score)
// }


function getPerformance(employee){
    if(employee.score>=80&&employee.score<=100){
        return'Excellent'
    }else if(employee.score>=60&&employee.score<=79){
        return'Good'
    }else if(employee.score>=50&&employee.score<=59){
        return'Average'
    }else{
        return'Needs Improvement'
    }
}
for(const item of employees){
  const results= getPerformance(item)
   console.log(item.name+':'+item.score+'-'+results)   
}

// for(let i=0;i<employees.length;i++){
//     getPerformance(employees[i])
// }

// let i=0
// while(i<employees.length){
//     getPerformance(employees[i])
//     i++
// }
