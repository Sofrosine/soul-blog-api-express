const express = require('express');

const router = express.Router();

const skillsController = require('../controllers/skills');

router.get('/', skillsController.getSkills);
router.post('/', skillsController.createSkill);

module.exports = router;
