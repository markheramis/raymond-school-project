

const authRegisterController = require('../controllers/auth/registerController');
const authVerifyController = require('../controllers/auth/verifyController');
const authLoginController = require('../controllers/auth/loginController');
const authLogoutController = require('../controllers/auth/logoutController');
const authVerifyEditEmailController = require('../controllers/auth/verifyEditEmailController');
const authResetPassword = require('../controllers/auth/resetPassword/verifyForgot_password');

const print = require('../controllers/printController');

//admin
const adminCourseController = require('../controllers/admin/courseController');
const adminEnrollmentController = require('../controllers/admin/enrollmentController');
const adminSubjectController = require('../controllers/admin/subjectController');
const adminsectionController = require('../controllers/admin/sectionController');
const adminCategoryController = require('../controllers/admin/categoryController');
//user
const userIndexController = require('../controllers/student/indexController');
const userProfileController = require('../controllers/student/profileController');
const userCourseController = require('../controllers/student/courseController');
const userEnrollmentController = require('../controllers/student/enrollmentConroller');

module.exports = function(app){
    //user
    app.get('/', userIndexController.index);
    app.get('/profile', userProfileController.index);
    app.post('/profile/update', userProfileController.update);
    app.get('/courses', userCourseController.index);
    app.post('/course/enroll', userCourseController.enroll);
    app.get('/subjects', userEnrollmentController.index);
    
    //admin
    app.get('/admin/course/add', adminCourseController.index)
    app.post('/admin/course/add', adminCourseController.doCreate)
    app.get('/admin/enrollments', adminEnrollmentController.index)
    app.post('/admin/enrollment/doEnroll', adminEnrollmentController.doEnroll)
    app.get('/admin/section/add', adminsectionController.index)
    app.post('/admin/section/add', adminsectionController.doCreate)
    app.get('/admin/subject/add', adminSubjectController.index)
    app.post('/admin/subject/add', adminSubjectController.doCreate)
    app.get('/admin/category', adminCategoryController.index);
    app.post('/admin/category', adminCategoryController.actions);


    //print enrollment
    app.post('/print', print.print)







    //auth
    app.get('/login', authLoginController.login);
    app.post('/doLogin', authLoginController.doLogin);
    app.get('/register', authRegisterController.register);
    app.post('/doRegister', authRegisterController.doRegister);
    app.get('/verify', authVerifyController.verify)
    app.post('/verify', authVerifyController.doVerify)
    app.get('/verify/email', authVerifyEditEmailController.verify)
    app.post('/verify/email', authVerifyEditEmailController.doVerify)
    app.get('/logout', authLogoutController.logout);
    //forget_password
    app.get('/email', authResetPassword.index);
    app.post('/email', authResetPassword.email);
    app.get('/email/verify', authResetPassword.verify);
    app.post('/email/verify', authResetPassword.doVerify);
    app.get('/new/password/verify', authResetPassword.newPassword);
    app.post('/new/password/verify', authResetPassword.doNewPassword);
}