import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './dashboard/home'
import Product from './dashboard/products/products'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/products' element={< Product />}/>
					{/* <Route path='team' element={< Team title="Team" />}/>
					<Route path='invoices' element={< Invoices title="Invoices" />}/>
					<Route path='calendar' element={< Calendar title="Calendar" />}/>
					<Route path='faq' element={< FAQ title="FAQ" />}/>
					<Route path='form' element={< Form title="Form" />}/>
					<Route path='bar' element={< Bar title="Bar" />}/> */}
				</Routes>
        	</BrowserRouter>
		</>
	)
}

export default App
