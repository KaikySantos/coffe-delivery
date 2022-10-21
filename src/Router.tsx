import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { CompleteOrderPage } from './pages/CompleteOrder'

import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}
