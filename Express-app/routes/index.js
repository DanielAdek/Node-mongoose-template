import { Router } from 'express';
import UserOperations from './users';

const router = Router();

router.use('/users', UserOperations);

export default router;