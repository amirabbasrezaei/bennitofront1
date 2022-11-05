import React from 'react'
import CreateCategory from '../../components/admin/CreateCategory'
import HeadComponent from '../../components/HeadComponent'
import AdminPanelLayout from '../../components/layout/AdminPanelLayout'
import MobileMenu from '../../components/MobileMenu'

type Props = {}

export default function index({ }: Props) {
    return (
        <>
            <HeadComponent page='مدیریت ' title='' noindex={true} />
            <AdminPanelLayout mobilemenu={true} back={false} title='افزودن دسته بندی'>
                <CreateCategory />
            </AdminPanelLayout>
        </>

    )
}