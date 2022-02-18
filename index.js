const express = require("express");
const userRouter = require("./src/routes/user.routes");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json())
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
