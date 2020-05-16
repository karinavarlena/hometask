const responseMiddleware = (req, res, next) => {
   // TODO: Implement middleware that returns result of the query
console.log(req.body, res.data, res.err);
   if(res.err) {
        res.status(404).send({ error: true, message: 'User not found' });
    } else {
        res.send();
    }
}

exports.responseMiddleware = responseMiddleware;