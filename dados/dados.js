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
    "email": email_,
    "firstName": nome_,
    "id": numero_id_,
    "lastName": sobre_nome_,
    "password": password_,
    "phone": telefone_,
    "userStatus": numero_status_,
    "username": user_name_
};

const novo_user_alt_infos = {
    "email": email_novo_,
    "firstName": nome_,
    "id": numero_id_,
    "lastName": sobre_nome_,
    "password": password_novo_,
    "phone": telefone_novo_,
    "userStatus": numero_status_,
    "username": user_name_
};

module.exports = {
    novo_user,
    novo_user_alt_infos,
};