const express = require('express');
const router = express.Router();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const doctorRouter = require('./routes/doctor');
const adminRouter = require('./routes/admin');

router.use('/', indexRouter);
router.use('/user', usersRouter);
router.use('/auth', authRouter);
router.use('/doctor', doctorRouter);
router.use('/admin', adminRouter);

module.exports = router;