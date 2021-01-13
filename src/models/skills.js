const conn = require('../configs/connection');

module.exports = {
  createSkill: query => {
    return new Promise((resolve, reject) => {
      conn.query(
        `INSERT INTO skills SET name='${query.name}', percentage='${query.percentage}'`,
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  getSkills: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM skills', (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
};
