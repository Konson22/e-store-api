const {verify, sign} = require('jsonwebtoken')

async function createToken(user){
    return await sign(user, 'secreteword')
}


async function verifyToken(req, res, next) {
	
	const token = req.cookies['SALE-CONEX-KEY']
	try{
        if(token == null) return res.status(403).send('You do not have valid token');
       
		verify(token, 'secreteword', (err, user)=>{
			if(err) return res.status(403).send('Your session has expired please login');
			req.user = user
			return next();
		});

	}catch(err){
		return res.status(500).send('Internal Server Error');
	}
}

module.exports = {createToken, verifyToken}