var text;
var wordArray;

function setText(inputText){
	text = inputText;
	wordArray = inputText.split(/\r\n|\n|,/);
}

function displayText(){
        if(document.getElementById('output').textContent === ""){
		document.getElementById('output').textContent = text;
	}else{
		document.getElementById('output').textContent = "";
	}
}

function checkWords(inputText){
	let words = inputText.split(/[^a-z]/i);
	let wrongWords = [];
	if (wordArray == null || wordArray.length < 1){
		return "";
	}

	for(let h = 0; h<words.length; h++){
		let wordToCheck = words[h];

		if(wordToCheck === ""){
			continue;
		}

		let found = false;

		for(let i = 0; i<wordArray.length; i++){
			let word = wordArray[i];			
			if(wordToCheck.toLowerCase() === word.toLowerCase()){
                		found = true;
				break;
			}
			
		}

		if(!found){
			wrongWords.push(wordToCheck);
		}
				
	}
	return wrongWords;	
}

function fillErrorBox(result){
	var div = document.getElementById('wrongwords');
	if(result.length > 0){	
		var allWords = result.join();
		div.innerHTML = "Een aantal getypte woorden komen niet voor in je lijst:<br>" + allWords;
		div.style.visibility = "visible";
	} else {
		div.innerHTML = "";
		div.style.visibility = "hidden";
	}
}

	
        



