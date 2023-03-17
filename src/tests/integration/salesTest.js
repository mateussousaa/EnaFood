import chai from "chai";
import chaiHttp from "chai-http";
import { describe, it, beforeEach } from "mocha";
import Sinon from "sinon";

import { app } from "../../app.js";
import salesModel from "../../models/Sale.js";

import { salesMock } from "../mocks/salesMock.js";

const { expect } = chai;

chai.use(chaiHttp);

describe('testing the api with sale services', function() {
  beforeEach(function () {
    Sinon.restore();
  });

  it('get all sales - GET /sales', async function() {
    Sinon.stub(salesModel, 'find').resolves(salesMock);

    const req = await chai.request(app).get('/sales');

    expect(req).to.have.status(200);
    expect(req.body.sales).to.be.deep.equal(salesMock);
  })
})