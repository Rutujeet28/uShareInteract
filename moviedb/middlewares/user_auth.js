const isLoggedIn = (req, res, next) => {

    console.log("login session",req.session)
    // req.session.user ? next() : res.redirect('/user/register');
    // console.log("headers",req.headers)
    // && req.headers && req.headers.Authorization=="Admin"
    if(!req.session.user)
    {
        
        req.session.user= {
            _id: "63f855955ff48db5e63fdae1",
             username: 'esakki' }

        res.locals.user={
            _id: "63f855955ff48db5e63fdae1",
             username: 'esakki' }
        
        next();

    }
    // else res.redirect('/user/register');
 
}

module.exports=isLoggedIn;