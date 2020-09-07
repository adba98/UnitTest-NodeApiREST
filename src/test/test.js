'use stricts'

const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("Test GET", done => {
    chai
      .request(app)
      .get("/api/movies")
      .end((err, res) => {
        //console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Server!", () => {
  it("Test POST", done => {
    chai
      .request(app)
      .post("/api/movies")
      .send({ id: 1, title: "Aliens", director: 'James Cameron', year: '1986', rating: '8.5' })
      .end(function (err, res) {
        //console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("Server!", () => {
  it("Test PUT", done => {
    chai
      .request(app)
      .put("/api/movies/1")
      .send({ id: 1, title: "Aliens", director: 'James Cameron', year: '1986', rating: '8.4' })
      .end(function (err, res) {
        //console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});
