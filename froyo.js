let obj={}
let array=[]
let x=prompt('put in flavors separated by a commas')
array=x.split(',')
for(let i=0;i<array.length;i++){
    if(!obj[array[i]]){
        obj[array[i]]=1
    }else{
        obj[array[i]]+=1
    }
}
console.log(obj)