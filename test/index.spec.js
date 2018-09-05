const mocha = require("mocha");
const chai = require("chai");
const url = require("../index");
const expect = chai.expect;

describe("url", function() {
  describe("#getLinksFromMd", function() {
    describe("when the parameter is not a string", function() {
      it("should return an error", function() {
        let notString = () => {url.getLinksFromMd(1111)}
        expect(notString).to.throw('O argumento deve ser string');
      });
    })

    describe("when there is no parameter", function() {
      it("should return an error", function() {
        let empty = () => {url.getLinksFromMd()}
        expect(empty).to.throw('Não há texto');
      });
    })

    describe("when there is no url in the text", function() {
      it("should return an empty array", function() {
        expect(url.getLinksFromMd("oi tudo bem com você?")).to.be.an('array');
        expect(url.getLinksFromMd("oi tudo bem com você?")).to.be.empty;
      });
    })

    describe("when there is one url in the text", function() {
      describe("and it has HTTPS", function() {
        it("should return the object in an array", function() {
          expect(url.getLinksFromMd("oi [google] https://www.google.com tudo bem com você?")).to.deep.equal([{ href: 'https://www.google.com', text: '[google]' }]);
        });
      });

      describe("and it has HTTP", function() {
        it("should return the object in an array", function() {
          expect(url.getLinksFromMd("oi [google] http://www.google.com tudo bem com você?"))
          .to.deep.equal([{ href: 'http://www.google.com', text: '[google]' }]);
        });
      });

      describe("and it has www", function() {
        it("should return the url in an array", function() {
          expect(url.getLinksFromMd("oi [google] www.google.com tudo bem com você?"))
          .to.deep.equal([{ href: 'www.google.com', text: '[google]' }]);
        });
      });

      describe("and it only the domain", function() {
        it("should return the url in an array", function() {
          expect(url.getLinksFromMd("oi [google] google.com tudo bem com você?"))
          .to.deep.equal([{ href: 'google.com', text: '[google]' }]);
        });
      });
    })

    describe("when there are three urls in the text", function() {
      it("should return the urls in an array", function() {
        expect(url.getLinksFromMd("oi [google] google.com.br [laboratoria] www.laboratoria.la [ibmec] https://ibmec.com tudo bem com você?"))
        .to.deep.equal([ { href: 'google.com.br', text: '[google]' },
        { href: 'www.laboratoria.la', text: '[laboratoria]' },
        { href: 'https://ibmec.com', text: '[ibmec]' } ]);  
      });
    })
  });
});
