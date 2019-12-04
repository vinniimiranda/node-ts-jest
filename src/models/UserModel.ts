import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
  PrimaryKey,
  Unique,
  AutoIncrement
} from 'sequelize-typescript';

@Table({
  tableName: 'users'
})
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id?: number;

  @Column
  public email: string;

  @Unique
  @Column
  public username: string;

  @Column
  public password: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  public createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  public updatedAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  public deletedAt: Date;
}
