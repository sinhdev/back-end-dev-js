import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lb4DB',
  connector: 'mongodb',
  url: 'mongodb://127.0.0.1:27017/lb4DB',
  host: '127.0.0.1',
  port: 27017,
  database: 'lb4DB',
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Lb4DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lb4DB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lb4DB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}