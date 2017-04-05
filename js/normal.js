function findInArr(item,arr) {
    for (var i = 0; i < arr.length; i++) {
         if (item == arr[i]) {
             return true;
         }
    }
        return false;
}
function getByClass(oParent,sClass) {
     if (oParent.getElementsByClassName) {
         return oParent.getElementsByClassName(sClass);
    } else {
        var aEle = oParent.getElementsByTagName('*');
        var arr = []; 
        for (var i = 0; i < aEle.length; i++) {
            var _temp = aEle[i].className.split(' ');
            if (findInArr(sClass,_temp)) {
                arr.push(aEle[i]);
            }
        }
        return arr;
     }
}

function rnd(n,m){
     return parseInt(Math.random()*(m-n)+n);
}

function addZero(n){
    return n >= 10 ? '' + n : '0' + n;
}
