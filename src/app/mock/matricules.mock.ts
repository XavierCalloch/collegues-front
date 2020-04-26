import { Collegue } from '../models/Collegue';

const collegue1 = new Collegue(
  'A01',
  'Durand',
  'Albert',
  'albertdurand@mail.com',
  new Date('1980-04-12'),
  ''
);

const collegue2 = new Collegue(
  'A02',
  'Dupont',
  'Marcel',
  'marceldupont@mail.com',
  new Date('1991-07-22'),
  ''
);

const collegue3 = new Collegue(
  'A03',
  'Moreau',
  'Catherine',
  'catherinemoreau@mail.com',
  new Date('1983-10-05'),
  ''
);

export const matriculesMock: Collegue[] = [collegue1, collegue2, collegue3];
