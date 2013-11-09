/// <reference path="../../reference.ts" />

module DDD {

    export class Identity<T> implements IIdentity {

        constructor(private value: T) {}

        getValue(): string {
            return this.value.toString();
        }

        getIdentity(): T {
            return this.value;
        }

    }

}
