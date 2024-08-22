import { createTransport } from "nodemailer";
import { useEffect } from "react";



function Mail() {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "maddison53@ethereal.email",//gmail crear linea 17
          pass: "jn7jnAPss4f63QBp6D",//google
        },
      });

      async function main() {
        
        const info = await transporter.sendMail({
          from: '"//mi gmail', 
          to: "mi gmail", 
          subject: "asunto mensaje", 
          text: "",
          html: "<b>Hello world?</b>", // html body
        });
      
        
       
      }
      
useEffect(()=> main().catch(console.error),[])
    main().then (()=>alert("envio exitoso") ).catch(console.error);


    return (
      <></>



    );
  }
  
  export default Mail;