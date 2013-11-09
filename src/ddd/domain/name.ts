/// <reference path="../../reference.ts" />

module DDD {

    export class Name {

        constructor(private value: string) {}

        getName(): string {
            return this.value.toString();
        }

    }

}
