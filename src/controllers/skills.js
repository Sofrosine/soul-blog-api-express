const skillModel = require('../models/skills');

exports.getSkills = async (req, res, next) => {
  try {
    const getSkillResponse = await skillModel.getSkills();
    res.status(200).json({
      message: 'Call API Success',
      data: getSkillResponse,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi Kesalahan',
      error: error,
    });
  }
  next();
};

exports.createSkill = async (req, res, next) => {
  try {
    const createSkillResponse = await skillModel.createSkill(req.body);
    res.status(201).json({
      message: 'Skill Created',
      data: createSkillResponse,
    });
  } catch (error) {
    console.log('error nichh');
  }
  next();
};
