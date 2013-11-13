/// <reference path="../../reference.ts" />

module POKEDEX {

    var expect = chai.expect;

    describe("PokemonName", function() {

        var mewtwo: PokemonName = new PokemonName('ミュウツー');
        var mew: PokemonName =    new PokemonName('ミュウ');

        it("should be mewtwo to equal `ミュウツー`", function() {
            expect(mewtwo.getPokemonName()).to.equal('ミュウツー');
        });

        it("should be mewtwo to not equal to mew", function() {
            expect(mewtwo.getPokemonName()).to.not.equal(mew.getPokemonName());
        });

    });

}
