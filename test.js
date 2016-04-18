var superagent = require("superagent"),
    chai = require("chai"),
    expect = chai.expect,
    should = require("should");

describe("Index", function () {
  it("renders HTML", function (done) {
    superagent.get("http://localhost:3000/")
      .end(function (e, res) {
        (e === null).should.equal(true);
        res.text.should.equal("Hey buddy!");
        done();
      });
    superagent.get("http://localhost:3000/badge")
      .end(function (e, res) {
        console.log(res);
        done();
      });
  });
});

// describe("Index", function () {
//   it("renders HTML", function (done) {
//     superagent.get("http://localhost:3000/")
//       .end(function (e, res) {
//         (e === null).should.equal(true);
//         res.text.should.equal("ey buddy!");
//         done();
//       });
//   });
// });
//
// describe("Index", function () {
//   it("renders HTML", function (done) {
//     superagent.get("http://localhost:3000/")
//       .end(function (e, res) {
//         (e === null).should.equal(true);
//         res.text.should.equal("Hey buddy!");
//         done();
//       });
//   });
// });
