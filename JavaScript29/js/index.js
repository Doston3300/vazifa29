// const number = Number(prompt('son kiriting'));
// switch (number) {
//     case 1:
//         console.log('dushanba')
//         break;

//     case 2:
//         console.log('seshanba')
//         break;

//     case 3:
//         console.log('chorshanba')
//         break;

//     case 4:
//         console.log('payshanba')
//         break;

//     case 5:
//         console.log('juma')
//         break;

//     case 6:
//         console.log('shanba')
//         break;

//     case 7:
//         console.log('yakshanba')
//         break;
//     default:
//         console.log('raqam kiriting')
//         break;
// }

// const son = 34.33;


// son > 34.33 ? 'uzbekiston aholisi urtachadan yuqori' : 'uzbekiston aholisi urtachadan pas'






// vazifa_2
// function number(son) {
//     if (son % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(number(20))



// function number(son1, son2, son3) {
//     if (son1, son2, son3) {
//         return (son1 + son2 + son3) / 3
//     }
// }
// console.log(number(30, 20, 10))




// vazifa_3

// kubini chiqarish

// let num = +prompt('son kiriting')
// function powerA3(a) {
//     return Math.pow(a, 3)
// }
// alert(powerA3(num))




// uzini darajasini chiqarish

// function main(a, b, c) {
//     return `son1  ${Math.pow(a,a)}    son2  ${Math.pow(b,b)}    son3  ${Math.pow(c,c)}`
// }
// alert(main(1, 2, 3))




//  vazifa _1

// let group1_1 = +prompt('1 sonni kiriting');
// let group1_2 = +prompt('2 sonni kiriting');
// let group1_3 = +prompt('3 sonni kiriting');
// let group2_1 = +prompt('4 sonni kiriting');
// let group2_2 = +prompt('5 sonni kiriting');
// let group2_3 = +prompt('6 sonni kiriting');
// // let result1 = (group1_1 + group1_2 + group1_3);
// // let result2 = (group2_1 + group2_2 + group2_3);

// let calcAvg1 = (group1_1 + group1_2 + group1_3);
// console.log(calcAvg1);
// let calcAvg2 = (group2_1 + group2_2 + group2_3);
// console.log(calcAvg2);
// // let result1 = (calcAvg1);
// // let result2 = (calcAvg1);


// if (calcAvg1 > calcAvg2) {
//     console.log('birinchi kamanda yutdi')
// } else if (calcAvg1 === calcAvg2) {
//     console.log('teng')
// } else {
//     console.log('ikkinchi kamanda yutdi')
// }



//  vazifa_2

// let a = +prompt('sonni kiriting');

// function Studentsnumber(student) {
//     let child = 2500;
//     return student / child * 100;
// }

// console.log(Studentsnumber(a), '%')



const title = document.querySelector('.title');

const title_text = document.querySelector('.title_text');

const btn = document.querySelector('.btn');
const menu__bag = document.querySelector('.menu__bag');
const close = document.querySelector('.close');

btn.addEventListener('click', function() {
    menu__bag.classList.toggle('extra')
})


close.addEventListener('click', function() {
    menu__bag.classList.toggle('cml')
})