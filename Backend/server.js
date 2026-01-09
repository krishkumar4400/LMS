import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const port = process.env.PORT || 4000;

app.get('/', (req,res) => {
    res.send("Hello Express"); 
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); 
});