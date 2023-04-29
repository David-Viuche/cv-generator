import { useEffect } from "react"
import { useUserProfile } from "../store/cvinfo.js"
import { TfiEmail, TfiMobile, TfiLocationPin } from 'react-icons/tfi/index.js'

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
                    {description}
                </p>
            </div>
        </section>
    )

}