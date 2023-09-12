import CreateProduct from "../components/CreateProduct"
import EditProduct from "../components/EditProduct"
import Home from "../components/Home"
import ProductPage from "../components/ProductPage"
import Products from "../components/Products"

const routes = {
    HOME: {path: '/', name: 'Home', element: <Home />, isVisibleInNavigation: true},
    PRODUCTS: {path: '/products', name: 'Products', element: <Products />, isVisibleInNavigation: true},
    PRODUCT_ID: {path: '/products/:productId', name: 'Product Id', element: <ProductPage />, isVisibleInNavigation: false},
    CREATE: {path: '/create', name: 'Create Product', element: <CreateProduct />, isVisibleInNavigation: true},
    EDIT: {path: '/:productId/edit', name: 'Edit Product', element: <EditProduct />, isVisibleInNavigation: false},
}

export {
    routes
}