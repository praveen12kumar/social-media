
const asyncHandler = (requestHandler) =>{
    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=> next(err))
    }
}


export {asyncHandler}


// const asyncHandler = ()=> {} // normal function
// const asyncHandler = (func) => {()=> {}}  // call the func inside
// const asyncHandler = (func) => ()=> {} // we can also write like this
// // use async in it
// const asyncHandler = (func) = async()=>{}


// const asyncHandler = (fn) => async (req, res, next)=>{
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message: error.message
//         })
//     }
// }