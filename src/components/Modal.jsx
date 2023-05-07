import { AiOutlineCloseSquare } from 'react-icons/ai/index.js'
export const Modal = ({ children, isOpen, closeModal, title }) => {
    const handleContentClick = (e) => e.stopPropagation()
    return (
        <article className={`bg-slate-600 fixed displ top-0 left-0 z-40 w-full h-full ${isOpen ? 'flex' : 'hidden'} justify-center items-center bg-opacity-50`} onClick={closeModal}>
            <div className="relative z-50 bg-white w-fit h-fit max-w-[90%] rounded-md shadow-md flex flex-col" onClick={handleContentClick}>
                <div className='flex justify-between h-10 border-b-2 items-center p-1 text-3xl'>
                    <h1 className='text-base p-2'>{title}</h1>
                    <button className='hover:scale-110' onClick={closeModal}>
                        <AiOutlineCloseSquare />
                    </button>
                </div>
                {children}
            </div>
        </article>
    )
}