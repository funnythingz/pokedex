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
;var DDD;
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
;var POKEDEX;
(function (POKEDEX) {
    var PokemonName = (function () {
        function PokemonName(name) {
            this.name = name;
        }
        PokemonName.prototype.getPokemonName = function () {
            return this.name;
        };
        return PokemonName;
    })();
    POKEDEX.PokemonName = PokemonName;
})(POKEDEX || (POKEDEX = {}));
;var POKEDEX;
(function (POKEDEX) {
    var PokemonNo = (function () {
        function PokemonNo(no) {
            this.no = no;
        }
        PokemonNo.prototype.getNo = function () {
            return this.no;
        };
        return PokemonNo;
    })();
    POKEDEX.PokemonNo = PokemonNo;
})(POKEDEX || (POKEDEX = {}));
;var __extends = this.__extends || function (d, b) {
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
            return this.name.getPokemonName();
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
