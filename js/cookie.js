function createCookie(key,value,expires){
    var cookieText = encodeURIComponent(key) +'='+ encodeURIComponent(value) +';path=/';
    if(!isNaN(expires)){
        var date = new Date();
        date.setDate(date.getDate()+expires);
        cookieText += ';expires='+date;
    } 
    document.cookie = cookieText;
}
function getCookie(key){
    var arr = document.cookie.split('; ');
    for(let i = 0,len = arr.length;i < len; i++){
        let list = arr[i].split('=');
        if(list[0] === encodeURIComponent(key)){
            return decodeURIComponent(list[1])
        }
    }
}