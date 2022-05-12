const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es necesario'],
      unique: [true, 'El nombre ya existe'],
    },
    owner: {
      type: String,
      required: [true, 'El lider es necesario'],
      unique: false,
    },
    admins: {
      type: Array,
      required: false,
      default: [],
    },
    participants: {
      type: Array,
      required: false,
      default: [],
    },
    tareas: {
      type: Array,
      required: false,
      default: [],
    },
  },
);

module.exports = mongoose.model('Team', teamSchema);
