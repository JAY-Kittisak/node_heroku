import { Request, Response } from 'express';

export enum RoleOptions {
  client = 'CLIENT',
  sale = 'SALE',
  reader = 'READER',
  itemEditor = 'ITEMEDITOR',
  admin = 'ADMIN',
  superAdmin = 'SUPERADMIN',
}

export interface AppRequest extends Request {
  userId?: string;
  // jobId?: string;
  tokenVersion?: number;
}

export interface AppContext {
  req: AppRequest;
  res: Response;
}

export interface AppJobIt extends Request {
  jobId?: string;
  username?: number;
}
