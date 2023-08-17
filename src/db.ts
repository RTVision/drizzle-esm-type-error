import { varchar, bigserial, pgTable } from 'drizzle-orm/pg-core';

export const address = pgTable('address', {
	id: bigserial('id', {
		mode: 'number'
	}).primaryKey(),
	line1: varchar('line1', { length: 80 }).notNull(),
	line2: varchar('line2', { length: 80 }),
	city: varchar('city', { length: 40 }).notNull(),
	state: varchar('state', { length: 2 }).notNull(),
	zipCode: varchar('zip_code', { length: 11 }).notNull(),
	country: varchar('country', { length: 40 }).default('U.S.A.').notNull()
});
