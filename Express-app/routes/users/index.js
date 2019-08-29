import { Router } from 'express';
import { Users } from '../../controllers';

const router = Router();

router.post('/create', Users.create);
router.post('/login', Users.login);
router.get('/', Users.retrieveUsers);
router.put('/edit/:userId', Users.editUserProfile);
router.delete('/delete/:userId', Users.destroUserAccount);

export default router;
