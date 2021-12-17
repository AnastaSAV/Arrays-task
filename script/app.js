
	let string = 'Lorem ipsum dolor sit, amet suck consectetur adipisicing elit. Reiciendis dicta, vel fugiat beatae ipsum tenetur ullam, sint odio ducimus aliquam nesciunt dolor quibusdam ex ipsa provident fuck repellat non rerum saepe.';
	
function filterArray() {
	string = string.split(' ');
	console.log(string);
	let filteredString = string.filter(function(item){
		return item !== 'suck' && item !== 'fuck';
	})
	console.log(filteredString);
	console.log(filteredString.join (' '));
}
filterArray();

// function stringMutant(firstWord, secondWord, string) {
// 	string = string.split(' ');
// 	console.log(string);
// 	let newArray = [];
// 	let consilience = false;
// 	for(let i = 0; i < string.length; i++) {
// 		if (string.includes(firstWord) && string.includes(secondWord)) {
// 			consilience = true;
// 			// console.log(array.indexOf(firstWord));
// 			// console.log(array.indexOf(secondWord));
// 		 string.splice(5, 1);
// 		 string.splice (26, 1);
// 		 newArray = (string.join(' '));
// 		}
// 		else {
// 			consilience = false;
// 		}
//   }
//   console.log(consilience);
//   console.log(newArray);
// }
// stringMutant('suck', 'fuck', string);
