export default function makeExpressCallabck(controller) {
  return (req, res) => {
    // console.log('BODY', req.body);
    // console.log('headers', req.headers);
    // console.log('PARAMS', req.params);
    // console.log('QUERY', req.query);
    // console.log('PATH', req.path);
    // console.log('METHOD', req.method);
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      headers: {
        'Content-Type': req.get('Content-Type'),
        Referer: req.get('referer'),
        'User-Agent': req.get('User-Agent'),
        token: req.headers['x-todo-token'],
      },
    };
    controller(httpRequest)
      .then(({ headers, statusCode, data }) => {
        res
          .set(headers)
          .status(statusCode)
          .send(data);
      })
      .catch((e) => res.status(500).send({ resourceServerEerror: e.message }));
  };
}
