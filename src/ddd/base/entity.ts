/// <reference path="identity.ts" />

module DDD {

    export class Entity<ID extends Identity<any>> {

        constructor(private identity: ID) {}

        getIdentity(): ID {
            return this.identity;
        }

        equals(other: Entity<ID>): boolean {
            return this.getIdentity() === other.getIdentity();
        }
    }

}
