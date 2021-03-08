function callBack1(a,fun,err) {
  setTimeout(() => {
    if(a>0){
      fun(a+3)
    }else{
      // throw new Error('error occured')
      const error = new Error('error occured')
      err(error)
    }
  }, 2000);
}

function callBack2(a,fun) {
  setTimeout(() => {
    fun(a+5)
  }, 3000);
}
// callBack1(3,result1=>
//   callBack2(result1,result2=>{
//     console.log(result2)
//   })
// )

// callBack1(0,result=>console.log(result),error=>{
//   console.log(error.name)
//   console.log(error.message)
// })

function promise1(param) {
 return new Promise((resolve,reject)=>{
   callBack1(param,result1=>resolve(result1),err=>reject(err))
 }) 
}

// promise1(0).then(res=>console.log(res)).catch(e=>console.log(e))


async function test(param){
  try {
    result1 = await promise1(param)
    console.log(result1)
  } catch (error) {
    console.log(error.name)
  }
}

test(0)
test(3)