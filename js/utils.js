var utils={
    toJSON:function(str){
        return 'JSON'in window?JSON.parse(str):eval("("+str+")");
    },
    formatArray:function(likeArray){
        var ary=[];
        try{
            ary=Array.prototype.slice.call(likeArray);
        }catch(e){
            for(var i=0;i<likeArray.length;i++){
                ary.push(likeArray[i]);
            }
        }
        return ary;
    }
};

