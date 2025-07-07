import FormInput from "../../../components/FormInput";
import SectionHeader from "../../../components/SectionHeader";
import FormButton from "../../../components/FormButton";

import { useState } from "react";
import { useFormik } from "formik";
import Select from "../../../components/Select";
import Editor from "../../../components/Editor";

export default function CreateProduct() {

  const { handleSubmit, values, isSubmitting } = useFormik({
    initialValues: {
      title: ''
    },
    onSubmit: async values => {
      console.log('values', values)
    }
  })

  return (
     <>
        <SectionHeader 
          title='Kategori Ekle'
        />
  
        <div className="bg-white p-4 rounded-lg">
          <form>
            {/* image */}
            <FormInput 
              type='file'
              title='Resim'
            />

            {/* title */}
            <FormInput 
              type='file'
              title='Başlık'
            />

            {/* category */}
            <Select 
              title='Kategori'
            />

            {/* content */}
            <Editor 
              title='İçerik'
            />
            
  
            <FormButton 
              isSubmitting={isSubmitting}
            />
          </form>
        </div>
      </>
  );
}
