import { setupWorker, rest } from 'msw';
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Expose methods globally to make them available in integration tests
window.msw = { worker, rest };