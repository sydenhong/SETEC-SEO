import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import Breadcrumb from '@/Components/Breadcrumb';
import AdminLTELayout from '@/Layouts/AdminLTELayout';

export default function Edit({ mustVerifyEmail, status }) {
    const headWeb = 'Profile'
    const linksBreadcrumb = [{ title: 'Home', url: '/' }, { title: headWeb, url: '' }];

    return (
        <>
            <AdminLTELayout breadcrumb={<Breadcrumb header={headWeb} links={linksBreadcrumb} />} >
                <Head title={headWeb} />
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-outline card-info">
                                <div className="card-body">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="max-w-xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card card-outline card-info">
                                <div className="card-body">
                                    <UpdatePasswordForm className="max-w-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="card card-outline card-info">
                                <div className="card-body">
                                    <DeleteUserForm className="max-w-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AdminLTELayout>
        </>
    );
}
