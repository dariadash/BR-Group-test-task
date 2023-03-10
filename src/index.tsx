import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import { MainPage, NewsPage } from './pages'
import { setupStore } from '@/model/store'
const store = setupStore()

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/news/:newsId',
        element: <NewsPage />,
    },
])

ReactDOM.createRoot(document.getElementById('app')).render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
)