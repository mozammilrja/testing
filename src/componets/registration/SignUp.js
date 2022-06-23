import React,{useEffect} from "react";
import {useFormik} from "formik"
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { Accordion, Form, Button } from "react-bootstrap";
import axios from "axios"

const SignUp = () => {


  useEffect(() =>{
    window.scrollTo(0,0)
    },[])

  const history = useHistory();
  const initialdata = {
    name:"",
    project_name:"",
    website:"",
    email:"",
    username:"",
    role:"",
    audit_report:"",
    launch_date:""
}


const formik = useFormik({
  initialValues: initialdata,
  // validationSchema: Yup.object().shape({
  //     name: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(20, 'Too Long!')
  //       .required('Required'),
  //       company_name: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),
  //       github_link: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),
  //       contact_address: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),
  //       audit_services: Yup.string()
  //       .min(2, 'Too Short!')
  //       .max(50, 'Too Long!')
  //       .required('Required'),
  //     email: Yup.string().email('Invalid email').required('Required')}),
  onSubmit:async(values, { resetForm })=>{
      resetForm();
          const {data} = await axios.post("https://0xbugbytes.azurewebsites.net/company",
          {
            name:values.name,
            project_name:values.project_name,
            email:values.email,
            website:values.website,
            username:values.username,
            role:values.role,
            audit_report:values.audit_report,
            launch_date:values.launch_date,


            location:window.location.href
          },
          )
          if(data){
            console.log(data,'data');
              history.push("/");
          }
  
  }

})

const {values, errors, handleSubmit , handleChange} = formik;

  return (
    <>
<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8  text-[#FFFF00]  ">
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl font-bold text-center sm:text-3xl">Sign Up For Company</h1>
    <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-red" style={{background:'#444444'}}    onSubmit={handleSubmit}>
      <div>
      <div class="relative mt-1">
      <label for="password" class="text-sm font-medium">Name</label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter name"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
          <label for="password" class="text-sm font-medium">Project Name
          </label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Project name"
            value={values.project_name}
            onChange={handleChange}
            name="project_name"
          />
          <label for="password" class="text-sm font-medium">Website
          </label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter website"
            value={values.website}
            onChange={handleChange}
            name="website"
          />
          <label for="password" class="text-sm font-medium">Email
          </label>
          <input
            type="email"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            name = "email"
          />
          <label for="password" class="text-sm font-medium">Telegram/Discord Username
          </label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter username"
            value={values.username}
            onChange={handleChange}
            name = "username"
          />
          <label for="password" class="text-sm font-medium">Your Role
          </label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter role"
            value={values.role}
            onChange={handleChange}
            name = "role"
          />
          <label for="password" class="text-sm font-medium">Do you have have an audit report for your project?
          </label>
          

          <Form.Select aria-label="Default select example" value={values.audit_report}  onChange={handleChange} name="audit_report" className="form-select-blockchain">
                  <option value="token audit">YES</option>
                  <option value="defi audit">NO</option>
                
                  </Form.Select>

          <label for="password" class="text-sm font-medium">Tentative date to launch your bounty program?

          </label>
          <input
            type="date"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter name"
            value={values.launch_date}
            onChange={handleChange}
            name = "launch_date"
          />
        </div>
      </div>
      <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-[#333333] rounded-lg">
        Sign Up
      </button>
{/* 
      <p class="text-sm text-center text-gray-500">
        No account?
        <a class="underline" href="">Login</a>
      </p> */}
    </form>
  </div>
</div>

    </>
  )
}

export default SignUp