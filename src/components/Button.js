import './Button.css';

export default function Button({ name="", onConnect = f => f }) {
    return (<button className="Button" onClick={() => onConnect()}>{name}</button>);
}