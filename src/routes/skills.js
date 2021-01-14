const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const skillsController = require('../controllers/skills');

router.get('/', skillsController.getSkills);
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name skill cannot be empty'),
    body('percentage')
      .notEmpty()
      .withMessage('Percentage cannot be empty')
      .isInt({min: 0, max: 100})
      .withMessage(
        'Your percentage must be an integer with 0-100 range values'
      ),
  ],
  skillsController.createSkill
);

module.exports = router;
