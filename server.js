// import express from 'express';

// import salesrouter from './ROUTE/router.js';

// import ('./CONFIG/config.js');

// const app = express();
// app.use(express.json());
// app.use('/api/v1',salesrouter)

// const port = 2002;
// app.listen(port, () => {
//     console.log(`app is listening on port:` + port)
// });

import express from 'express';

import salesrouter from './ROUTE/router.js';

import ('./CONFIG/config.js');

const app = express();
app.use(express.json());
app.use('/api/v1',salesrouter)

const port = 1000;
app.listen(port, () => {
    console.log(`listening on port:` + port)
});