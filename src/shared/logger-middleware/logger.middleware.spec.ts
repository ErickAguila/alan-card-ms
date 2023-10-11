import { Request, NextFunction } from 'express';

import { LoggerMiddleware } from './logger.middleware';

const mockRequest = {
  body: {
    firstName: '',
    lastName: '',
  },
  get: jest.fn(),
} as unknown as Request;

const mockResponse: any = {
  json: jest.fn(),
  status: jest.fn(),
  on: jest.fn().mockImplementationOnce(async (data, callback) => {
    callback();
  }),
};

const mockNext: NextFunction = jest.fn();

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware()).toBeDefined();
  });

  it('should be defined', () => {
    new LoggerMiddleware().use(mockRequest, mockResponse, mockNext);
    expect(mockNext).toHaveBeenCalledTimes(1);
  });
});
