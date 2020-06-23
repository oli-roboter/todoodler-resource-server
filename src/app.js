import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res
      .status(400)
      .send({
        data: {
          success: false,
          error: 'Bad request, username or password are not valid',
        },
      });
  }
  next();
});

function expressCallback(requestHandler) {
  return function reqRes(req, res) {
    const httpRequest = adaptRequest(req);
    requestHandler(httpRequest)
      .then(({ headers, statusCode, data }) => {
        res
          .set(headers)
          .status(statusCode)
          .send(data);
      })
      .catch((e) => {
        winston.error(e);
        res.send(status(500).end());
      });
  };
}

const apiRoot = process.env.DM_API_ROOT
const app = express()
app.use(bodyParser.json())
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.post(`${apiRoot}/comments`, makeCallback(postComment))
app.delete(`${apiRoot}/comments/:id`, makeCallback(deleteComment))
app.delete(`${apiRoot}/comments`, makeCallback(deleteComment))
app.patch(`${apiRoot}/comments/:id`, makeCallback(patchComment))
app.patch(`${apiRoot}/comments`, makeCallback(patchComment))
app.get(`${apiRoot}/comments`, makeCallback(getComments))
app.use(makeCallback(notFound))

export default app;
