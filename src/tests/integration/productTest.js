import chai from "chai";
import chaiHttp from "chai-http";
import { describe, it, beforeEach } from "mocha";
import Sinon from "sinon";

import { app } from "../../app.js";
import productModel from "../../models/Product.js";
import { productMock, productsMock } from "../mocks/productMock.js";

const { expect } = chai;

chai.use(chaiHttp);

describe('testing the api with product services', function() {
  beforeEach(function () {
    Sinon.restore();
  });

  it('insert product with the right fields - POST /products', async function() {
    Sinon.stub(productModel, 'find').resolves([]);
    Sinon.stub(productModel, 'create').resolves(productMock);

    const req = await chai.request(app)
      .post('/products')
      .send({ name: "first product", price: 4 });

    expect(req).to.have.status(201);
    expect(req.body.product).to.be.deep.equal(productMock);
  });

  it('get all products - GET /products', async function() {
    Sinon.stub(productModel, 'find').resolves(productsMock);

    const req = await chai.request(app).get('/products');

    expect(req).to.have.status(200);
    expect(req.body.products).to.be.deep.equal(productsMock);
  })
})