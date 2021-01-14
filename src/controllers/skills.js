const skillModel = require('../models/skills');
const {validationResult} = require('express-validator');

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
  const {name, percentage} = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    let err = new Error('Invalid Input Value');
    err.errorStatus = 400;
    err.data = errors.array();
    return next(err);
  }

  try {
    const createSkillResponse = await skillModel.createSkill(req.body);
    res.status(201).json({
      message: 'Skill Created',
      data: {
        id: createSkillResponse.insertId,
        name,
        percentage,
      },
    });
  } catch (error) {
    if (!name && !percentage) {
      res.json(400).json({
        message: 'Terjadi kesalahan input',
      });
    }
  }
  next();
};
