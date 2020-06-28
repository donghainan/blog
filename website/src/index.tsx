import React from 'react'
import { render } from 'react-dom'
import { Provider, observer } from 'mobx-react'
import appStore from './mobx/store'
import Routes from './router'
const App = observer(() => {
	return (
		<div>
			<Provider store={appStore}>
				<Routes />
			</Provider>
		</div>
	)
})

render(<App />, document.getElementById('root'))
