import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ContactArea } from "../../styles/product.style";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit = async () => {
    if (!name) {
      toast.error("Please Enter Name.", { theme: "dark" });
    } else if (!email) {
      toast.error("Please Enter Email.", { theme: "dark" });
    } else if (!text) {
      toast.error("Please Enter Text.", { theme: "dark" });
    } else {
      await fetch(`https://chimera-backend.vercel.app/mint/mail`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          name,
          email,
          text,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          toast.success("Successfully sent.", { theme: "dark" });
          setName("");
          setEmail("");
          setText("");
        });
    }
  };
  return (
    <ContactArea>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        cols={30}
        rows={15}
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onSubmit}>Message</button>
    </ContactArea>
  );
};
export default ContactSection;
