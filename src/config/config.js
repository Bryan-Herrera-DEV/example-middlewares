// == Puerto ==
process.env.PORT = process.env.PORT || 3000;

// == Entornos ==
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// == vencimiento del token ==
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// == seed autenticacion ==
process.env.SEED = process.env.SEED || 'JLqsvj969gJYJ88LJs8Sj3y8j5Lñ39l35Y9gvjdY';

// == BASE DE DATOS ==
let urlDB;
if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/todoappmia';
} else {
  urlDB = 'mongodb+srv://root:root@cluster0.glx5t.mongodb.net/todoappmia';
}
urlDB = 'mongodb://localhost:27017/todoappmia';

process.env.URLDB = urlDB;

// == GOOGLE CLIENT ID ==
process.env.CLIENT_ID = process.env.CLIENT_ID || '867887461445-f7jgtgloh1fc0jgs2p2d8ap6oqkb07v8.apps.googleusercontent.com';
