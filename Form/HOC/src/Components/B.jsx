import Counter from './Counter';

const BComponent = ({ no, inc,dec }) => {
    return (
        <div align="center">
            <h1>Counter-App B</h1>
            <h2>Count: {no}</h2>
            <button onClick={inc}>+</button>&nbsp;&nbsp;
            <button onClick={dec}>-</button>
        </div>
    );
};

const B = Counter(BComponent);

export default B;
