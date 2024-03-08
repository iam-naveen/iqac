import { boolean, pgSchema, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const IQACSchema = pgSchema("iqac")

export const role = IQACSchema.table("roles", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
})

export const department = IQACSchema.table("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
})

export const user = IQACSchema.table("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  dept_id: serial("dept_id").references(() => department.id),
  role_id: serial("role_id").references(() => role.id),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
})

export const checklist = IQACSchema.table("checklist", {
  id: serial("id").primaryKey(),
  year: serial("year").notNull(),
  dept_id: serial("dept_id").references(() => department.id),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
})

export const item = IQACSchema.table("items", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  status: boolean("status").notNull().default(false),
  comment: text("comment").default(""),
  checklist_id: serial("checklist_id").references(() => checklist.id),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
})
