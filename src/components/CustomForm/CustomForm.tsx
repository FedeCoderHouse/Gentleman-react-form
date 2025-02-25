import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema, FormValues } from './models/form.model';
import InputForm from '../InputForm';




const CustomForm = () => {

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm  name="name" label="Nombre" control={control} type='text' error={errors.name}/>
            <InputForm  name="email" label="Correo" control={control} type='email' error={errors.email}/>
            <InputForm  name="password" label="Pass" control={control} type='password' error={errors.password}/>
            <InputForm  name="confirmPassword" label="PassConf" control={control} type='password' error={errors.confirmPassword}/>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default CustomForm;