/// <reference path="../../reference.ts" />

module POKEDEX {

    export class Pokemon extends DDD.Entity<DDD.Identity<string>> {

        constructor(identity: DDD.Identity<string>,
                    private name: PokemonName) {
            super(identity);
        }

        getName(): string {
            return this.name.getPokemonName();
        }

    }

    export class PokemonID extends DDD.Identity<string> {

        constructor(value: string) {
            super(value);
        }

    }

}
