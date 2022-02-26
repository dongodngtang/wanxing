interface Worker{
    name:string;
    age:number;
    email:string;
    salary:number;
}

interface Student{
    name:string;
    age:number;
    email:string;
    grade:number;
}


type commonKeys =  Extract<keyof Worker,keyof Student>
//  提炼相同属性 name,age,email

type excludeKeys = Exclude<keyof Worker,keyof Student>
// 抽取不同属性 salary

// Partial<> Required<>
// Pick<> Omit<>