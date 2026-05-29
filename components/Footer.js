import Link from "next/link"
import { useState } from "react"
const Footer = ({content, globals}) => {
	const [formData, setFormData] = useState()
	const [formState, setFormState] = useState('open')
	async function sendEmail () {
    setFormState('loading')
    const response = await fetch('/api/send', {
      method: "POST",
      body: JSON.stringify(formData),
    });
    setFormState('submit')
  }
	const canSubmit = ['name', 'email', 'question'].reduce((submit, key) => {
    if (!submit) return submit
    if (formData?.[key]) return true 
  }, true)
  const LinkDisplay = ({url, title, count, variant='dark'}) => {
    return (
      <div key={`link-display-${count}`} className="flex flex-col items-start mt-2">
        <a href={url} className="group">
          <div className="relative"> 
            <div className="absolute h-[1px] transition-all bottom-0 w-0 rounded group-hover:w-full bg-white/80"></div>
            <p className={`font-light text-white transition-all group-hover:text-white/80`}>{title}</p>
          </div>
        </a>
      </div>
    )
  }
  
  return (
    <div className="">
      <div className="bg-secondary py-12 ">
        <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <h4 className="text-4xl text-primary"> KNMC </h4>
          <p className="text-primary font-body text-sm mt-4"> Copyright 2026  </p>
        </div>
        <p className="text-primary font-body"> kingstonnmc@gmail.com  </p>
        </div>
      </div>
    </div>
  )
}
export default Footer