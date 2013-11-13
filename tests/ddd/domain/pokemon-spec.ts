/// <reference path="../../reference.ts" />

module POKEDEX {

    var expect = chai.expect;

    describe("Pokemon", function() {

        var id_a: PokemonID = new PokemonID('12345');
        var mew_a: Pokemon =  new Pokemon(id_a, new PokemonName('ミュウツー'));

        var id_b: PokemonID = new PokemonID('67890');
        var mew_b: Pokemon =  new Pokemon(id_b, new PokemonName('ミュウツー'));

        it("should be mew_a has id_a", function() {
            expect(mew_a.getIdentity()).to.equals(id_a);
        });

        it("should be mew_a has id_a is `12345`", function() {
            expect(mew_a.getIdentity().getValue()).to.equals('12345');
        });

        it("should be mew_a equals to mew_a", function() {
            expect(mew_a.equals(mew_a)).to.be.true;
        });

        it("should be mew_a not equals to mew_b", function() {
            expect(mew_a.equals(mew_b)).to.not.be.true;
        });

        it("should be mew_a has pokemonName `ミュウツー`", function() {
            expect(mew_a.getName()).to.equals('ミュウツー');
        });

        it("should be mew_b has pokemonName `ミュウツー`", function() {
            expect(mew_b.getName()).to.equals('ミュウツー');
        });

    });

}
