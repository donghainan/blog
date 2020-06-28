import React from 'react'
import { Button } from 'antd'
import { observer, inject } from 'mobx-react'
const Login = ({ user }: any) => {
	console.log(user)
	const handleClick = () => {
		user.increment()
	}
	return (
		<div>
			<Button type="primary" onClick={handleClick}>
				点我hooks写法递增
			</Button>
			<p>{user.count}</p>
			<p>{user.currentCount}</p>
		</div>
	)
}

export default inject('user')(observer(Login))
