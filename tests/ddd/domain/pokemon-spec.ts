/// <reference path="../../reference.ts" />

module DDD {

    var expect = chai.expect;

    describe("Pokemon", function() {

        var id_001: PokemonID =  new PokemonID('001');
        var pokemon_1: Pokemon = new Pokemon(id_001);

        var id_002: PokemonID =  new PokemonID('002');
        var pokemon_2: Pokemon = new Pokemon(id_002);

        it("should be pokemon_1 has id_001", function() {
            expect(pokemon_1.getIdentity()).to.equals(id_001);
        });

        it("should be pokemon_1 equals to pokemon_1", function() {
            expect(pokemon_1.equals(pokemon_1)).to.be.true;
        });

        it("should be pokemon_1 not equals to pokemon_2", function() {
            expect(pokemon_1.equals(pokemon_2)).to.not.be.true;
        });

    });

}
