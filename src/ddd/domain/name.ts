/// <reference path="../../reference.ts" />

module POKEDEX {

    export class Name {

        constructor(private value: string) {}

        getName(): string {
            return this.value.toString();
        }

    }

}
