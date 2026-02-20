const roleMiddleware = (allowedRoles) => {
     return (req, res, next) => {
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({ 
                message:
                 "Forbidden, you don't have permission to access this resource"
                });
                
        }
        next();
     }
};

export default roleMiddleware;