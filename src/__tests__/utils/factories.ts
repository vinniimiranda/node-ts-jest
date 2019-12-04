import faker from 'faker';
import { factory } from 'factory-girl';
import User from '../../models/UserModel';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email()
});

export default factory;
