import { useUserProfile } from "../store/cvinfo.js"
import { InputForm } from "./InputForm";

const dataStructure = {
    basicData: {
        name: {
            type: 'text',
            label: 'Nombre (s)*',
            required: true,
            placeHolder: 'Nombre...',
            maxLength: 60
        },
        lastName: {
            type: 'text',
            label: 'Apellido (s)*',
            required: true,
            placeHolder: 'Apellido...',
            maxLength: 60
        },
        birthDate: {
            type: 'date',
            label: 'Fecha Nacimiento*',
            required: true,
        },
        email: {
            type: 'email',
            label: 'Correo*',
            required: true,
            placeHolder: 'prueba@prueba.com',
            maxLength: 60
        },
        address: {
            type: 'text',
            label: 'Dirección Residencia',
            required: false,
            placeHolder: 'Cll 22 22 22...',
            maxLength: 100
        },
        phone: {
            type: 'number',
            label: 'Teléfono*',
            required: true,
            placeHolder: '3332211...'
        },
        description: {
            type: 'textarea',
            label: 'Descripción perfil profesional*',
            required: true,
            placeHolder: 'Desarrollador de software con...',
            maxLength: 500
        },
        /*photo: {
            type: 'file',
            label: 'Foto',
            required: false
        }*/
    }
}

export const EditForm = ({ typeInfo, closeModal }) => {

    const basicData = useUserProfile(state => state.basicData)
    const setBasicData = useUserProfile(state => state.setBasicData)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        setBasicData(data)
        closeModal()
    }

    return (
        <form onSubmit={handleSubmit} className="sm:p-10 max-h-[80vh] sm:max-w-4xl overflow-scroll justify-center sm:overflow-auto flex flex-col items-center ">
            <div className="flex flex-wrap sm:justify-evenly justify-center overflow-scroll sm:overflow-auto items-center sm:gap-10 gap-5 p-2">
                {Object.entries(dataStructure[typeInfo]).map((el, index) => {
                    return (
                        <InputForm key={index} type={el[1].type} name={el[0]} label={el[1].label} required={el[1].required} placeHolder={el[1].placeHolder} maxLength={el[1].maxLength} basicData={basicData} />
                    )
                })}
            </div>
            <div className="flex justify-center items-center gap-5 p-4 border-t-2 w-full">
                <input className="rounded-md w-20 p-2 bg-red-500 hover:bg-red-400 text-white cursor-pointer hover:scale-110" type="button" value="Cancelar" onClick={closeModal} />
                <input className="rounded-md w-20 p-2 bg-orange-500 hover:bg-orange-400 text-white cursor-pointer hover:scale-110" type="reset" value="Borrar" />
                <input className="rounded-md w-20 p-2 bg-green-600 hover:bg-green-500 text-white cursor-pointer hover:scale-110" type="submit" value="Guardar" />
            </div>
        </form>
    )
}