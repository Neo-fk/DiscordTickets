const express = require('express');
const app = express();
app.get('/',(req, res) =>res.send('<center><h2><font color ="red">Eros E City Tickets bot alive now...</h2></center></font>'))
const port = 2000;
app.listen(port, () => console.log(`Bot running on http://node03.marshalxp.xyz:${port}`));
