/// <reference path="../../reference.ts" />

module DDD {

    export class Pokemon extends Entity<Identity<string>> {

        constructor(identity: Identity<string>) {
            super(identity);
        }

    }

    export class PokemonID extends Identity<string> {

        constructor(value: string) {
            super(value);
        }

    }

}
