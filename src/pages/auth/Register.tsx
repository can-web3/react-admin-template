import { useFormik } from "formik";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import Logo from "../../components/Logo";

export default function Register() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            repassword: ''
        },
        onSubmit: async values => {
            console.log('values', values)
        }
    })

    return (
        <div className="container my-6">
            <div className="w-[490px] max-w-full mx-auto border border-gray-300 p-4">
                <Logo />

                <h1 className="text-xl font-bold text-center">Kayıt Ol</h1>
                <p className="text-center mt-3 text-gray-600">Lütfen aşağıdaki formdan kayıt olunuz!</p>

                <form onSubmit={handleSubmit} className="mt-6">
                    {/* username */}
                    <FormInput 
                        title="Kullanıcı Adı" 
                        name="username"
                        onChange={handleChange('username')}          
                        value={values.username}
                    />
                    
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
                    
                    {/* repassword */}
                    <FormInput 
                        type="password"
                        title="Parola (Tekrar)" 
                        name="repassword"
                        onChange={handleChange('repassword')}          
                        value={values.repassword}
                    />

                    <FormButton />
                </form>
            </div>
        </div>
    )
}
