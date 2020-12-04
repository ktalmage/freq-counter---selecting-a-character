

const arr = ['hello there','Hi my name is Kyle poegijsgdgisgdrrwtwgwsdg']

function countChar(arr,char){
 let count = {};
 let str = arr.join(" ");
 for (let i = 0; i < str.length; i++){
   let val = str[i].toLowerCase();
   if (val !== " " && val === char){
    count[val] = (count[val] || 0) + 1;
    }
  }
 return count;
}

countChar(arr,'r')