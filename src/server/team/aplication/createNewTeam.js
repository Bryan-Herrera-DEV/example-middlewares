/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const Team = require('../domain/teams-model');
const Usuario = require('../../user/domain/user-model');
const response = require("../../../middlewares/responses.handler");

const createNewTeam = (req, res) => {
  const { body, user } = req;

  Usuario.findById(user.user._id, (err, userDB) => {
    if (err) {
      response.internalServerError(res, err);
    }
    if (!userDB) {
      response.badRequest(res, {
        message: 'User not found',
      });
    }
    const rand = Math.floor(Math.random() * 15) + 1;
    const randD = Math.floor(Math.random() * 15) + 1;

    const ownerN = `${rand * randD}_${userDB._id}`;

    const newTeam = new Team({
      name: body.team_name,
      owner: ownerN.toString(),
    });

    // creamos el nuevo team
    newTeam.save((errD, teamDB) => {
      if (errD) {
        return response.internalServerError(res, errD);
      }
      if (!teamDB) {
        return response.badRequest(res, {
          message: 'Team error',
        });
      }

      // updateamos el t_owner[] del usuario
      Usuario.findByIdAndUpdate(
        userDB._id,
        { $push: { t_owner: teamDB._id.toString() } },
        { new: true },
        (errU, userDBU) => {
          if (errU) {
            return response.internalServerError(res, errU);
          }
          if (!userDBU) {
            return response.badRequest(res, {
              message: 'User not found',
            });
          }
          return response.created(res, {
            user: userDBU,
            new_team: teamDB,
          });
        },
      );
    });
  });
};

module.exports = {
  createNewTeam,
};
