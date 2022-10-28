
console.clear();
console.log('abbsddgeh');
console.log("Kathy");

console.clear();
console.log('abbsddgeh');
console.log("Kathy");

// 大括号代表作用域 code 2
{ 
  // code 1

  // code 1

}

let myName = "Kathy"
console.log(myName);

  {
    let myAge = 18
    myAge = 30
    const myName = "Kathy"
    console.log(myAge);
    console.log(myName);

  }
  console.log(myName);
  // console.log(myAge);
  

  {
  var income = 0
  console.log(income);
  }

  {
    let number = 10.01  //数字
    let notANumber = NaN //并不是一个数字
    let infinity = Infinity // 无限

    let unknown = undefined
    let empty = null
    console.log(empty);



    let boolTrue = true //type boolen
    let boolFalse = false 

    let string_1 = 'Kathy'
    let string_2 = "clm"
    let string_3 = `${string_1} ${string_2}`
    console.log(string_3);
  }

  {
    let number = 10
    console.log(10 == 10);
    console.log(10 === 10);
    let bool = true

    console.log(number === bool);
    console.log(bool == number);

    if (0) {
      console.log('good');
    } else {
      console.log('bad');
    }
    
    console.log(NaN == NaN);
    console.log(0 / 0);
    console.log(1 / 0);

    {
  // NaN 0 null undefined '' => false
      let statement = false
      if (statement){
        console.log('good ending');
      } else {
        console.log('bad ending');
      }
    }

      {
        console.clear ();
        let string_1 = 'Kathy " " \' '
        let string_2 = "clm '\\' "
        let string_3 = `${string_1} ${string_2}`
        console.log(string_1);
        console.log(string_2);
        const name = "clm"
        console.log("My name is " + name + " Age:");
        console.log("My name is", name , "Age:");
        // 上面两种是原来的用法，现在用下面的写法
        console.log(`My name is ${name} Age: `);
      }

  
  
   let a = 1 //number
   let c = true //true or false

   if (a == c){
    console.log('true');
   } else {
    console.log('false');
   }
  
   if (a === c){
    console.log('true');
   } else {
    console.log('false');
   }
   
   let g = 0
   console.log(g == false);
   console.log(g === false);

   console.log(NaN == NaN);
   console.log(NaN === NaN);
  }

  {
   console.log(typeof 1, 1);
   console.log(typeof "1", "1");

   console.log(1 + "3", typeof (1 + "3"));
   console.log("3" + 1, typeof ("3" + 1));
   console.log("" + 1, typeof ("" + 1));

   console.log(+"3", typeof (+"3"));
   console.log(1 + +"3", typeof(1 + +"3"));

   console.log(+"3A", typeof (+"3A"));
  }

  {
    console.log(1 + 3 - "2");
    console.log("234" - 56);
    console.log("234" - '34');
    console.log(1234 / "3");
    console.log(1234 * "3");
    console.log("1234" / 3);
    console.log('1234' * 3);
    console.log("1234" * "3");
    console.log("1234" / "3");
    console.log(1234 / 0);
    console.log("1234" / 0);
  }

  {
    console.log("3+ 1.001:", 3+1.0001);
    console.log("(3 *1000 + 1.001 *1000) / 1000:", (3 * 1000 + 1.001 * 1000) / 1000);
  }

  {
    const array = [4,5,6, 'Kathy', true, ['age', 18]]
    // const object = {}

    console.log(array);
    console.log(array [0]);
    console.log(array [1]);
    console.log(array [2]);
    console.log(array [3]);
    console.log(array [4]);
    console.log(array [5]);

    const object = {
      name: "Kathy",
      age: 18
    }
   
    const object2 = {
      "name": "Kathy",
      "age": 18
    }

    const object3 = {
      0: "Kathy",
      1: 18
    }

    console.log(object);
    console.log(object2);
    console.log(object3);
  }

  {
    const array = [4, 5, 6, 'Kathy', true, ['age', 18]]
    array [4] = 10
    console.log(array);
    array [6] = 1001
    array [600] = 1001
    console.log(array);

    const array_1 = [1, 2, 3]//定义数值
    const array_2 = new Array(100)//定义长度
    console.log(array_1.length);
    console.log(array_2.length);

    array_2.length = 0
    console.log(array_2);
    array_1.length = 2
    console.log(array_1);
    array_1.length = 3
    console.log(array_1);

    array_1[0] = undefined
    console.log(array_1);
  }

  {
    const person = {
      name: "Kathy",
      age: 18,
      1: 10086,
      2: 10010

    }
    console.log(person.name);
    console.log(person.age);
    console.log(person["name"]);
    console.log(person["age"]);
    console.log(person[1]);
    console.log(person[2]);

    // person.age = person.age + 3
    person.age += 3
    console.log(person);
  }

  {
    let a = 1
    let b = a
    console.log(`a:${a}, b:${b}`);
    b=2
    console.log(`a:${a}, b:${b}`);

    const person = {
      name : "Kathy",
      age : 18
    }
    const newPerson = person
    console.log(person,newPerson);
    
    newPerson.age =30
    console.log(person,newPerson);
  }