"use strict";

 // Importaçao frameworks
var faker = require("faker");


// Dados Faker
var email_ = faker.internet.email();
var email_novo_ = faker.internet.email();
var nome_ = faker.name.firstName();
var sobre_nome_ = faker.name.lastName();
var user_name_ = faker.internet.userName();
var password_ = faker.internet.password();
var password_novo_ = faker.internet.password();
var telefone_ = faker.phone.phoneNumber();
var telefone_novo_ = faker.phone.phoneNumber();
var numero_id_ = faker.datatype.number(9999);
var numero_status_ = faker.datatype.number(4);

// Body Criaçao usuario
const novo_user = {
    "id": numero_id_,
    "username": user_name_,
    "firstName": nome_,
    "lastName": sobre_nome_,
    "email": email_,
    "password": password_,
    "phone": telefone_,
    "userStatus": numero_status_
};

const novo_user_alt_infos = {
    "id": numero_id_,
    "username": user_name_,
    "firstName": nome_,
    "lastName": sobre_nome_,
    "email": email_novo_,
    "password": password_novo_,
    "phone": telefone_novo_,
    "userStatus": numero_status_
};

module.exports = {
    novo_user,
    novo_user_alt_infos,
};