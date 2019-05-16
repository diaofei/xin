function zhuce(){
    let re = /^(158|156|188)\d{8}$/;
    let re1 = /^[a-zA-Z0-9]{6,16}$/;
    let ospan = document.getElementsByTagName('span');
    let otxt1 = document.querySelector('.txt1');
    let opwd1 = document.querySelector('.pwd1');
    let opwd2 = document.querySelector('.pwd2');
    otxt1.onblur = function(){
        let str = otxt1.value;
        if(!re.test(str)){
            ospan[1].style.display = 'block';
        }else{
            ospan[1].style.display = 'none';
        }
    }
    opwd1.onblur = function(){
        let str1 = opwd1.value;
        if(!re1.test(str1)){
            ospan[2].style.display = 'block';
        }else{
            ospan[2].style.display = 'none';
        }
    }
    opwd2.onblur = function(){
        if(opwd2.value !== opwd1.value){
            ospan[3].style.display = 'block';
        }else{
            ospan[3].style.display = 'none';
        }
    }
    let obtn = document.querySelector('.log .btn');
    obtn.onclick = function(){
        let otxt11 = otxt1.value;
        let opwd11 = opwd1.value;
        let cookieStr = getCookie('user') ? getCookie('user') : '';
        let cookieObj = userJson(cookieStr);
        if(otxt11 in cookieObj){
            alert('用户名已存在');
            return;
        }else{
            cookieObj[otxt11] = opwd11;
        }
        cookieStr = JSON.stringify(cookieObj);
        createCookie('user',cookieStr,10)
    }
    function userJson(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }

}
