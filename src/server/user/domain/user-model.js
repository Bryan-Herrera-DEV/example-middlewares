const mongoose = require('mongoose');
const mongooseUnique = require('mongoose-unique-validator');

// eslint-disable-next-line prefer-destructuring
const Schema = mongoose.Schema;

const validRoles = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VALUE} no es un rol valido',
};

const usuarioSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es necesario'],
    },
    email: {
      type: String,
      required: [true, 'El correo es necesario'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria'],
    },
    role: {
      type: String,
      required: false,
      default: 'USER_ROLE',
      enum: validRoles,
    },
    state: {
      type: Boolean,
      required: false,
      default: true,
    },
    t_owner: {
      type: Array,
      required: false,
      default: [],
    },
    t_admin: {
      type: Array,
      required: false,
      default: [],
    },
    t_participant: {
      type: Array,
      required: false,
      default: [],
    },
    tasks: {
      type: Array,
      required: false,
      default: [],
    },
  },
);

// para no mostrar las contraseñas cuando se muestre el usuario
usuarioSchema.methods.toJSON = function _() {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

usuarioSchema.plugin(mongooseUnique, {
  message: '{PATH} debe de ser unico',
});

module.exports = mongoose.model('Usuario', usuarioSchema);
