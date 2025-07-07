import { useFormik } from "formik";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import Logo from "../../components/Logo";

export default function Login() {
    const { handleSubmit, handleChange, values, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async values => {
            console.log('values', values)
        }
    })

    return (
        <div className="container my-6">
            <div className="w-[490px] max-w-full mx-auto border border-gray-300 p-4">
                <Logo />

                <h1 className="text-xl font-bold text-center">Giriş Yap</h1>
                <p className="text-center mt-3 text-gray-600">Lütfen aşağıdaki formdan giriş yapınız!</p>

                <form onSubmit={handleSubmit} className="mt-6">
                    {/* email */}
                    <FormInput 
                        type="email"
                        title="E-posta" 
                        name="email"
                        onChange={handleChange('email')}          
                        value={values.email}
                    />
                    
                    {/* password */}
                    <FormInput 
                        type="password"
                        title="Parola" 
                        name="password"
                        onChange={handleChange('password')}          
                        value={values.password}
                    />
                    
                    <FormButton 
                        isSubmitting={isSubmitting}
                    />
                </form>
            </div>
        </div>
    )
}
