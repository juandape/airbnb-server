const homesRoute = require('./src/api/Homes/Homes.route');
const userRoute = require('./src/api/Users/Users.route');
const reservationRoute = require('./src/api/Reservations/reservation.route');
const commentsRoute = require('./src/api/Comments/Comments.route');
const uploadRouter = require('./src/api/Upload/index');
const formData = require('./src/api/Utils/formData');
const paymentsRoute = require('./src/api/Payments/Payment.route');

function router(app) {
  /**
 * @openapi
 * /api/homes:
 *   get:
 *     tags:
 *       - Homes
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
  app.use('/api/homes', homesRoute);
  /**
 * @openapi
 * /api/user:
 *   get:
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
  app.use('/api/user', userRoute);
  /**
 * @openapi
 * /api/reservations:
 *   get:
 *     tags:
 *       - Reservations
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
  app.use('/api/reservations', reservationRoute);
  /**
 * @openapi
 * /api/comments:
 *   get:
 *     tags:
 *       - Comments
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
  app.use('/api/comments', commentsRoute);
  /**
 * @openapi
 * /api/upload:
 *   get:
 *     tags:
 *       - Uploads
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
  app.use('/api/upload', uploadRouter);
  /**
 * @openapi
 * /api/payments:
 *   get:
 *     tags:
 *       - Payments
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
  app.use('/api/payments', paymentsRoute);

  // app.post('/prueba', formData, (req, res) => {
  //   res.status(200).json({ ...req.body });
  // });
}

module.exports = router;
