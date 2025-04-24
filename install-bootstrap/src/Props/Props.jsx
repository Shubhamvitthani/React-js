const Props = ({ abc, color, sum }) => {

    return (
        <>
            <h2>A Value : {abc} </h2>
            <h2>color</h2>
            <ul>
                {
                    color.map((c) => {
                        return (
                            <p style={{ color: c }}>{c}</p>
                        )
                    })
                }
            </ul>
            <h2>Sum : {sum()}</h2>
        </>
    )
}
export default Props;   