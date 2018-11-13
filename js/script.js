console.log('Hi');

var eventType = prompt('Is the event casual, semi-formal, or formal??');
var tempFahr = prompt('What is the temperature?');
var sugg1
var sugg2

if (eventType == 'casual') {
	sugg1 = ('something comfy');} 
else if (eventType == 'semi-formal') {
    sugg1 = ('a polo');}
else {
	sugg1 = ('a suit');}
	
if (tempFahr < 54) {
    sugg2 = ('a coat');}
else if (tempFahr >= 54 && tempFahr <= 70){
	sugg2 = ('a jacket');}
else {
	sugg2 = ('no jacket');
}
var result = (sugg1 + ' and ' + sugg2)
console.log('Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event, you should wear ' + result + '.');