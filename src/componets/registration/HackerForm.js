import React,{useEffect} from "react";
import {useFormik} from "formik"
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";
import { Accordion, Form, Button } from "react-bootstrap";
import axios from "axios"


const HackerForm = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
        },[])

        const history = useHistory();
        const initialdata = {
          name:"",
          email:"",
          git_link:"",
          experience:"",
          project_type:""
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
                const {data} = await axios.post("https://0xbugbytes.azurewebsites.net/hacker",
                {
                  name:values.name,
                  email:values.email,
                  git_link:values.git_link,
                  experience:values.experience,
                  project_type:values.project_type,
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
    <h1 class="text-2xl font-bold text-center sm:text-3xl">Sign Up For Hacker</h1>
    <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-red" style={{background:'#444444'}}    onSubmit={handleSubmit}>
      <div>
      <div class="relative mt-1">
      <label class="text-sm font-medium">Name</label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter name"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
          <label  class="text-sm font-medium">Email
          </label>
          <input
            type="email"
            class="w-full p-4   pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            name = "email"
          />
          <label class="text-sm font-medium">GitHub/GitLab link
          </label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter github link"
            value={values.git_link}
            onChange={handleChange}
            name = "git_link"
          />
        
          <label for="password" class="text-sm font-medium">
          What experience you have with web3.0?
          </label>
          <Form.Select aria-label="Default select example" value={values.experience}  onChange={handleChange} name="experience" className="form-select-blockchain">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="professional">Security Professional</option>
                  </Form.Select> 


          <label for="password" class="text-sm font-medium">
          What type of project you look to hunt?
          </label>
          <input
            type="text"
            class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Enter type of project"
            value={values.project_type}
            onChange={handleChange}
            name = "project_type"
          />
        </div>
      </div>
      <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-[#333333] rounded-lg">
        Sign Up
      </button>

      {/* <p class="text-sm text-center text-gray-500">
        No account?
        <a class="underline" href="">Login</a>
      </p> */}
    </form>
  </div>
</div>
    </>
  )
}

export default HackerForm