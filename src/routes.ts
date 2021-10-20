import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticaUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { ensureAunthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAunthenticated, new CreateMessageController().handle)

export { router }