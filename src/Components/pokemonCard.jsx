import PropTypes from 'prop-types'

export const PokemonCard = ({ id, name, image, types, poder="????" }) => {

    return (
        <div className='contCenter'>
            <h2>{name} # {id}</h2>
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

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    poder: PropTypes.number
}
