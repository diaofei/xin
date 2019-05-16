function logg(){
    let otxt1 = document.querySelector('.txt1');
    let opwd1 = document.querySelector('.pwd1');
    let obtn = document.querySelector('.btn');
    obtn.onclick = function(){
        let otxt11 = otxt1.value;
        let opwd11 = opwd1.value;
        let cookieStr = getCookie('user') ? getCookie('user') : '';
        let cookieObj = userJson(cookieStr);
        if(otxt11 in cookieObj){
            if(opwd11 === cookieObj[otxt11]){
                alert('登陆成功');
                location.href = 'good.html';
                return;
            }else{
                alert('密码错误');
                return;
            }
        }else{
            alert('用户名不存在');
            return;
        }
    }
    function userJson(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}