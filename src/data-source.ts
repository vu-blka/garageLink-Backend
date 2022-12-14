import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
  AccessoryType,
  Account,
  Cart,
  CartDescription,
  User,
  CartType,
  Comment,
  //DescriptionType,
  Manufacturer,
  Product,
  ProductDescription,
  ProductType,
  Role,
  Sale,
  SaleDescription,
  ServiceType,
  Status,
	ImageUpload
} from './entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  database: 'Garage',
  synchronize: true,
  logging: false,
  entities: [
    AccessoryType,
    Account,
    Cart,
    CartDescription,
    CartType,
    Comment,
    //DescriptionType,
    Manufacturer,
    Product,
    ProductDescription,
    ProductType,
    Role,
    Sale,
    SaleDescription,
    ServiceType,
    Status,
    User,
		ImageUpload,
  ],
  migrations: [],
  subscribers: [],
});
