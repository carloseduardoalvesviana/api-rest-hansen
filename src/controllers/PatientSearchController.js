const User = require('../models/User');
const Image = require('../models/Image');
const Diagnosis = require('../models/Diagnosis');
const ParseyScale = require('../models/ParsleyScale');
const ParticipationScale = require('../models/ParticipationScale');
const NeurologicalAssessment = require('../models/NeurologicalAssessment');
const AssessmentOfDisabilityDegree = require('../models/AssessmentOfDisabilityDegree');
const ActivityLimitationScreeningAndRisAwareness = require('../models/ActivityLimitationScreeningAndRisAwareness');

const { isValidCPF } = require('../utils/Cpf');

module.exports = {
  async index(req, res) {
    const { cpf } = req.body;

    const cpfValid = isValidCPF(cpf);
    if (cpfValid == false)
      return res.status(400).json({ message: 'Cpf Invalido!' });

    const patient = await User.findOne({ cpf: cpf, patient: true });
    if (!patient)
      return res.status(400).json({ message: 'Paciente não existe!' });

    try {
      const patient = await User.findOne({ cpf: cpf });
      const ids = patient.patients_contacts;
      const patient_infor = await User.find({ _id: ids });

      let parsey_scale = await ParseyScale.find({ patient_id: patient._id });
      if (!parsey_scale) {
        parsey_scale = 'Nenhuma escala salsa encontrada!';
      }

      let participation_scale = await ParticipationScale.find({
        patient_id: patient._id,
      });
      if (!participation_scale) {
        parsey_scale = 'Nenhuma escala de participação encontrada!';
      }

      let assessment_of_disability_degree =
        await AssessmentOfDisabilityDegree.find({ patient_id: patient._id });
      if (!assessment_of_disability_degree) {
        assessment_of_disability_degree =
          'Nenhuma Avaliação do Grau de Incapacidade encontrada!';
      }

      let neurological_assessment = await NeurologicalAssessment.find({
        patient_id: patient._id,
      });
      if (!neurological_assessment) {
        neurological_assessment = 'Nenhuma Avaliação Neurológica encontrada!';
      }

      let diagnosis = await Diagnosis.find({ patient_id: patient._id });
      if (!diagnosis) {
        diagnosis = 'Nenhum diagnostico encontrado!';
      }

      let activity_limitation_screening_and_risAwareness =
        await ActivityLimitationScreeningAndRisAwareness.find({
          patient_id: patient._id,
        });
      if (!activity_limitation_screening_and_risAwareness) {
        activity_limitation_screening_and_risAwareness =
          'Nenhuma Triagem de Limitação de Atividade e Consciência de Risco encontrada!';
      }

      const images = await Image.find({ id_user: patient._id });

      return res.status(200).json({
        patient_infor,
        patient,
        parsey_scale,
        participation_scale,
        assessment_of_disability_degree,
        neurological_assessment,
        activity_limitation_screening_and_risAwareness,
        diagnosis,
        images,
      });

    } catch (error) {
      return res
        .status(400)
        .json({
          message:
            'Tivemos um pequeno problema em procurar o paciente, tente novamente',
        });
    }
  },
};
