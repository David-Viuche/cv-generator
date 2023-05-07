export const InputForm = ({ type, name, label, required, placeHolder, maxLength, basicData }) => {
    return (
        <div className="w-64 h-full">
            <label className="m-1" htmlFor={name}>{label}</label>
            {
                (type !== 'textarea') ? (
                    <input className="border-2 w-full rounded-md p-2" type={type} name={name} required={required} placeholder={placeHolder} maxLength={maxLength} defaultValue={basicData[name]} />
                ) :
                    <textarea className="border-2 w-full rounded-md p-2 h-40" name={name} required={required} placeholder={placeHolder} maxLength={maxLength} cols="20" rows="10" defaultValue={basicData[name]}></textarea>
            }
        </div>
    )
}