/// <reference path="../../reference.ts" />

module DDD {

    export class Pokemon extends Entity<Identity<string>> {

        constructor(identity: Identity<string>,
                    private name: Name) {
            super(identity);
        }

        getName(): string {
            return this.name.getName();
        }

    }

    export class PokemonID extends Identity<string> {

        constructor(value: string) {
            super(value);
        }

    }

}
