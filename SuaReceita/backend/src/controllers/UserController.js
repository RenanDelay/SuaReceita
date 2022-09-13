//Cadastro do usuario e criacao de ID

const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users);
    },

    async create(request, response) {
        const { username, email } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('users').insert({
            id,
            username,
            email
        });
     
        return response.json({ id });
    }
};