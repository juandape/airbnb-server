const homesRoute = require('./src/api/Homes/homes.route');
const userRoute = require('./src/api/Users/Users.route');
const reservationRoute = require('./src/api/Reservations/reservation.route');
const commentsRoute = require('./src/api/Comments/Comments.route');
const formData = require('./src/api/Utils/formData');
// const uploadRouter = require('./api/Utils/upload');

function router(app) {
  app.use('/homes', homesRoute);
  app.use('/user', userRoute);
  app.use('/reservations', reservationRoute);
  app.use('/comments', commentsRoute);
  // app.use('/api/upload',uploadRouter);
  app.post('/prueba', formData, (req, res) => {
    res.status(200).json({ ...req.body });
  });
}

module.exports = router;