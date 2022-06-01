const LoginService = require('../services/loginService');
const TokenGenerator = require('../tokenGenerator');

class LoginController {
  constructor() {
    this.loginService = new LoginService();
    this.tokenGenerator = new TokenGenerator();

    this.login = this.login.bind(this);
    this.validation = this.validation.bind(this);
  }

  async login(req, res, _next) {
    const { email, password } = req.body;

    const { code, user, message } = await this.loginService.login(email, password);

    if (!user) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(user);
  }

  async validation(req, res, _next) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(400).json({ message: 'Unauthorized' });
    }

    const decodedUser = await this.tokenGenerator.decodeToken(authorization);

    return res.status(200).json(decodedUser.role);
  }
}

module.exports = LoginController;