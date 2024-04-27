// N1

// function sum(x, y) {
//   console.log(x + y);
// }
// sum(3, 2);

// sum(-3, -6);

// sum(7, 3);

// N2
// function toSekunds(minutes) {
//   console.log(minutes * 60);
// }
// toSekunds(5);

// N3
// function nextInteger(int) {
//   console.log(int + 1);
// }
// nextInteger(-3);

// N4
// function uchburchakYuzi(asos, balandlik) {
//   console.log((asos * balandlik) / 2);
// }
// uchburchakYuzi(7, 4);

// N5
// function ageToDays(age) {
//   console.log(age * 365);
// }
// ageToDays(65);

// N6
// function kubi(kub) {
//   console.log(kub * kub * kub);
// }
// kubi(5);

// N7
// function firstElement(arr) {
//   console.log();
// }
// firstElement([1, 2, 3]);

// N8
// function power(x, y) {
//   console.log(x * y);
// }
// power(230, 10);

// N9
// function hourToSekunds(hour) {
//   console.log(hour * 3600);
// }
// hourToSekunds(10);

// N10
// function uchinchiTomon(tomon1, tomon2) {
//   console.log(tomon1 + tomon2 - 1);
// }
// uchinchiTomon(8, 10);

// N11
// function qoldiq(son1, son2) {
//   console.log(son1 % son2);
// }
// qoldiq(1, 3);

// N12
// function turtburchakYuzi(boyi, eni) {
//   console.log(boyi * eni);
// }
// turtburchakYuzi(6, 7);

// N13
// function stringQoshish(a) {
//   console.log(`something ${a} `);
// }
// stringQoshish("Bob Jane");

// N14
// function kubi(kub) {
//   console.log(kub * kub);
// }
// kubi(5);

// N15
// function noldan(raqam) {
//   if (raqam <= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// noldan(0);

// N16
// function ichkiBurchaklar(n) {
//   console.log((n - 2) * 180);
// }
// ichkiBurchaklar(3);

// N17
// function ochkolar(x, y) {
//   console.log(x * 2 + y * 3);
// }
// ochkolar(2, 5);

// N18
// function stringQoshish(a) {
//   console.log(`Edabit ${a} `);
// }
// stringQoshish("Bob Jane");

// N19
// function ikkitaSon(x, y) {
//   if (x + y < 100) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// ikkitaSon(19, 21);

// N20
// let son = [];
// function printArray(a) {
//   for (let i = 1; i <= a; i++) {
//     son.push(i);
//   }
//   console.log(son);
// }
// printArray(4);
// printArray(10);

// N21
// function oyoqlar(a, b, c) {
//   console.log(a * 2 + b * 4 + c * 4);
// }
// oyoqlar(2, 4, 6);

// N22

// function and(a, b) {
//   if (a == true && b == true) {
//     console.log(true);
//   } else if (a == true && b == false) {
//     console.log(false);
//   } else if (a == false && b == true) {
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// }

// and(true, true);
// and(true, false);
// and(false, true);
// and(false, false);

// N23

// function equal(a, b) {
//   if (a == b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// equal(3, 3);
// equal(3, 4);

// N24

// function footBall(a, b, c) {
//   console.log(a * 3 + b * 1 + c * 0);
// }

// footBall(3, 4, 5);

// N25

// function hourMinuts(a, b) {
//   console.log(a * 3600 + b * 60);
// }

// hourMinuts(4, 5);

// N26

// let num = 0;

// function tub(a) {
//   for (let i = 1; i <= a; i++) {
//     if (a % i == 0) {
//       num += 1;
//     }
//   }
//   if (num == 2) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// tub(7);
// tub(8);

// N27

// function type(a, b) {
//   if (a === b) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// type(1, 1);
// type(1, "1");

// N28

// function changeType(bool) {
//   console.log(bool.toString());
// }
// changeType(true);
// changeType(false);

// console.log("boolean holati " , true);

// N29

// let newArrow = (a) => {
//   console.log(a);
// };

// newArrow("Assalomu alaykum Nabiyev");

// N30

// function fream(a, b) {
//   console.log(a * 60 * b);
// }

// fream(1, 1);
// fream(10, 1);
// fream(10, 25);

// N31

// function calc(a) {
//   let numbers = a.split(/[\+\-\*\/]/);
//   let operators = a.match(/[\+\-\*\/]/)[0];

//   let number1 = +numbers[0];
//   let number2 = +numbers[1];

//   let result;
//   switch (operators) {
//     case "+":
//       result = number1 + number2;
//       break;
//     case "-":
//       result = number1 - number2;
//       break;
//     case "*":
//       result = number1 * number2;
//       break;
//     case "/":
//       result = number1 / number2;
//       break;
//   }
//   console.log(result);
// }

// calc("13+16");
// calc("16-13");
// calc("2*23");
// calc("14/7");

// N32

// function equalTen(a, b) {
//   if (a == 10 || b == 10) {
//     console.log(true);
//   } else if (a + b == 10) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// equalTen(1, 9);
// equalTen(1, 10);
// equalTen(9, 9);

// N33

// function litr(a) {
//   if (a >= 10) {
//     console.log(a * 10);
//   } else {
//     console.log(100);
//   }
// }

// litr(15);
// litr(23.5);
// litr(3);

// N34

// function bigNumber(a, b) {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }
// bigNumber(1, 9);
// bigNumber(1, 0);
// bigNumber(-1, 0);

// N35

// function massiv(a, b) {
//   console.log([a, b]);
// }

// massiv(3, 6);

// N36

// function stringEqual(a, b) {
//   if (a.length == b.length) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// stringEqual("AB", "CD");
// stringEqual("farhod", "nazarov");
// stringEqual("adfa", "fadsfdafdsfda");

// N37

// function stringEqual(a) {
//   if (a.length == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// stringEqual("");
// stringEqual("farhod");
// stringEqual("  ");

// N38

// function bolinsin100(a) {
//   if (a % 5 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// bolinsin100(15);
// bolinsin100(3);
// bolinsin100(18);

// N39;

// function bolinsin100(a) {
//   if (a % 100 == 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// bolinsin100(400);
// bolinsin100(30);
// bolinsin100(180);

// N41
// function bolinsin(x, y) {
//   if (x / y) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// bolinsin(98, 7);
// bolinsin(85, 4);
