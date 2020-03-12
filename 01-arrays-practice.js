//STEP 1
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club'];
// console.log(movies[1]);
//STEP 2
// let movies = new Array(5);
// movies[0] = 'Star Wars: A New Hope';
// movies[1] = 'Lord of the Rings: Return of the King';
// movies[2] = 'Outlaw King';
// movies[3] = 'The Room';
// movies[4] = 'Breakfast Club';
// console.log(movies[0]);
//STEP 3
// let movies = new Array(5);
// movies[0] = 'Star Wars: A New Hope';
// movies[1] = 'Lord of the Rings: Return of the King';
// movies[2] = 'Outlaw King';
// movies[3] = 'The Room';
// movies[4] = 'Breakfast Club';
// console.log(movies[0]);
// movies.push('Return of the Jedi');
// console.log(movies.length);
//STEP 4
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club'];
// delete movies[0];
// console.log(movies);
//STEP 5
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club', 'Solo', 'Mary Poppins'];
// for (i = 0; i < movies.length; i += 1) {
//     console.log(movies[i]);
// }
//STEP 6
// let movie;
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club', 'Solo', 'Mary Poppins'];
// for (movie in movies) {
//     console.log(movies[movie]);
// }
//STEP 7
// let movie;
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club', 'Solo', 'Mary Poppins'];
// for (movie in movies) {
//     movies.sort();
//     console.log(movies[movie]); 
// }
//STEP 8
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club', 'Solo', 'Mary Poppins'];
// window.document.write('Movies I like:' + '<br>'+ '<br>')
// for (i = 0; i < movies.length; i += 1) {
//     window.document.write(movies[i] + '<br>'); 
// }
// let regrets = ['Twilight', 'Cats', 'Glitter'];
// window.document.write('<br>' + 'Movies I regret:' + '<br>'+ '<br>')
// for (i = 0; i < regrets.length; i += 1) {
//     window.document.write(regrets[i] + '<br>');
// }
//STEP 9
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club', 'Solo', 'Mary Poppins'];
// let regrets = ['Twilight', 'Cats', 'Glitter'];
// let allMovies = movies.concat(regrets)
// window.document.write(allMovies.reverse());
//STEP 10
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the     King', 'Outlaw King', 'The Room', 'Breakfast Club', 'Solo', 'Mary Poppins'];
// let regrets = ['Twilight', 'Cats', 'Glitter'];
// let allMovies = movies.concat(regrets)
// window.document.write(allMovies.reverse());
// console.log(allMovies[9]);
//STEP 11
// let movies = ['Star Wars: A New Hope', 'Lord of the Rings: Return of the King', 'Outlaw King', 'The Room', 'Breakfast Club', 'Solo', 'Mary Poppins'];
// let regrets = ['Twilight', 'Cats', 'Glitter'];
// let allMovies = movies.concat(regrets)
// window.document.write(allMovies.reverse());
// allMovies = allMovies.slice(9);
// console.log(allMovies);
//STEP 12
// let movies = [' Star Wars: A New Hope', ' Lord of the Rings: Return of the King', ' Outlaw King', ' The Room', ' Breakfast Club', ' Solo', ' Mary Poppins' ];
// let regrets = [' Twilight', ' Cats', ' Glitter'];
// let allMovies = movies.concat(regrets);
// window.document.write(allMovies.reverse() + '<br>' + '<br>');
// allMovies.splice(0, 3, ' More Star Wars', ' Avengers', ' More Star Trek' );
// window.document.write(allMovies);
//STEP 13
// let employee1 = [];
// employee1['employeeId'] = 73857;
// employee1['name'] = 'Tiffany';
// employee1['title'] = 'Boss Lady';
// employee1['departments'] = 'All of Them';
// employee1['current'] = true;
// let employee2 = [];
// employee2['employeeId'] = 573472;
// employee2['name'] = 'Franklin D Roosevelt';
// employee2['title'] = 'President';
// employee2['departments'] = "The US";
// employee2['current'] = true;
// let employees = [[employee1], [employee2]];
// console.log(employees[1][0]['name']);
//STEP 14
// let employee1 = [];
// employee1['employeeId'] = 73857;
// employee1['name'] = 'Tiffany Walker ';
// employee1['title'] = 'Boss Lady';
// employee1['departments'] = 'All of Them';
// employee1['current'] = true;
// let employee2 = [];
// employee2['employeeId'] = 573472;
// employee2['name'] = 'Franklin D Roosevelt';
// employee2['title'] = 'President';
// employee2['departments'] = "The US";
// employee2['current'] = true;
// let i;
// let employees = [[employee1], [employee2]];
// for (i = 0; i < employees.length; i += 1) {
//     document.write(employees[i][0]['name']);
// }
//STEP 15
// let employee1 = [];
// employee1['employeeId'] = 73857;
// employee1['name'] = 'Tiffany Walker ';
// employee1['title'] = 'Boss Lady';
// employee1['departments'] = 'All of Them';
// employee1['current'] = true;
// let employee2 = [];
// employee2['employeeId'] = 573472;
// employee2['name'] = 'Franklin D Roosevelt ';
// employee2['title'] = 'President';
// employee2['departments'] = "The US";
// employee2['current'] = true;
// let employee3 = []
// employee3['employeeId'] = 89577;
// employee3['name'] = 'Belinda Blumenthal';
// employee3['title'] = 'Sales Director';
// employee3['departments'] = "Steels Pots and Pans";
// employee3['current'] = false;
// let i;
// let employees = [[employee1], [employee2], [employee3]];
// let status = employees.filter(function (item) {
//     'use strict';
//     for (i = 0; i < employees.length; i += 1) {
//         if ('current' === true) {
//         return employees[i][0]['name'];
//         }
//     }
// })  
//STEP 16
// let movies = [['Star Wars: A New Hope', 1],['Mary Poppins', 2], ['Lord of the Rings: Return of the King', 3], ['The Room', 4], ['Indiana Jones: Temple of Doom', 5]]
// let movieNames = movies.filter(function (item) {
//     return typeof string;
// });
// window.document.write(movieNames);
//STEP 17
// let employees = ['Belinda Blumenthal', 'Bella Ridley', 'Giselle Sylvester', 'The Dutchess', 'Wolfgang Bisch'];
// function showEmployee(); 
// showEmployee(employees);
// window.console.log('Employees:' + '<br>' + showEmployee + '<br>')
//STEP 18
// let myArray = [42, '', 'dogs', true, null, false, 0];
// let filteredArray = myArray.filter(e => e !== null && e !== 0 && e !== '');
// window.document.write(filteredArray);
//STEP 19
// let myArray = [1, 34, 26, 56, 2, 86, 39, 0, 76, 7];
// let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
// window.document.write(randomItem);
//STEP 20
// let myArray = Math.max(34, 68, 987, 2, 42);
// window.document.write(myArray);