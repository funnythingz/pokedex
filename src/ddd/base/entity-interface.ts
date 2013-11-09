/// <reference path="../../reference.ts" />

module DDD {

    export interface IEntity<T extends IEntity<T>> {

        getIdentity(): Identity<T>;

        equals(other: IEntity<T>): boolean;

    }

}
