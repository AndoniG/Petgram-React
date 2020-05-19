import React from 'react'
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCard } from "../container/ListOfPhotoCard";
import { Layout } from '../components/Layout'

// EL ID VIENE DIRECTO DE REACH ROUTER
const HomePage = ({ id }) => {
    return (
        <Layout title="Your pet photos app" subtitle="Find photos of beautiful pets!">
            <ListOfCategories />
            <ListOfPhotoCard categoryId={id} />
        </Layout>
    )
}

// EN CASO DE QUE EL ID DE MASCOTA SEA EL MISMO SE EVITA EL RENDERIZADO
export default React.memo(HomePage, (prevProps, props) => {
    return prevProps.id === props.id
})

