const homesRoute = require('./src/api/Homes/Homes.route');
const userRoute = require('./src/api/Users/Users.route');
const reservationRoute = require('./src/api/Reservations/reservation.route');
const commentsRoute = require('./src/api/Comments/Comments.route');
const uploadRouter = require('./src/api/Upload/index');
const formData = require('./src/api/Utils/formData');
const paymentsRoute = require('./src/api/Payments/Payment.route');

function router(app) {
  app.use('/api/homes', homesRoute);
  /**
 * @openapi
 * /api/homes:
 *   get:
 *     tags:
 *       - Homes
 *     responses:
 *       200:
 *         description: Get all homes
 *         content:
 *           application/json:
 *             schema:
               required: [ 'price', 'images', 'amenities', 'capacity', 'dates', 'rooms' ]
                properties:
                  location: [ type: 'object', properties: [Object] ]
                  price: [ type: 'number' ]
                  images: [ type: 'array', items: [Object] ]
                  amenities: [ type: 'array', items: [Object] ]
                  capacity: [ type: 'number' ]
                  totalreviews: [ type: 'number', required: false ]
                  totalScore: [ type: 'number', required: false ]
                  scorearrays: [ type: 'object', properties: [Object] ]
                  scorecleanliness: [ type: 'number', required: false ]
                  scoreaccuracy: [ type: 'number', required: false ]
                  scorecommunication: [ type: 'number', required: false ]
                  scorelocation: [ type: 'number', required: false ]
                  scorecheckin: [ type: 'number', required: false ]
                  scorevalue: [ type: 'number', required: false ]
                  dates: [ type: 'string' ]
                  rooms: [ type: 'number' ]
                  _id: [ type: 'string' ]


  */

  app.use('/api/user', userRoute);
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
   *               required: [ 'name', 'email', 'password', 'rol' ]
                    properties:
                      name: [ type: 'string' ]
                      email: [ type: 'string' ]
                      password: [ type: 'string' ]
                      rol: [ type: 'string', enum: [Object] ]
                      location: [ type: 'string', required: false ]
                      reservations: [ type: 'array', required: false, items: [Object] ]
                      profileimg: [ type: 'string', required: false ]
                      homes: [ type: 'array', required: false, items: [Object] ]
                      comments: [ type: 'array', required: false, items: [Object] ]
                      _id: [ type: 'string' ]
   */
  app.use('/api/reservations', reservationRoute);
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
   *               required: [ 'name', 'email', 'password', 'rol' ]
                    properties:
                      name: [ type: 'string' ]
                      email: [ type: 'string' ]
                      password: [ type: 'string' ]
                      rol: [ type: 'string', enum: [Object] ]
                      location: [ type: 'string', required: false ]
                      reservations: [ type: 'array', required: false, items: [Object] ]
                      profileimg: [ type: 'string', required: false ]
                      homes: [ type: 'array', required: false, items: [Object] ]
                      comments: [ type: 'array', required: false, items: [Object] ]
                      _id: [ type: 'string' ]

  */

  app.use('/api/comments', commentsRoute);
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
   *               required: [ 'initialDdate', 'finalDate', 'price', 'guests', 'home', 'user' ]
                    properties:
                      initialDdate: [ type: 'number' ]
                      finalDate: [ type: 'number' ]
                      price: [ type: 'number' ]
                      guests: [ type: 'object', properties: [Object] ]
                      home: [ type: 'object', properties: []]
                      user: [ type: 'object', properties: []]
                      _id: [ type: 'string' ]
  */

  app.use('/api/payments', paymentsRoute);
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
   *               properties:
                    cardBrand: [ type: 'string', required: false ]
                    cardNumber: [ type: 'string', required: false ]
                    cardExpMonth: [ type: 'string', required: false ]
                    cardExpYear: [ type: 'string', required: false ]
                    cardCvc: [ type: 'string', required: false ]
                    cardPostalCode: [ type: 'string', required: false ]
                    userId: [ type: 'object', required: false, properties: [] ]
                    _id: [ type: 'string' ]
   */

  app.use('/api/upload', uploadRouter);

  // app.post('/prueba', formData, (req, res) => {
  //   res.status(200).json({ ...req.body ]);
  // ]);
}

module.exports = router;
