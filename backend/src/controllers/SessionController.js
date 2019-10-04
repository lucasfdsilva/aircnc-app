//index, show, store, update, destroy

const User = require('../models/User');

module.exports = {
    //a funcao abaixo eh asyncrona, portant utilizamos 'async'
    async store(req, res){
        const { email } = req.body;

        //procura por usuario existente e se achar armazena em 'user'
        let user = await User.findOne({email: email});

        //se nao achar um existente, cria um novo usuario
        if (!user){
            user = await User.create({ email });     
        }

        //const user = await User.create({ email });

        return res.json(user);
    }
};