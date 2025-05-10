function power(X,n){
if(n==0) return 1.0
return n<0 ? 1/temp(X,n) : temp(X,n)
}
console.log(power(2,10))

function temp(x,n){
    if(n===0) return 1;
    let half = temp(x,Math.floor(n/2))
    if(n%2==0) return  half*half
    return half*half*x
}