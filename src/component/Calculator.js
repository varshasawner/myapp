import { useState } from "react"


export default function Calculator() {
	const [data, setData] = useState("");

	const btn = (e) => {
		// console.log(e.target.value);
		setData(data + (e.target.value));
	}

	const calculate = () => {
		setData(eval(data));
	}

	const clear = () => {
		setData("");
	}

	return (
		<>
			<h2>Calculator</h2>
			<button onClick={btn} value="1" className="calBtn">1</button>
			<button onClick={btn} value="2" className="calBtn">2</button>
			<button onClick={btn} value="3" className="calBtn">3</button>
			<button onClick={btn} value="+" className="calBtn">+</button>
			<button onClick={btn} value="-" className="calBtn">-</button>
			<button onClick={btn} value="*" className="calBtn">*</button>
			<button onClick={clear} className="calBtn">AC</button>
			<button onClick={calculate}>=</button>

			<input type="text" onChange={(e) => { setData(e.target.value) }} value={data}></input>
		</>
	)
}