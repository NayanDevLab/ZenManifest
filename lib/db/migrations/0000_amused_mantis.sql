CREATE TABLE `affirmations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`text` text NOT NULL,
	`category` text DEFAULT 'custom' NOT NULL,
	`is_custom` integer DEFAULT true,
	`voice_uri` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ftba_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`goal_id` integer,
	`date` text NOT NULL,
	`feel_score` integer DEFAULT 5,
	`feel_text` text,
	`think_text` text,
	`believe_text` text,
	`act_text` text,
	`photo_uri` text,
	`voice_uri` text,
	`completed` integer DEFAULT false,
	`created_at` text NOT NULL,
	FOREIGN KEY (`goal_id`) REFERENCES `goals`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `goals` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`category` text DEFAULT 'career' NOT NULL,
	`why` text,
	`deadline` text,
	`confidence` integer DEFAULT 50,
	`metrics` text,
	`tags` text,
	`status` text DEFAULT 'active' NOT NULL,
	`vision_image_uri` text,
	`created_at` text NOT NULL,
	`manifested_at` text
);
--> statement-breakpoint
CREATE TABLE `inspired_actions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`goal_id` integer,
	`ftba_id` integer,
	`text` text NOT NULL,
	`completed` integer DEFAULT false,
	`completed_at` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`goal_id`) REFERENCES `goals`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`ftba_id`) REFERENCES `ftba_entries`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `journal_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text DEFAULT 'free' NOT NULL,
	`title` text,
	`body` text DEFAULT '' NOT NULL,
	`template` text,
	`photos` text,
	`locked` integer DEFAULT false,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `manifestations` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`goal_id` integer,
	`title` text NOT NULL,
	`description` text,
	`date_manifested` text NOT NULL,
	`created_at` text NOT NULL,
	FOREIGN KEY (`goal_id`) REFERENCES `goals`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `practice_sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`type` text NOT NULL,
	`content` text,
	`day_count` integer DEFAULT 0,
	`cycle_target` integer DEFAULT 5,
	`completed_days` integer DEFAULT 0,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rituals` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`ftba_done` integer DEFAULT false,
	`gratitude_done` integer DEFAULT false,
	`visualization_done` integer DEFAULT false,
	`affirmations_done` integer DEFAULT false,
	`meditation_done` integer DEFAULT false,
	`vibration_score` integer DEFAULT 5
);
--> statement-breakpoint
CREATE UNIQUE INDEX `rituals_date_unique` ON `rituals` (`date`);--> statement-breakpoint
CREATE TABLE `vision_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`image_uri` text NOT NULL,
	`caption` text,
	`goal_id` integer,
	`order_index` integer DEFAULT 0,
	`created_at` text NOT NULL,
	FOREIGN KEY (`goal_id`) REFERENCES `goals`(`id`) ON UPDATE no action ON DELETE no action
);
