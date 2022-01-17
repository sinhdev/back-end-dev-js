import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DbDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.ID,
  UserRelations
> {
  constructor(
    @inject('datasources.lb4DB') dataSource: Lb4DbDataSource,
  ) {
    super(User, dataSource);
  }
}
