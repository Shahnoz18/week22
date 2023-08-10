import superheroes from '../data/superheroes.json'

export default function Superheroes() {
    return (
        <div className="container-superheroes">
            {superheroes.map((props, index) => (
                <div className="item" key={index}>
                    <h1 className="item-title">{props.name}</h1>
                    <p className="item-conrainer">
                        <img src={props.url}
                        alt={props.name} className="avatar"/>
                        <div className='item-universe'>Universe:<span>{props.universe}</span></div>
                        <div className='item-alterego'>Alterego:<span>{props.alterego}</span></div>
                        <div className='item-occupation'>Occupation:<span>{props.occupation}</span></div>
                        <div className='item-friends'>Friends:<span>{props.friends}</span></div>
                        <div className='item-uperpowers'>Superpowers:<span>{props.superpowers}</span></div>
                        <div className='item-info'>Information:<span>{props.info}</span></div>
                    </p>
                </div>
            ))}
            </div>
    );
}