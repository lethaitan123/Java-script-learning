// //strings
// console.log("hello wolrd")

// let email = "tan.lethaitan@gmaill.com"

// console.log(email)

// // string cconcatenation
// let firstname = 'Thai';
// let lastname = 'Tan';

// let fullname =firstname+lastname;

// console.log(fullname);
// //getting characters
// console.log(fullname[0]);
// //string length
// console.log('length',fullname.length)
// //string method 
// let fullname1 = fullname.toUpperCase()
// console.log(fullname1)
// let result = fullname.toLocaleLowerCase()
// console.log(result,fullname,fullname1)

// let index   = email.indexOf('t')
// console.log('index',index )


//common string methods 31:34 #2
// let email = "tan.lethaitan@gmail.com";
// let index   = email.indexOf('t');
// console.log('index',index );


// let result =email.lastIndexOf('a');
// console.log(result);

// let result =email.slice(0,4) ;
// // // pick each of word on strings;
// // console.log(result);

// let result =email.substring(2,4);

// let result = email.replace('m','w')

// let result = email.replace('n','w')

// console.log('result',result)

// let radius = 10
// const pi =3.14

// // console.log(radius, pi);

// // math operators +,-,*,**,%

// let result =radius % 3
// console.log(result)


// radius /= 2;
// console.log(radius)

// let likes = 10
// let name1 = 'tanlee';
// let title = 'title';
// let author = 'tan'
// let result = 'the blog has' + likes + "likes";
// console.log(result)


// // template string
// let result = `The blog called ${name1} by AUTHOR has ${likes} likes`
// console.log(result)
// //create html templates
// let html=`
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span> This blog has ${likes} likes </span>

// `;

// console.log(html)

// let ninjas = ['Duy','Tan','Son']

// // console.log(ninjas[0])

// let ages = [20,24,30,31]

// console.log(ages[2])
// let random = ['tan','duy','son',1,2]
// console.log(random)

// console.log(ninjas.length)

// let result = ninjas.join('-');

// let result = ninjas.indexOf('Tan')
// let result = ninjas.push('ken','chuong')
// // let result = ninjas.push('ken')
//     console.log(ninjas)
// result = ninjas.pop()
// console.log(ninjas)

//   console.log(true, false)
  
  let email = 'tan.lethaitan@gmail.com' 
  let names = ['tan','son']
  let result = email.includes('@')
  let result1  = names.includes('duy')
//   console.log(result1)
// comparison operatorsc  

let age = 25;

// console.log(age == 25)
// console.log(age !=30) 
let name1 = 'tan'

// console.log(name1 == 'tan')
// console.log(name1 >= 'tnaleee')
// console.log(name1 >= 'ThaiTan')

//  loose comparison (different types can still be qual)

console.log(age == 25);
console.log(age == '25')
// strict comparation
console.log(age === 25)
console.log(age === '25')
console.log(age !== 25)
console.log(age !== '25')
//type conversion
let score = '100'
// string => number
score = Number(score)
console.log(score+1)
console.log(typeof score)
// number => string
let number_string = Boolean('');
console.log(number_string,typeof number_string)
