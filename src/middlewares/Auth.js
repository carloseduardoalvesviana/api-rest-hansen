const jwt = require('jsonwebtoken');

module.exports = {
  async auth(req, res, next) {
    const { authorization, id } = req.headers;

    // if (permissions === 'patient') {
    //   return res.status(401).json({
    //     authorization: null,
    //     id: null,
    //     permission: null,
    //     message: 'Você não tem Autorização!',
    //   });
    // }

    if (!authorization)
      return res.status(401).json({
        authorization: null,
        id: null,
        permission: null,
        message: 'Você não tem Autorização!',
      });

    if (!id)
      return res.status(401).json({
        authorization: null,
        id: null,
        permission: null,
        message: 'Id Invalido!',
      });

    try {
      jwt.verify(authorization, process.env.SECRET);
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token Inválido!' });
    }
  },
};
