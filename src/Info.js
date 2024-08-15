export default function Info( { label, unit, quantity} ) {
    return (
        <div className="nutrient">
            <p className="label">{label }</p>
            <p className="unit">{ quantity.toFixed() } { unit }</p>
        </div>
    )
} 