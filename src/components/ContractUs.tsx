import { useState } from "react";

interface ContactUsProps { 
  name?: string;
  email: string;
  age: number;
}


export const ContactUs = ({name, email, age} : ContactUsProps) => { 
  

    return (
        <p>
          {name} - {email} - age: {age}.
        </p>
    )
}