"use strict";

  // Importaçao frameworks
  var request = require("supertest");
  var expect = require("chai").expect;
  var joiAssert = require("joi-assert");

  // Payloads e Variaveis
  var nome_user = "";
  const nome_user_invalido = "USU4R1O 1NV4LID0";
  const {
    novo_user,
    novo_user_alt_infos,
  } = require("../dados/dados");

  // Schemas
  const {
    schemaUserCriado,
    schemaUser,
  } = require("../schemas/schema");

  // Config
  const request_timeout = 200000;
  const URL = process.env.NODE_ENV;

  // Paths
  const PATH_USER = "/user"

describe("Cenários de Testes - Pet Store", function() {
  it("Criar Novo Usuário", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .post(PATH_USER)
    .send(novo_user)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      nome_user = (novo_user.username);
      expect(res.status).to.be.eql(200);
      joiAssert(res.body, schemaUserCriado);
      done(err);
    });
  });

  it("Buscar Usuário Criado", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_USER + "/" + nome_user)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(200);
      joiAssert(res.body, schemaUser);
      done(err);
    });
  });

  it("Buscar Usuário - Inválido 404", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_USER + "/" + nome_user_invalido)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(404);
      done(err);
    });
  });

  it("Buscar Usuário - Sem Passar Username 405", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_USER)
    .end(function(err, res) {
      expect(res.status).to.be.eql(405);
      done(err);
    });
  });

  it("Alterar Informações do Usuário", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .put(PATH_USER + "/" + nome_user)
    .send(novo_user_alt_infos)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(200);
      done(err);
    });
  });

  it("Validar Informações Alteradas do Usuário", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_USER + "/" + nome_user)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(200);
      expect(res.body).to.be.eql(novo_user_alt_infos);
      joiAssert(res.body, schemaUser);
      done(err);
    });
  });

  it("Buscar Usuário Criado - Exibindo Campos", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_USER + "/" + nome_user)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      console.log(`O Id do usuário: ${res.body.id}`);
      console.log(`O Username: ${res.body.username}`);
      console.log(`O Primeiro nome: ${res.body.firstName}`);
      console.log(`O Sobrenome: ${res.body.lastName}`);
      console.log(`O Email: ${res.body.email}`);
      console.log(`O Password: ${res.body.password}`);
      console.log(`O Telefone: ${res.body.phone}`);
      console.log(`O status do usuário: ${res.body.userStatus}`);
      expect(res.status).to.be.eql(200);
      joiAssert(res.body, schemaUser);
      done(err);
    });
  });

  it("Deletar Usuário", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .delete(PATH_USER + "/" + nome_user)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(200);
      done(err);
    });
  });

  it("Validar Usuário Deletado", function(done) {
    this.timeout(request_timeout);
    request(URL)
    .get(PATH_USER + "/" + nome_user)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
      expect(res.status).to.be.eql(404);
      done(err);
    });
  });
})