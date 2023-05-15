import { useEffect } from "react"
import { useUserProfile } from "../store/cvinfo.js"
import { TfiEmail, TfiMobile, TfiLocationPin, TfiMarkerAlt } from 'react-icons/tfi/index.js'
import { Modal } from "./Modal.jsx"
import { EditForm } from './EditForm.jsx'
import { useModal } from "@/hooks/useModal.js"
import { tipos_info } from "@/helpers/const.js"

export const Preview = () => {

    const {
        photo,
        name,
        lastName,
        age,
        email,
        phone,
        description,
        address
    } = useUserProfile(state => state.basicData)

    const fetchData = useUserProfile(state => state.fetchData)

    const [isOpenEdit, openModalEdit, closeModalEdit] = useModal(false)

    useEffect(() => {

        fetchData()

    }, [fetchData])

    return (
        <section className='border-2 w-full rounded-xl flex flex-col sm:flex-row max-w-2xl'>
            <div className="w-full sm:w-40 p-4 flex justify-center items-center">
                <img className="rounded-full aspect-square" src={photo} alt='avatar del usuario' ></img>
            </div>
            <div className="w-full p-4 sm:p-6 border-t-2 sm:border-l-2 sm:border-t-0 flex flex-col items-start gap-4">

                <h2 className="text-lg font-semibold">{`${name} ${lastName}`}
                    <span className="font-normal text-base">{` (${age} años)`}</span>
                </h2>
                <h2 className="flex items-center gap-3">
                    <TfiEmail />
                    {email}
                </h2>
                <h2 className="flex items-center gap-3">
                    <TfiMobile />
                    {phone}
                </h2>
                <h2 className="flex items-center gap-3">
                    <TfiLocationPin />
                    {address}
                </h2>
                <p>
                    {`${description.substring(1, 200)}...`}
                </p>
                <div className="flex justify-end w-full">
                    <button className="text-2xl hover:scale-110 hover:bg-slate-300 hover:text-white hover:rounded-full p-2" onClick={openModalEdit}>
                        <TfiMarkerAlt />
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpenEdit} closeModal={closeModalEdit} title="Editar">
                <EditForm typeInfo={tipos_info.BASIC_DATA} closeModal={closeModalEdit} />
            </Modal>
        </section>
    )

}