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
      jwt.verify(authorization, process.env.SECRET || '6428A8FBBB0E120528BB604A66787102280E1B5E26DB76633CE37C8A4526E445');
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token Inválido!' });
    }
  },
};
