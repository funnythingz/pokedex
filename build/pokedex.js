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
;var DDD;
(function (DDD) {
    var Name = (function () {
        function Name(value) {
            this.value = value;
        }
        Name.prototype.getName = function () {
            return this.value.toString();
        };
        return Name;
    })();
    DDD.Name = Name;
})(DDD || (DDD = {}));
;var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DDD;
(function (DDD) {
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
    DDD.Pokemon = Pokemon;

    var PokemonID = (function (_super) {
        __extends(PokemonID, _super);
        function PokemonID(value) {
            _super.call(this, value);
        }
        return PokemonID;
    })(DDD.Identity);
    DDD.PokemonID = PokemonID;
})(DDD || (DDD = {}));
