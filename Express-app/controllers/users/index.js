import db from '../../models'

export default class Users {
  /**
   * @method create
   * @param {object} req The request object
   * @param {object} res The response object
   * @return {*} json
   */
  static async create (req, res) {
    // YOUR CODE IS REQUIRED
  }

  /**
   * @method login
   * @param {object} req The request object
   * @param {object} res The response object
   * @return {*} json
   */
  static async login (req, res) {
    // YOUR CODE IS REQUIRED
  }

  /**
   * @method retrieveUsers
   * @param {object} req The request object
   * @param {object} res The response object
   * @return {*} json
   */
  static async retrieveUsers (req, res) {

    /**
     * @instruction PICK ONE OF THIS APPROCHES
     */

    // 1. USING PROMISES
    db.Users.find()
      .sort({ createdAt: 'desc' })
      .then(users => {
        return res.status(200).jsend.success({ message: 'Users Found', users })
      })
      .catch(error =>
        res.status(200).jsend.success({ message: 'Proccess Terminated', error })
      )

    // 2. USING ASYNC/AWAIT
    try {
      const users = await db.Users.find().sort({ createdAt: 'desc' })
      return res.status(200).jsend.success({ message: 'Users Found', users })
    } catch (error) {
      return res
        .status(200)
        .jsend.fail({ message: 'Proccess Terminated', error })
    }
  }

  /**
   * @method editUserProfile
   * @param {object} req The request object
   * @param {object} res The response object
   * @return {*} json
   */
  static async editUserProfile (req, res) {
    // YOUR CODE IS REQUIRED
  }

  /**
   * @method destroUserAccount
   * @param {object} req The request object
   * @param {object} res The response object
   * @return {*} json
   */
  static async destroUserAccount (req, res) {
    // YOUR CODE IS REQUIRED
  }
}
