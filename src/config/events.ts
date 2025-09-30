// FIX: Created file content to resolve compilation error.
// This file can define event types for a potential event bus or tracking system.

export enum AppEvent {
  USER_LOGIN = 'USER_LOGIN',
  MODULE_START = 'MODULE_START',
  MODULE_COMPLETE = 'MODULE_COMPLETE',
  QUIZ_FAIL = 'QUIZ_FAIL',
  QUIZ_PASS = 'QUIZ_PASS',
  BADGE_EARNED = 'BADGE_EARNED',
}

export interface EventPayload {
  [key: string]: any;
}
