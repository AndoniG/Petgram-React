import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from '../components/Layout'

export default () => (
    <Layout title="My Favorites" subtitle="Here are my favorite ones!">
        <FavsWithQuery />
    </Layout>
)