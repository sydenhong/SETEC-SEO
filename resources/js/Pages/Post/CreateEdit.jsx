import Breadcrumb from '@/Components/Breadcrumb';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import NavLink from '@/Components/NavLink';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminLTELayout from '@/Layouts/AdminLTELayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Transition } from '@headlessui/react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function PostCreateEdit({ datas, category }) {
    const { data, setData, post, patch, errors, reset, processing, recentlySuccessful } =
        useForm({
            category_id: datas.category_id ? datas.category_id : '',
            title: datas.title ? datas.title : '',
            description: datas.description ? datas.description : '',
            image: datas.image ? datas.image : '',
        });

    const submit = (e) => {
        e.preventDefault();

        const options = {
            forceFormData: true, // ⬅️ This is required for file uploads
            onFinish: () => reset('image'),
            preserveState: true
        };

        if (!datas.id) {
            post(route('post.store'), options);
        } else {
            patch(route('post.update', datas.id), options);
        }
    };
    
    // const submit = (e) => {
    //     e.preventDefault();
    //     if (!datas.id) {
    //         post(route('post.store'), {preserveState: true}, {
    //             onFinish: () => {
    //                 reset();
    //             },
    //         });
    //     } else {
    //         patch(route('post.update', datas.id), {
    //             onFinish: () => {
    //                 reset();
    //             },
    //         });
    //     }
    // };

    const headWeb = 'Post Create'
    const linksBreadcrumb = [{ title: 'Home', url: '/' }, { title: headWeb, url: '' }];
    return (
        <AdminLTELayout breadcrumb={<Breadcrumb header={headWeb} links={linksBreadcrumb} />} >
            <Head title={headWeb} />
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-outline card-info">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Register Data Management
                                </h3>
                            </div>
                            <form onSubmit={submit}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label className='text-uppercase' htmlFor="category_id"><span className='text-danger'>*</span>Category</label>
                                        <select
                                            value={data.category_id}
                                            className={`form-control ${errors.category_id && 'is-invalid'}`}
                                            onChange={(e) => setData('category_id', e.target.value)}
                                            id="category_id"
                                        >
                                            <option value={''}>---Please select one---</option>
                                            {category.map((item) => {
                                                return (
                                                    <option value={item.id}>{item.name}</option>
                                                )
                                            })}
                                        </select>
                                        <InputError className="mt-2" message={errors.category_id} />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-uppercase' htmlFor="title"><span className='text-danger'>*</span>Title</label>
                                        <input
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            type="text"
                                            name="title"
                                            className={`form-control ${errors.title && 'is-invalid'}`}
                                            id="title"
                                        />
                                        <InputError className="mt-2" message={errors.title} />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-uppercase' htmlFor="description"><span className='text-danger'>*</span>Description</label>
                                        {/* <input
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            type="text"
                                            name="description"
                                            className={`form-control ${errors.description && 'is-invalid'}`}
                                            id="description"
                                        /> */}
                                        <textarea 
                                            onChange={(e) => setData('description', e.target.value)}
                                            name="description"
                                            className={`form-control ${errors.description && 'is-invalid'}`}
                                            id="description"
                                        >{data.description}</textarea>
                                        <InputError className="mt-2" message={errors.description} />
                                    </div>
                                    <div className="form-group">
                                        <label className='text-uppercase' htmlFor="image"><span className='text-danger'>*</span>Images</label>
                                        <input
                                            onChange={(e) => setData('image', e.target.files[0])}
                                            type="file"
                                            name="image"
                                            className={`form-control ${errors.image && 'is-invalid'}`}
                                            id="image"
                                        />
                                        <InputError className="mt-2" message={errors.image} />
                                    </div>
                                </div>
                                <div className="card-footer clearfix">
                                    <button disabled={processing} type="submit" className="btn btn-primary">
                                        {processing ? datas?.id ? "Updating..." : "Saving..." : datas?.id ? "Update" : "Save"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLTELayout>
    );
}