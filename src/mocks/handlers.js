import { rest } from 'msw';

export const handlers = [
  rest.get('https://todos-8f0f.restdb.io/rest/todos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { text: 'Test task', completed: true }
      ])
    );
  }),
];
