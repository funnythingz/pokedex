﻿Template.body.helpers({
    greeting: function () {
        return "ahya";
    }
});

Template.body.events({
    'click .hoge': function (event) {
        event.preventDefault();
        console.log("hoge");
    }
});
Template.footer.helpers({
    copyright: function () {
        return "funnythingz";
    }
});
Template.header.helpers({
    title: function () {
        return "Pokebooks";
    },
    description: function () {
        return "This is `my pokebooks`.";
    }
});
var DDD;
(function (DDD) {
    var Identity = (function () {
        function Identity(value) {
            this.value = value;
        }
        Identity.prototype.getValue = function () {
            return this.value.toString();
        };

        Identity.prototype.getIdentity = function () {
            return this.value;
        };
        return Identity;
    })();
    DDD.Identity = Identity;
})(DDD || (DDD = {}));
var DDD;
(function (DDD) {
    var Entity = (function () {
        function Entity(identity) {
            this.identity = identity;
        }
        Entity.prototype.getIdentity = function () {
            return this.identity;
        };

        Entity.prototype.equals = function (other) {
            return this.getIdentity() === other.getIdentity();
        };
        return Entity;
    })();
    DDD.Entity = Entity;
})(DDD || (DDD = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var POKEDEX;
(function (POKEDEX) {
    var Pokemon = (function (_super) {
        __extends(Pokemon, _super);
        function Pokemon(identity, name) {
            _super.call(this, identity);
            this.name = name;
        }
        Pokemon.prototype.getName = function () {
            return this.name.getName();
        };
        return Pokemon;
    })(DDD.Entity);
    POKEDEX.Pokemon = Pokemon;

    var PokemonID = (function (_super) {
        __extends(PokemonID, _super);
        function PokemonID(value) {
            _super.call(this, value);
        }
        return PokemonID;
    })(DDD.Identity);
    POKEDEX.PokemonID = PokemonID;
})(POKEDEX || (POKEDEX = {}));
var POKEDEX;
(function (POKEDEX) {
    var Numero = (function () {
        function Numero(numero) {
            this.numero = numero;
        }
        Numero.prototype.getNumero = function () {
            return this.numero;
        };
        return Numero;
    })();
    POKEDEX.Numero = Numero;
})(POKEDEX || (POKEDEX = {}));
var POKEDEX;
(function (POKEDEX) {
    var Name = (function () {
        function Name(name) {
            this.name = name;
        }
        Name.prototype.getName = function () {
            return this.name;
        };
        return Name;
    })();
    POKEDEX.Name = Name;
})(POKEDEX || (POKEDEX = {}));
Meteor.startup(function () {
});
var POKEDEX;
(function (POKEDEX) {
    var expect = chai.expect;

    describe("PokemonName", function () {
        var mewtwo = new POKEDEX.Name('ミュウツー');
        var mew = new POKEDEX.Name('ミュウ');

        it("should be mewtwo to equal `ミュウツー`", function () {
            expect(mewtwo.getName()).to.equal('ミュウツー');
        });

        it("should be mewtwo to not equal to mew", function () {
            expect(mewtwo.getName()).to.not.equal(mew.getName());
        });
    });
})(POKEDEX || (POKEDEX = {}));
var POKEDEX;
(function (POKEDEX) {
    var expect = chai.expect;

    describe("Pokemon", function () {
        var id_a = new POKEDEX.PokemonID('12345');
        var mew_a = new POKEDEX.Pokemon(id_a, new POKEDEX.Name('ミュウツー'));

        var id_b = new POKEDEX.PokemonID('67890');
        var mew_b = new POKEDEX.Pokemon(id_b, new POKEDEX.Name('ミュウツー'));

        it("should be mew_a has id_a", function () {
            expect(mew_a.getIdentity()).to.equals(id_a);
        });

        it("should be mew_a has id_a is `12345`", function () {
            expect(mew_a.getIdentity().getValue()).to.equals('12345');
        });

        it("should be mew_a equals to mew_a", function () {
            expect(mew_a.equals(mew_a)).to.be.true;
        });

        it("should be mew_a not equals to mew_b", function () {
            expect(mew_a.equals(mew_b)).to.not.be.true;
        });

        it("should be mew_a has name `ミュウツー`", function () {
            expect(mew_a.getName()).to.equals('ミュウツー');
        });

        it("should be mew_b has name `ミュウツー`", function () {
            expect(mew_b.getName()).to.equals('ミュウツー');
        });
    });
})(POKEDEX || (POKEDEX = {}));
//# sourceMappingURL=pokedex.js.map
