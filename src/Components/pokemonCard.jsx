export const PokemonCard = ({ id, name, image, types, poder }) => {

    return (
        <div className='contCenter'>
            <h2>{name.toUpperCase()} # {id}</h2>
            <div className="typesCont">
                {types.map((type, i) => (
                    <span key={i}>{type.type.name}</span>
                ))}
            </div>
            <img alt='...' height={200} src={image} />
            <h3>Nivel de poder: {poder}%</h3>
        </div>
    )
}