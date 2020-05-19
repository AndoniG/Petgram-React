import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { Layout } from '../components/Layout'

export default ({ detailId }) => (
    <Layout title={`Fotografía ${detailId + 1}`}>
        <PhotoCardWithQuery id={detailId} />
    </Layout>
)