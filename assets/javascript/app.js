$(document).ready(function(){

var questions = [
{ //Question [0]
	question:  'What happens when the Weeping Angel touches you?',
	choice1: 'You get send to the Future',
	choice2: 'You will turn into a statue',
	choice3: 'You get send back through time',
	choice4: 'You will die',
	answer: 'You get send back through time',
},
{ //Question [1]
	question: 'Which famous painter, with the help of The Doctor and Amy Pond, gets to see his future success?',
	choice1: 'Pablo Picasso',
	choice2: 'Vincent van Gogh',
	choice3: 'Leonardo da Vinci',
	choice4: 'Michelangelo',
	answer: 'Vincent van Gogh',
},
{ //Question [2]
	question: 'Who is River Song?',
	choice1: 'A child of Amy Pond and Rory Williams',
	choice2: 'A child of the TARDIS',
	choice3: 'The Wife of The Doctor',
	choice4: 'All of the Above',
	answer: 'All of the Above',
},
{ //Question [3]
	question: 'Who is the true identiry of The Face of Bo?',
	choice1: 'Captain Jack Harkness',
	choice2: 'Lady Cassandra',
	choice3: 'The Master',
	choice4: 'Bad Wolf',
	answer: 'Captain Jack Harkness',
},
{ //Question [4]
	question: 'How many hearts does The Doctor have?',
	choice1: 'One',
	choice2: 'Two',
	choice3: 'Three',
	choice4: 'Four',
	answer: 'Two',
},
{ //Question [5]
	question: 'Who is the Master?',
	choice1: 'River Song',
	choice2: 'Lady Cassandra',
	choice3: 'Missy',
	choice4: 'Donna Noble',
	answer: 'Missy',
},
{ //Question [6]
	question: 'What is the Doctor called by the Daleks on their home planet?',
	choice1: 'Destroyer of Daleks',
	choice2: 'The Oncoming Storm',
	choice3: 'The Time Lord Warrior',
	choice4: 'The Doctor',
	answer: 'The Oncoming Storm',
},
{ //Question [7]
	question: 'What is the Dalek\'s catch phrase?',
	choice1: 'Destroy!',
	choice2: 'Attack!',
	choice3: 'Allons-y!',
	choice4: 'Exterminate!',
	answer: 'Exterminate!',
},
{ //Question [8]
	question: 'Who did the First Doctor travel with?',
	choice1: 'His sister',
	choice2: 'His daughter',
	choice3: 'His wife',
	choice4: 'His grandaughter',
	answer: 'His grandaughter',
},
{ //Question [9]
	question: 'What is the name of the Doctor\'s robot dog?',
	choice1: 'C.H.O.M.P.S',
	choice2: 'K-9',
	choice3: 'RIC',
	choice4: 'Bad Wolf',
	answer: 'K-9',
},
{ //Question [10]
	question: 'Which companion got stuck in another dimension?',
	choice1: 'Sarah Jane Smith',
	choice2: 'Amy Pond',
	choice3: 'Rose Tyler',
	choice4: 'Clara Oswald',
	answer: 'Captain Jack Harkness',
},


];

var choice1 = $('<div>').attr('id', 'choices');
var choice2 = $('<div>').attr('id', 'choices');
var choice3 = $('<div>').attr('id', 'choices');
var choice4 = $('<div>').attr('id', 'choices');
$(".choices").append(choice1, choice2, choice3, choice4)


var x = 0

var correct = 0;
var incorrect = 0;
var timesOut = 0;


//----------

function timerSTOP() {
	clearInterval(timer[x]);
}

function timerSTART() {
	timer[x] = setInterval(countdowntimer, 3000);
}


//Start Button
$('#startBtn').click(function() {
	questionUpdate();
	$('.firstPage').hide();

})
	
})




//End doc f(x)