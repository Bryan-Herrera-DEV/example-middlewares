const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    title: {
      type: String,
      default: 'You have been invited to a new team',
      required: false,
    },
    message: {
      type: String,
      required: [true, 'El lider es necesario'],
      unique: false,
    },
    id_team: {
      type: String,
      required: true,
    },
    id_invited: {
      type: String,
      required: true,
    },
    tareas: {
      type: Array,
      required: false,
      default: [],
    },
  },
);

module.exports = mongoose.model('Team', teamSchema);
