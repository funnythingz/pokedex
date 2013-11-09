/// <reference path="../../reference.ts" />

module DDD {

    export interface IIdentity<T extends IIdentity<T>> {

        getValue(): string;

        getIdentity(): T;

    }


}
