module DDD {

    export class Identity<T> {

        constructor(private value: T) {}

        getValue(): string {
            return this.value.toString();
        }

        getIdentity(): T {
            return this.value;
        }

    }

}
