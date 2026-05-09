import { int, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

// ── Goals ─────────────────────────────────────────────────────────────────────
export const goals = sqliteTable('goals', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  category: text('category').notNull().default('career'),
  why: text('why'),
  deadline: text('deadline'),
  confidence: int('confidence').default(50),
  metrics: text('metrics'),
  tags: text('tags'),
  status: text('status').notNull().default('active'),
  visionImageUri: text('vision_image_uri'),
  createdAt: text('created_at').notNull(),
  manifestedAt: text('manifested_at'),
});

// ── FTBA Entries ──────────────────────────────────────────────────────────────
export const ftbaEntries = sqliteTable('ftba_entries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  goalId: integer('goal_id').references(() => goals.id),
  date: text('date').notNull(),
  feelScore: int('feel_score').default(5),
  feelText: text('feel_text'),
  thinkText: text('think_text'),
  believeText: text('believe_text'),
  actText: text('act_text'),
  photoUri: text('photo_uri'),
  voiceUri: text('voice_uri'),
  completed: int('completed', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
});

// ── Journal Entries ───────────────────────────────────────────────────────────
export const journalEntries = sqliteTable('journal_entries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  type: text('type').notNull().default('free'),
  title: text('title'),
  body: text('body').notNull().default(''),
  template: text('template'),
  photos: text('photos'),
  locked: int('locked', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').notNull(),
});

// ── Affirmations ──────────────────────────────────────────────────────────────
export const affirmations = sqliteTable('affirmations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
  category: text('category').notNull().default('custom'),
  isCustom: int('is_custom', { mode: 'boolean' }).default(true),
  voiceUri: text('voice_uri'),
  createdAt: text('created_at').notNull(),
});

// ── Vision Board Items ────────────────────────────────────────────────────────
export const visionItems = sqliteTable('vision_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  imageUri: text('image_uri').notNull(),
  caption: text('caption'),
  goalId: integer('goal_id').references(() => goals.id),
  orderIndex: int('order_index').default(0),
  createdAt: text('created_at').notNull(),
});

// ── Inspired Actions ──────────────────────────────────────────────────────────
export const inspiredActions = sqliteTable('inspired_actions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  goalId: integer('goal_id').references(() => goals.id),
  ftbaId: integer('ftba_id').references(() => ftbaEntries.id),
  text: text('text').notNull(),
  completed: int('completed', { mode: 'boolean' }).default(false),
  completedAt: text('completed_at'),
  createdAt: text('created_at').notNull(),
});

// ── Daily Rituals ─────────────────────────────────────────────────────────────
export const rituals = sqliteTable('rituals', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  date: text('date').notNull().unique(),
  ftbaDone: int('ftba_done', { mode: 'boolean' }).default(false),
  gratitudeDone: int('gratitude_done', { mode: 'boolean' }).default(false),
  visualizationDone: int('visualization_done', { mode: 'boolean' }).default(false),
  affirmationsDone: int('affirmations_done', { mode: 'boolean' }).default(false),
  meditationDone: int('meditation_done', { mode: 'boolean' }).default(false),
  vibrationScore: int('vibration_score').default(5),
});

// ── Manifestations ("My Miracles") ───────────────────────────────────────────
export const manifestations = sqliteTable('manifestations', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  goalId: integer('goal_id').references(() => goals.id),
  title: text('title').notNull(),
  description: text('description'),
  dateManifested: text('date_manifested').notNull(),
  createdAt: text('created_at').notNull(),
});

// ── Practice Sessions (55×5, 369, Meditation) ─────────────────────────────────
export const practiceSessions = sqliteTable('practice_sessions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  type: text('type').notNull(),
  content: text('content'),
  dayCount: int('day_count').default(0),
  cycleTarget: int('cycle_target').default(5),
  completedDays: int('completed_days').default(0),
  createdAt: text('created_at').notNull(),
});

// ── Exported types ─────────────────────────────────────────────────────────────
export type Goal = typeof goals.$inferSelect;
export type NewGoal = typeof goals.$inferInsert;
export type FtbaEntry = typeof ftbaEntries.$inferSelect;
export type NewFtbaEntry = typeof ftbaEntries.$inferInsert;
export type JournalEntry = typeof journalEntries.$inferSelect;
export type NewJournalEntry = typeof journalEntries.$inferInsert;
export type Affirmation = typeof affirmations.$inferSelect;
export type VisionItem = typeof visionItems.$inferSelect;
export type InspiredAction = typeof inspiredActions.$inferSelect;
export type Ritual = typeof rituals.$inferSelect;
export type Manifestation = typeof manifestations.$inferSelect;
export type PracticeSession = typeof practiceSessions.$inferSelect;
