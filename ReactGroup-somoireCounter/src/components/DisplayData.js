const DisplayData =({names})=>{
    return (
        <div>
            {names.map((name, index)=>{
                return <li key={index}>{name}</li>
            })}
        </div>
    )
}

export default DisplayData