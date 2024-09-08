const express = require('express');
const app = express();
const port = 3000; 

const myData = {
    first_name: 'DAN KEN SHEN', 
    last_name: 'PENERA',  
    age: 20,            
    school_email: 'daur.penera.swu@phinmaed.com' 
};

app.get('/firstname', (req, res) => {
    res.send(myData.first_name.toUpperCase());
});

app.get('/lastname', (req, res) => {
    res.send(myData.last_name.toUpperCase());
});

app.get('/age', (req, res) => {
    res.send(myData.age.toString());
});

app.get('/schoolemail', (req, res) => {
    res.send(myData.school_email);
});

app.get('/mydata', (req, res) => {
    res.json({
        first_name: myData.first_name.toUpperCase(),
        last_name: myData.last_name.toUpperCase(),
        age: myData.age,
        school_email: myData.school_email
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
