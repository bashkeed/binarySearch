const search = array =>{
    let right = array.length -1;
    let left = 0;
    let mid = 0;
    let x = 2

    while(left < right){

        mid = left + (right - left)/2;

        if(array[mid]==x){
            return mid
        }
        
        if(array[mid] < x){
            left = mid + 1
        }else{
            right = mid -1
        }
        
    }
    return -1
   
    
}
const arr =[3,5,6,9,11,18,20,21,24,30]

console.log(search(arr))