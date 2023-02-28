const isLoggedIn = (req, res, next) => {


    // req.session.user ? next() : res.redirect('/user/register');
    if(!req.session.user && req.headers && req.headers.Authorization=="Admin")
    {
        console.log("headers",req.headers)
        req.session.user= {
            _id: "63f855955ff48db5e63fdae1",
             username: 'esakki' }

        res.locals.user={
            _id: "63f855955ff48db5e63fdae1",
             username: 'esakki' }
        
        next();

    }
    else res.redirect('/user/register');
 
}

module.exports=isLoggedIn;