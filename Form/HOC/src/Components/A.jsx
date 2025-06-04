import Counter from './Counter';

const AComponent = ({ no, inc,dec }) => {
    return (
        <div align="center">
            <h1>Counter-App A</h1>
            <h2>Count: {no}</h2>
            <button onClick={inc}>+</button>&nbsp;&nbsp;
            <button onClick={dec}>-</button>
            <hr />
        </div>
    );
};

const A = Counter(AComponent);

export default A;
