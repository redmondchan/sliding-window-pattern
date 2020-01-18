//function that accepts an array of integers and a number called x. It'll calculate the maximum sum of x consecutive elements in an array.

function maxSubarraySum(array, x){
  if(array.length < x ) return null

  let sum = 0
  //get the sum of the first set of numbers
  for(let i = 0; i < x; i++){
    sum += array[i]
  }
  //subtract first number in the set and add next sumber in array
  for(let j = x; j < array.length; j++){
    let tempsum = sum
    if(tempsum - array[j-x] + array[j] > sum){
      sum = tempsum - array[j-x] + array[j] 
    }
  }
  return sum
}

console.log(maxSubarraySum([1,2,3,4,5,7], 1)) //16
console.log(maxSubarraySum([1,2,3,4,5,7], 3)) //16
console.log(maxSubarraySum([1,2,5,2,8, 1, 5], 4)) //17
console.log(maxSubarraySum([], 2)) //null