import "./style.css"


export default function Box(props){
    return (
        <div className="box" style={{
            background: props.bg
        }}>
            <div>
                {props.name}
            </div>
            <div>
                {props.sid}
            </div>
        </div>
    )
}


 