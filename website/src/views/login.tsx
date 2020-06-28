import React from 'react'
import { Button } from 'antd'
import 'styl/comm.less'
import { observer, inject } from 'mobx-react'
const Login = ({ store }: any) => {
	console.log(store)
	const handleClick = () => {
		store.increment()
	}
	return (
		<div>
			<Button type="primary" onClick={handleClick}>
				点我hooks写法递增
			</Button>
			<p>{store.count}</p>
			<p>{store.currentCount}</p>
		</div>
	)
}

export default inject('store')(observer(Login))
