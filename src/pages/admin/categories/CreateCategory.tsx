import { useFormik } from "formik";
import FormInput from "../../../components/FormInput";
import SectionHeader from "../../../components/SectionHeader";
import FormButton from "../../../components/FormButton";

export default function CreateCategory() {
  const { values, handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: {
      name
    },
    onSubmit: async values => {

    }
  })

  return (
    <>
      <SectionHeader 
        title='Kategori Ekle'
      />

      <div className="bg-white p-4 rounded-lg">
        <form>
          <FormInput 
            title='Adı'
          />

          <FormButton 
            isSubmitting={isSubmitting}
          />
        </form>
      </div>
    </>
  )
}
