import { Router } from "express";

import search from "./search";

const router = new Router();

/**
 * @apiDefine public access
 *  /v1
 * no auth access for this endpoint.
 */
router.use("/", search);

export default router;
