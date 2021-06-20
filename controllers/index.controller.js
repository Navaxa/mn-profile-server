const { default: axios } = require('axios');
const sendMail = require('../helpers/email');
const path = require('path');
const juice = require('juice');
const fs = require('fs');
const html = fs.readFileSync(path.join(__dirname, '../view/index.html'));

exports.sendMail = async (req, res) => {
    const { email } = req.body;
    try {

        // await sendMail.send({ email });
        axios({
            method: 'post',
            url: 'https://prod-89.eastus.logic.azure.com:443/workflows/0ddda4613c4b4f17a986806c4f5228f4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=T84bXVfYhGc6llKpaKYn44JAEfPOVolKtwTOUPmG1eA',
            data: {
              to: '15030463@itesa.edu.mx',
              subject: 'Test Logic App',
              message: juice(html.toString())
            },
            headers: {'Content-Type': 'application/json'}
          });

        res.status(200).json({
            ok: true,
            message: 'Working!'
        })

    } catch (err) {
        console.log('Err => ', err);
        res.status(500).json({
            ok: false,
            message: 'Por favor contacte al administrador'
        })
    }

}