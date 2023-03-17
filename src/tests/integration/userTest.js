import chai from "chai";
import chaiHttp from "chai-http";
import { describe, it, beforeEach } from "mocha";
import Sinon from "sinon";

import { app } from "../../app.js";
import userModel from "../../models/User.js";
import { userMock, usersMock } from "../mocks/userMock.js";

const { expect } = chai;

chai.use(chaiHttp);

describe('testing the api with user services', function() {
  beforeEach(function () {
    Sinon.restore();
  });

  it('insert user with the right fields - POST /users', async function() {
    Sinon.stub(userModel, 'find').resolves([]);
    Sinon.stub(userModel, 'create').resolves(userMock);

    const req = await chai.request(app)
      .post('/users')
      .send({
        name: "user",
        email: "user@user.com",
        password: "444444"
      });

    expect(req).to.have.status(201);
    expect(req.body.user.email).to.be.equal('user@user.com');
  });

  it('get all users - GET /users', async function() {
    Sinon.stub(userModel, 'find').resolves(usersMock);

    const req = await chai.request(app).get('/users');

    expect(req).to.have.status(200);
    expect(req.body.users).to.be.deep.equal(usersMock);
  })
})