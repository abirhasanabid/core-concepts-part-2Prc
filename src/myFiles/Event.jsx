import State from './State';

export default function Event() {
    const btnOne = () => {
        alert('This is Btn One');
    }

    const btnThree = (num) => {
        alert(num + 2);
    }
    return (
        <div className="card">
            <button onClick={btnOne}>One</button>
            <button onClick={() => { alert('This is Btn Two') }}>Two</button>
            <button onClick={() => btnThree(2)}>Three</button>
            <State></State>
        </div>
    )
}