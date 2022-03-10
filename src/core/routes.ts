import { Router } from 'express';
import { CreateComplimentController } from '../controllers/Compliment/CreateComplimentController';
import { ListUserReceiveComplimentsController } from '../controllers/Compliment/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from '../controllers/Compliment/ListUserSendComplimentsController';
import { CreateTagController } from '../controllers/Tag/CreateTagController';
import { ListTagsController } from '../controllers/Tag/ListTagsController';
import { AuthenticateUserController } from '../controllers/User/AuthenticateUserController';
import { CreateUserController } from '../controllers/User/CreateUserController';
import { ListUsersController } from '../controllers/User/ListUsersController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();

router.post("/users", createUserController.handle);
router.post("/authenticate", authenticateUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);


router.post("/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.get("/tags",
  ensureAuthenticated,
  listTagsController.handle
);


router.post("/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);
router.get("/users/compliments/send",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);
router.get("/users/compliments/receive",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

export { router };