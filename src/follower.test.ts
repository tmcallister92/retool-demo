import { Follower } from '@prisma/client';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import request from 'supertest';
import { app } from '.';
import client from '../prisma/client';

describe('GET Follower', () => {
  let existingFollower: Follower | null = null;
  const server = request(app.callback());

  beforeAll(async () => {
    existingFollower = await client.follower.create({
      data: { email: 'carl@corso.com', name: 'Carl' },
    });
  });

  afterAll(async () => {
    assert(existingFollower);
    await client.follower.delete({ where: { id: existingFollower.id } });
  });

  it(`${ReasonPhrases.OK} response, existing customer found by ID`, async () => {
    assert(existingFollower);

    const response = await server
      .get(`/followers/${existingFollower.id}`)
      .send();
    expect(response.statusCode).toBe(StatusCodes.OK);

    const { body } = response as {
      body: { id: number; email: string; name: string };
    };

    expect(body.id).toEqual(existingFollower.id);
    expect(body.email).toEqual(existingFollower.email);
    expect(body.name).toEqual(existingFollower.name);
  });

  it(`${ReasonPhrases.BAD_REQUEST} response, invalid ID included in request`, async () => {
    const response = await server.get('/followers/fish').send();
    expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
  });

  it(`${ReasonPhrases.NOT_FOUND} response, no customer found for ID`, async () => {
    const response = await server.get('/followers/12345').send();
    expect(response.statusCode).toBe(StatusCodes.NOT_FOUND);
  });
});

describe('POST Follower', () => {
  it.todo(`${ReasonPhrases.OK} response`);

  it.todo(`${ReasonPhrases.BAD_REQUEST} response`);

  it.todo(`${ReasonPhrases.INTERNAL_SERVER_ERROR} response`);
});
