const isLoggedIn = (req, res, next) => {

    console.log("login session",req.session)
    // req.session.user ? next() : res.redirect('/user/register');
    // console.log("headers",req.headers)
    // && req.headers && req.headers.Authorization=="Admin"
    if(!req.session.user)
    {
        
        req.session.user= {
            _id: "64257ba8d0e25fad8a92d1df",
             username: 'Indianrailways' }

        res.locals.user={
            _id: "64257ba8d0e25fad8a92d1df",
             username: 'Indianrailways' }
        
       

    }
    next();
    // else res.redirect('/user/register');
 
}

module.exports=isLoggedIn;