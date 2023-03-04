const axios = require("axios").default;
const expect = require("chai").expect;

describe("CY Practise", () => {
  let email = undefined;

  it("Async Suite", () => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        email = res.data.data.email;
        expect(email).to.equal("janet.weaver@reqres.in");
        done();
      })
      .catch((err) => {
        done(err);
      });
    console.log(email);
  });
});
