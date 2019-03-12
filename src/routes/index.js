import { Router } from 'express';
import * as ResponseObjects from '../utils/responseObjects';

const router = new Router();

// Searches for quotes
router.get(
  '/quotes',
  async (req, res) => {
    // Perform the search
    const results = { msg: 'hehe I mocked it' };

    // Return the result to the requester
    ResponseObjects.Success(res, {
      results,
    });
  },
);

/**
 * For Testing / checking if the service is running successfully
 */
router.get(
  '/healthCheck',
  (req, res) => {
    ResponseObjects.Success(res, {
      status: 'up',
    });
  },
);

module.exports = router;
