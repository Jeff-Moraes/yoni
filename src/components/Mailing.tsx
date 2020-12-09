import React, { useState, useEffect } from 'react'

export default function Mailing() {
  const [email, setEmail] = useState('')

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/9c2b69bb-fa44-4d5a-9e64-1c28f595697f-loader.js";
    script.async = true;
    document.body.appendChild(script);
  }, [])
  const handleSubmit = (e) => {
    //Evite a utilização de preventDefault()
    e.preventDefault();
    console.log({email})
  }
  return (
    <form onSubmit={handleSubmit} >
      <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">enviar</button>
    </form>
  )
}
