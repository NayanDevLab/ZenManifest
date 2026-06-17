CREATE TABLE `app_settings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_name` text,
	`onboarding_completed` integer DEFAULT false NOT NULL,
	`created_at` integer NOT NULL
);
