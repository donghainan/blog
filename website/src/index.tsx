import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import 'styl/comm.less'
import 'antd/dist/antd.less'

const Counter = () => {
	const [count, setCount] = useState(0)
	const handleClick = () => {
		setCount(count + 1)
	}
	return (
		<div>
			<Button type="primary" onClick={handleClick}>
				点我hooks写法递增
			</Button>
			<p>{count}</p>
		</div>
	)
}

ReactDOM.render(<Counter />, document.getElementById('root'))
