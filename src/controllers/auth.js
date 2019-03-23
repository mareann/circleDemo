import * as ResponseObjects from '../utils/responseObjects';

import {
  UserService
} from '../services';

class AuthController {
  static async login(req, res, next) {
    const {
      username,
      password,
    } = req.body;

    if (!username || !password) {
      ResponseObjects.InvalidParameters(res, 'Missing one or both of username, password');
    }

    // Load the user by the username and password
    const user = await UserService.verifyPassword(username, password);

    // Return the result to the requester
    if (user) {
      ResponseObjects.Success(res, { token: 'zajekjcd' });
    } else {
      ResponseObjects.InvalidLogin(res);
    }
  }
}

export default AuthController;
