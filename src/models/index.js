// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Role = {
  "PACIENTE": "PACIENTE",
  "DOCTOR": "DOCTOR"
};

const { Paciente } = initSchema(schema);

export {
  Paciente,
  Role
};