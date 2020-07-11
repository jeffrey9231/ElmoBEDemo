import { Router } from "express";
import Joi from "joi";
import { createValidator } from "express-joi-validation";

import { search, details } from "./controller";

const router = new Router();
const validator = createValidator({ passError: true });

// validation
const searchSchema = Joi.object({
  q: Joi.string().required(),
});

const detailsSchema = Joi.object({
  id: Joi.string().required(),
});

router.get("/search", validator.query(searchSchema), search);

router.get("/details", validator.query(detailsSchema), details);

export default router;
