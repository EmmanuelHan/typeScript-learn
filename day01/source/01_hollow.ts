console.log("Hollo Ts")


const obj = {width: 70, height: 80}
const area = obj.width * obj.height

// 类型定义
interface User {
    id: string;
    name: string;
    age: number;
}

// 声明一个User
const user: User = {
    id: '1',
    name: 'xiaoming',
    age: 10,
    // date:'2022-11-22' //当试图声明一个没有定义的属性时，会报错
}
console.log('声明一个对象', user.name);

class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const userAccount: UserAccount = new UserAccount('xiaoming', 10);
console.log('面对对象编程', userAccount.name);

// 定义函数
function deleteUser(user: User) {
}

function getUser(): User {
    const user: User = {
        id: '1',
        name: 'xiaoming',
        age: 10,
    }
    return user;
}


type isOpen = false | true;
type windowsState = 'open' | 'close' | 'minimized';


interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}



