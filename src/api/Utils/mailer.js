const { Resend } = require('resend');
// const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(process.env.RESEND_API_KEY);
const mailSender = process.env.MAIL_SENDER;

async function sendMail(user) {
  try {
    const data = await resend.emails.send({
      from: `${mailSender} <onboarding@resend.dev>`,
      to: user.email,
      subject: 'Bienvenido',
      html: `
      <div>
        <h1> Bienvenido <strong>${user.name}</strong></h1>
        <p> Gracias por registrarse en AirbnbClone-top24 </p>
        <p> esperamos que cree muchas casas ficticias y </p>
        <p> tambien pueda "utilizar" las de los demas </p>
      </div>
    `,
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  sendMail,
};




// function welcome(user) {
//   return {
//     from: `"${process.env.MAIL_USERNAME}"<${process.env.MAIL_USER}>`,
//     to: user.email,
//     subject: 'Bienvenido',
//     html: `
//       <div>
//         <h1> Bienvenido ${user.name}</h1>
//         <p> Gracias por registrarse en AirbnbClone-top24 </p>
//         <p> esperamos que cree muchas casas ficticias y </p>
//         <p> tambien pueda "utilizar" las de los demas </p>
//       </div>
//     `,
//     text: `Bienvenido ${user.name}`,
//   };
// }


// exports.transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASSWORD,
//   },
// });

// exports.verify = async (transporter) => {
//   const connection = await transporter.verify();

//   if (connection) {
//     console.log('Server is ready to take our messages');
//   }
// };
