 // 二维码
 function erweima(){
    let owimg1 = document.querySelector('.dengd .wimg1');
    let owimg2 = document.querySelector('.dengd .wimg2');
    let oeimg1 = document.querySelector('#eweima .eimg1');
    let oeimg2 = document.querySelector('#eweima .eimg2');
    owimg1.onmouseenter = function(){
        oeimg1.style.display = 'block';
    }
    owimg1.onmouseleave = function(){
        oeimg1.style.display = 'none'
    }
    owimg2.onmouseenter = function(){
        oeimg2.style.display = 'block'
    }
    owimg2.onmouseleave = function(){
        oeimg2.style.display = 'none'
    }
    // 账户列表
    $(function(){
        let $zhanghu = $('#nav .zhanghu')
        let $list = $('#list');
        var zhanghu =$zhanghu[0];
        var list =$list[0];
        zhanghu.onmouseenter = list.onmouseenter=function(){
            $list.css('display','block')
        }
        zhanghu.onmouseleave = list.onmouseleave=function(){
            $list.css('display','none')
        }
    })
    //mycar
    $(function(){
        let $mycar = $('#nav .mycar')
        let $kong = $('#kong')
        let mycar = $mycar[0];
        let kong = $kong[0];
        mycar.onmouseenter = kong.onmouseenter = function(){
            $kong.css('display','block')
        }
        mycar.onmouseleave = kong.onmouseleave = function(){
            $kong.css('display','none')
        }
    })
 }
 //轮播
 function lunbo(){
    let oimg = document.querySelectorAll('.bannershow img');
    let oli = document.querySelectorAll('.bannershow .yuan li');
    let obannershow = document.querySelector('.bannershow');
    let index = 0;
    let timer = null;
    lun();
    auto();
    for(let i = 0;i < oli.length;i++){
        oli[i].onmouseenter = function(){
            index = i;
            lun();
        }
    }
    obannershow.onmouseenter = function(){
        clearInterval(timer);
    }
    obannershow.onmouseleave = function(){
        auto();
    }
    function lun(){
        for(let i=0;i < oimg.length;i++){
            sport_09(oimg[i],{opacity:0});
            oli[i].style.backgroundColor = 'rgba(0,0,255,0.3)';
        }
        sport_09(oimg[index],{opacity:100});
        oli[index].style.backgroundColor = '#fa3778';
    }
    function auto(){
        timer = setInterval(function(){
            index++;
            if(index == oimg.length){
                index = 0;
            }
            lun();
        },3000)
    }
 }
// 全部分类列表
function fen(){
    let oli1 = document.querySelector('.bannershow .banfen .li1');
    let oli2 = document.querySelector('.bannershow .banfen .li2');
    let oli3 = document.querySelector('.bannershow .banfen .li3');
    let oli4 = document.querySelector('.bannershow .banfen .li4');
    let oli5 = document.querySelector('.bannershow .banfen .li5');
    let oli6 = document.querySelector('.bannershow .banfen .li6');
    let oli7 = document.querySelector('.bannershow .banfen .li7');
    let oli8 = document.querySelector('.bannershow .banfen .li8');
    let omianbu = document.getElementById('mianbu');
    let ocai = document.getElementById('cai');
    let oxiang = document.getElementById('xiang');
    let ojian = document.getElementById('jian');
    let oxian = document.getElementById('xian');
    let oge = document.getElementById('ge');
    let onan = document.getElementById('nan');
    let oyun = document.getElementById('yun');
    oli1.onmouseenter = omianbu.onmouseenter = function(){
        omianbu.style.display = 'block';
    }
    oli1.onmouseleave = omianbu.onmouseleave = function(){
        omianbu.style.display = 'none';
    }
    oli2.onmouseenter = ocai.onmouseenter = function(){
        ocai.style.display = 'block';
     }
    oli2.onmouseleave = ocai.onmouseleave = function(){
        ocai.style.display = 'none';
     }
     oli3.onmouseenter = oxiang.onmouseenter = function(){
        oxiang.style.display = 'block';
     }
    oli3.onmouseleave = oxiang.onmouseleave = function(){
        oxiang.style.display = 'none';
     }
     oli4.onmouseenter = ojian.onmouseenter = function(){
        ojian.style.display = 'block';
     }
    oli4.onmouseleave = ojian.onmouseleave = function(){
        ojian.style.display = 'none';
     }
     oli5.onmouseenter = oxian.onmouseenter = function(){
        oxian.style.display = 'block';
     }
    oli5.onmouseleave = oxian.onmouseleave = function(){
        oxian.style.display = 'none';
     }
     oli6.onmouseenter = oge.onmouseenter = function(){
        oge.style.display = 'block';
     }
    oli6.onmouseleave = oge.onmouseleave = function(){
        oge.style.display = 'none';
     }
     oli7.onmouseenter = onan.onmouseenter = function(){
        onan.style.display = 'block';
     }
    oli7.onmouseleave = onan.onmouseleave = function(){
        onan.style.display = 'none';
     }
     oli8.onmouseenter = oyun.onmouseenter = function(){
        oyun.style.display = 'block';
     }
    oli8.onmouseleave = oyun.onmouseleave = function(){
        oyun.style.display = 'none';
     }
}
