const expres = require('express');
const routes = expres.Router();

const VerifyCpfPassController = require('./controllers/VerifyCpfPassPatientController');
const authorization = require('./middlewares/Auth');
const DiagnosisController = require('./controllers/DiagnosisController');
const ActivityLimitationScreeningAndRisAwareness = require('./controllers/ActivityLimitationScreeningAndRisAwarenessController');
const AssessmentOfDisabilityDegree = require('./controllers/AssessmentOfDisabilityDegreeController');
const ParticipationScaleController = require('./controllers/ParticipationScaleController');
const NeurologicalAssessmentController = require('./controllers/NeurologicalAssessmentController');

const ParsleyScaleController = require('./controllers/ParsleyScaleController');
const PatientController = require('./controllers/PatientController');
const PatientSearchController = require('./controllers/PatientSearchController');
const NotificationController = require('./controllers/NotificationController');
const TimeControlController = require('./controllers/TimeControlController');
const ReportController = require('./controllers/ReportController');
const CaseContactController = require('./controllers/CaseContactController');
const SpacialController = require('./controllers/SpacialController');

const SessionController = require('./controllers/SessionController');
const DoctorController = require('./controllers/DoctorController');
const NurseController = require('./controllers/NurseController');
const SessionDoctorController = require('./controllers/SessionDoctorController');
const PatientSearchNeighborhoodController = require('./controllers/PatientSearchNeighborhoodController');
const UpdateLocalizationPatientController = require('./controllers/UpdateLocalizationPatientController');

const AdminController = require('./controllers/AdminController');
const CheckPatientController = require('./controllers/CheckPatientController');
const NotificationMessageController = require('./controllers/NofiticationMessageController');
const RecoveryPassword = require('./controllers/RecoveryPassword');
const UpdatePermissions = require('./controllers/UpdatePermissions');
const ApprovedRegisterController = require('./controllers/ApprovedRegisterController');
const UserNotApprovedController = require('./controllers/UserNotApproved');

const upload = require('./config/multer');
const UploadImageExameController = require('./controllers/UploadImageExameController');
const PatientPreSignupController = require('./controllers/PatientPreSignupController');

// Admin all
routes.get('/admin/all', AdminController.index);

// Pacientes Pré Cadastro
routes.post('/patients/pre', authorization.auth, PatientPreSignupController.store);

routes.put('/users/update/permissions/admin/:id', authorization.auth, UpdatePermissions.store);

routes.post('/upload/image/exame', upload.imageUpload.single('image'), authorization.auth, UploadImageExameController.store);

// Aprovar usuario
routes.post('/approved/user', ApprovedRegisterController.index);

// Users nao aprovados
routes.get('/users/not/approved', authorization.auth, UserNotApprovedController.index);

// Diagnostico
routes.post('/diagnosis', authorization.auth, DiagnosisController.store);
routes.put('/diagnosis/:id', authorization.auth, DiagnosisController.update);

// Pacientes
routes.put('/patients/location/:id', authorization.auth, UpdateLocalizationPatientController.index);
routes.post('/patients', authorization.auth, PatientController.store);
routes.get('/patients', authorization.auth, PatientController.index);
routes.get('/patients/:id', authorization.auth, PatientController.show);
routes.put('/patients/:id', authorization.auth, PatientController.update);
routes.delete('/patients/:id', authorization.auth, PatientController.destroy);

// Patientes
routes.post('/search/patient', authorization.auth, PatientSearchController.index);
routes.post('/search/patient/neighborhood', authorization.auth, PatientSearchNeighborhoodController.index);

// Caso contato
routes.post('/patients/contact/:id', authorization.auth, CaseContactController.store);

// Login
routes.post('/session', SessionController.store);

// Session doctor
routes.post('/session/doctor', SessionDoctorController.index);

// Recuperar senha
routes.post('/recovery/password', RecoveryPassword.index);

// Medicos
routes.post('/doctors', DoctorController.store);

// Notifications Messages
routes.get('/notify', NotificationMessageController.index);

// Enfeimeros
routes.post('/nurses', NurseController.store);

// Admin
routes.post('/admin', AdminController.store);

// Avaliação Neurológica
routes.post('/neurologicalassessment/:id', authorization.auth, NeurologicalAssessmentController.store);

// Avaliação do Grau de Incapacidade
routes.post('/assessmentofdisabilitydegree/:id', authorization.auth, AssessmentOfDisabilityDegree.store);

// Triagem de Limitação de Atividade e Consciência de Risco
routes.post('/activitylimitationscreeningandrisawareness/:id', authorization.auth, ActivityLimitationScreeningAndRisAwareness.store);

// Escala de Participação
routes.post('/participationscale/:id', authorization.auth, ParticipationScaleController.store);

// Salsa Escala
routes.post('/parsleyscale/:id', authorization.auth, ParsleyScaleController.store);

// Notificação
routes.post('/notification', authorization.auth, NotificationController.store);

// Controle temporal paciente
routes.get('/timecontrol/:id', authorization.auth, TimeControlController.index);

// Report
routes.post('/report', authorization.auth, ReportController.index);

// spacial controll
routes.get('/spacial/controll', SpacialController.index);

// route for mobile verification
routes.post('/verifyuser', VerifyCpfPassController.index);

// Check Patient
routes.get('/checkpatient/diagnosis', CheckPatientController.index);

// Inicio
routes.get('/', async (req, res) => {
  res.status(200).json({ message: 'hello' });
});

// Retorna imagem das cartelas
routes.get('/paucibacilar-infantil', async (req, res) => {
  return res.status(200).json({
    message: 'https://i.ibb.co/5YS0mDP/paucibacilar-infantil.png',
  });
});

routes.get('/paucibalicar-adulto', async (req, res) => {
  return res.status(200).json({
    message: 'https://i.ibb.co/QjyMp2M/paucibacilar.png',
  });
});

routes.get('/multibacilar-infantil', async (req, res) => {
  return res.status(200).json({
    message: 'https://i.ibb.co/RTp7WPk/multibacilar-infantil.png',
  });
});

routes.get('/multibacilar-adulto', async (req, res) => {
  return res.status(200).json({
    message: 'https://i.ibb.co/NrgjKcz/multibacilar.png',
  });
});

module.exports = routes;
