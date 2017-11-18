function regex(){
	var regex={
		'name':/^[a-z1-9]+/,
		'value':'hello'
	}

	console.log(regex.name);

	return regex;
}

function searchName(string,regex){
	/*console.log(typeof regex)*/
    if(string.search(regex)!==-1){
    	return true;
    }

    return false;
}

var reg=regex();
searchName('123dsfdf', reg.name);
console.log(searchName('123ds',reg['name']));
console.log(searchName('-ds',reg.name));

