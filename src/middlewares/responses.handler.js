// const internals = {
//   codes: new Map([
//     [100, 'Continue'],
//     [101, 'Switching Protocols'],
//     [102, 'Processing'],
//     [200, 'OK'], // hasta aqui informativas
//     [201, 'Created'],
//     [202, 'Accepted'],
//     [203, 'Non-Authoritative Information'],
//     [204, 'No Content'],
//     [205, 'Reset Content'],
//     [206, 'Partial Content'],
//     [207, 'Multi-Status'], // hasta aqui confirmativas
//     [300, 'Multiple Choices'],
//     [301, 'Moved Permanently'],
//     [302, 'Moved Temporarily'],
//     [303, 'See Other'],
//     [304, 'Not Modified'],
//     [305, 'Use Proxy'],
//     [307, 'Temporary Redirect'], // hasta aqui redirecciones
//     [400, 'Bad Request'],
//     [401, 'Unauthorized'],
//     [402, 'Payment Required'],
//     [403, 'Forbidden'],
//     [404, 'Not Found'],
//     [405, 'Method Not Allowed'],
//     [406, 'Not Acceptable'],
//     [407, 'Proxy Authentication Required'],
//     [408, 'Request Time-out'],
//     [409, 'Conflict'],
//     [410, 'Gone'],
//     [411, 'Length Required'],
//     [412, 'Precondition Failed'],
//     [413, 'Request Entity Too Large'],
//     [414, 'Request-URI Too Large'],
//     [415, 'Unsupported Media Type'],
//     [416, 'Requested Range Not Satisfiable'],
//     [417, 'Expectation Failed'],
//     [418, 'I\'m a teapot'],
//     [422, 'Unprocessable Entity'],
//     [423, 'Locked'],
//     [424, 'Failed Dependency'],
//     [425, 'Too Early'],
//     [426, 'Upgrade Required'],
//     [428, 'Precondition Required'],
//     [429, 'Too Many Requests'],
//     [431, 'Request Header Fields Too Large'],
//     [451, 'Unavailable For Legal Reasons'], // hasta aqui errores
//     [500, 'Internal Server Error'],
//     [501, 'Not Implemented'],
//     [502, 'Bad Gateway'],
//     [503, 'Service Unavailable'],
//     [504, 'Gateway Time-out'],
//     [505, 'HTTP Version Not Supported'],
//     [506, 'Variant Also Negotiates'],
//     [507, 'Insufficient Storage'],
//     [509, 'Bandwidth Limit Exceeded'],
//     [510, 'Not Extended'],
//     [511, 'Network Authentication Required'], // hasta aqui errores de servidor
//   ]),
// };

const normalResponse = (res, data) => {
  res.status(200).json({
    ok: true,
    status: 'success',
    statusCode: 200,
    details: data,
  });
};

const created = (res, data) => {
  res.status(201).json({
    ok: true,
    status: 'success',
    statusCode: 201,
    details: data,
  });
};

const badRequest = (res, data) => {
  res.status(400).json({
    ok: false,
    status: 'bad request',
    statusCode: 400,
    details: data,
  });
};

const notFound = (res, data) => {
  res.status(404).json({
    ok: false,
    status: 'not found',
    statusCode: 404,
    details: data,
  });
};

const internalServerError = (res, data, port) => {
  res.status(port || 500).json({
    ok: false,
    status: 'internal server error',
    statusCode: port || 500,
    details: data,
  });
};

const unauthorized = (res, data) => {
  res.status(401).json({
    ok: false,
    status: 'unauthorized',
    statusCode: 401,
    details: data,
  });
};

module.exports = {
  normalResponse, created, badRequest, notFound, internalServerError, unauthorized,
};
