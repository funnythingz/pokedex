/// <reference path="../../reference.ts" />

module POKEDEX {

    var expect = chai.expect;

    describe("PokemonName", function() {

        var mewtwo: Name = new Name('ミュウツー');
        var mew: Name =    new Name('ミュウ');

        it("should be mewtwo to equal `ミュウツー`", function() {
            expect(mewtwo.getName()).to.equal('ミュウツー');
        });

        it("should be mewtwo to not equal to mew", function() {
            expect(mewtwo.getName()).to.not.equal(mew.getName());
        });

    });

}
