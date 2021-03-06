export function formatTime(timestamp) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    var date = new Date(timestamp.replace(/-/g, "/"));
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${months[month]} ${day}, ${year} ${hours}:${minutes}${ampm}`
}

export function accountSpecials(string){
    var originLength= string.length;
    var halfAWidth= [];
    var thirdOfAWidth=[];
    var mAndCapsCharacter = [];
    var capitals= [];
    var regexhalf = / |t|\"/;
    var regexthird = /\||\.|\,|\!|\;|\'|l|j|i|1|I/;
    var regexbonus = /m|J/;
    var regexCapitals = /[A-H]|[K-Z]/;
    for(var index = 0; index<originLength; index++){
        
        if(
            regexhalf.test(string[index])
        ){
            halfAWidth.push(string[index]);
        }
        else if(
            regexthird.test(string[index])
        ){
            thirdOfAWidth.push(string[index])
        }
        else if(
            regexbonus.test(string[index])
        ){
            mAndCapsCharacter.push(string[index]);
        }else if(
            regexCapitals.test(string[index])
        ){
            capitals.push(string[index])
        }
    }
    var totalHalf = Math.ceil(halfAWidth.length/2);
    var thirdTotal = Math.ceil(thirdOfAWidth.length/3);
    var mChar = Math.floor(mAndCapsCharacter.length*0.1);
    var caps = Math.floor(capitals.length*0.15);

    var result = originLength-(halfAWidth.length-totalHalf)-(thirdOfAWidth.length-thirdTotal)+mChar+caps;
    return result;
}
