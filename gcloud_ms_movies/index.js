import express from 'express';
import { processAction } from './controller.js';
const app = express();
app.use(express.json());
//app.get('/movie', getAllAction);
app.post('/movie', processAction);
// was port:8181 locally - using 8080 to test on gcloud.
app.listen(8080, () => console.log('Movie Service is listening'));
//# sourceMappingURL=index.js.map