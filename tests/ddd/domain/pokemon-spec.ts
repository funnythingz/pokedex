/// <reference path="../../reference.ts" />

module DDD {

    var expect = chai.expect;

    describe("Pokemon", function() {

        var id_150: PokemonID = new PokemonID('150');
        var mewtwo: Pokemon =   new Pokemon(id_150, new Name('ミュウツー'));

        var id_151: PokemonID = new PokemonID('151');
        var mew: Pokemon =      new Pokemon(id_151, new Name('ミュウ'));

        it("should be mewtwo has id_150", function() {
            expect(mewtwo.getIdentity()).to.equals(id_150);
        });

        it("should be mewtwo equals to mewtwo", function() {
            expect(mewtwo.equals(mewtwo)).to.be.true;
        });

        it("should be mewtwo not equals to mew", function() {
            expect(mewtwo.equals(mew)).to.not.be.true;
        });

        it("should be mewtwo has name `ミュウツー`", function() {
            expect(mewtwo.getName()).to.equals('ミュウツー');
        });

        it("should be mew has name `ミュウ`", function() {
            expect(mew.getName()).to.equals('ミュウ');
        });

    });

}
