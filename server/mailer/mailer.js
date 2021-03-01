const mailjet = require ('node-mailjet')
.connect('7c4969d92fddeb90c9ec2bfb0d42a635', '15f249843c462ba5ec5f7befca1a621a')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "no-reply@ICTIncidentreport.com",
        "Name": "oluwashola"
      },
      "To": [
        {
          "Email": "oluwasholaogundipe@globalplusonline.com",
          "Name": "oluwashola"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
