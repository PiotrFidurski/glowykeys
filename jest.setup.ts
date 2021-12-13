import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { server } from 'mocks/server';
import 'next';

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());
