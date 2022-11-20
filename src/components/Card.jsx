import style from './Card.module.css'

export default function Card(props) {
  return (
    <div className={`${style.divCard}`}>
      <div className={`${style.position}`}>
        <button className={`${style.boton}`} 
        onClick={props.onClose}>X</button>
      </div>
      <div>
        <img className={`${style.image}`} src={props.image} alt={props.name} />
        <h6 className={`${style.nombre}`} >{props.name}</h6>
      </div>
      <div>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}
