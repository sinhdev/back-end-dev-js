import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DbDataSource} from '../datasources';
import {Product, ProductRelations} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.ProductId,
  ProductRelations
> {
  constructor(
    @inject('datasources.lb4DB') dataSource: Lb4DbDataSource,
  ) {
    super(Product, dataSource);
  }
}
