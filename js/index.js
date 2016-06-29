-function(){
    var JsonData=null;
    var xhr=new XMLHttpRequest;
    xhr.open("get","json/userInfo.txt",false);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
            var str=xhr.responseText;
            JsonData=utils.toJSON(str);
        }
    };
    xhr.send(null);

   var oUl=document.getElementById("ul1");
    -function(){
        var frg=document.createDocumentFragment();
        for(var i=0;i<JsonData.length;i++){
            var li=document.createElement('li');
            var curLi=JsonData[i];
            for(var key in curLi){
                var span=document.createElement('span');
                span.innerHTML=curLi[key];
                li.appendChild(span);
            }
           frg.appendChild(li);
        }
        oUl.appendChild(frg);
        frg=null;
    }();
    var oLi=oUl.getElementsByTagName('li');

    function changeBg(){
      for(var i=0;i<oLi.length;i++){
          oLi[i].className=i%2===0?null:"bg";
      }
    }
    changeBg();

    function sort(n){
        var _this=this;//this=curSpan;
        _this.flag*=-1;
        var ary=utils.formatArray(oLi);
        ary.sort(function(a,b){
            var curInn= a.getElementsByTagName("span")[n].innerHTML;
            var nextInn= b.getElementsByTagName("span")[n].innerHTML;
            var c=parseFloat(curInn);
            var d=parseFloat(nextInn);
            return(c-d)*_this.flag;
        });
        var frg=document.createDocumentFragment();
        for(var i=0;i<ary.length;i++){
            frg.appendChild(ary[i]);
        }
        oUl.appendChild(frg);
        changeBg();
    }


   var h2=document.getElementsByTagName('h2')[0];
    var span=h2.getElementsByTagName('span');
     for(var i=0;i<span.length;i++){
         var curSpan=span[i];
         curSpan.index=i;
         curSpan.flag=-1;
         if(curSpan.className.indexOf('cursor')>-1){
             curSpan.onclick=function(){
                 sort.call(this,this.index);
             }
         }
     }

}();

