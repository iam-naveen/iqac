CREATE SCHEMA "iqac";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iqac"."checklist" (
	"id" serial PRIMARY KEY NOT NULL,
	"year" serial NOT NULL,
	"dept_id" serial NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iqac"."departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iqac"."items" (
	"id" serial PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"status" boolean DEFAULT false NOT NULL,
	"comment" text DEFAULT '',
	"checklist_id" serial NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iqac"."roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "iqac"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"dept_id" serial NOT NULL,
	"role_id" serial NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "iqac"."checklist" ADD CONSTRAINT "checklist_dept_id_departments_id_fk" FOREIGN KEY ("dept_id") REFERENCES "iqac"."departments"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "iqac"."items" ADD CONSTRAINT "items_checklist_id_checklist_id_fk" FOREIGN KEY ("checklist_id") REFERENCES "iqac"."checklist"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "iqac"."users" ADD CONSTRAINT "users_dept_id_departments_id_fk" FOREIGN KEY ("dept_id") REFERENCES "iqac"."departments"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "iqac"."users" ADD CONSTRAINT "users_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "iqac"."roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
