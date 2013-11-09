/// <reference path="../../reference.ts" />

module DDD {

    export class Entity<ID extends Identity<any>> implements IEntity {

        constructor(private identity: ID) {}

        getIdentity(): ID {
            return this.identity;
        }

        equals(other: Entity<ID>): boolean {
            return this.getIdentity() === other.getIdentity();
        }
    }

}
