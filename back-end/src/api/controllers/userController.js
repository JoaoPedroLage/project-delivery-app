const UserService = require('../services/userService');

class UserController {
  constructor() {
    this.userService = new UserService();

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll(_req, res, _next) {
    const { code, users, message } = await this.userService.getAll();

    if (!users) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(users);
  }

  async getById(req, res, _next) {
    const { id } = req.params;

    const { code, user, message } = await this.userService.getById(id);

    if (!user) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(user);
  }


}

module.exports = UserController;