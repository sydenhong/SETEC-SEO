import AdminLTELayoutGuest from '@/Layouts/AdminLTELayoutGuest';
import { Head, Link } from '@inertiajs/react';

export default function PostDetail({ postDataDetail }) {
    console.log("postDataDetail::", postDataDetail);
    return (
        <AdminLTELayoutGuest>
            <Head>
                <title>{postDataDetail?.title ?? 'Post Detail'}</title>
                <meta
                    name="description"
                    content={
                    typeof postDataDetail?.description === 'string'
                        ? postDataDetail.description.slice(0, 150)
                        : 'Read the detailed post on our website.'
                    }
                />
            </Head>

            <header className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Post: {postDataDetail.title}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active">Detail</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <article className="card">
                                <div className="card-body">
                                    <h2>{postDataDetail.title}</h2>
                                    <img 
                                        src={`/storage/${postDataDetail.image}`} 
                                        alt={postDataDetail.title} 
                                        width="100%" 
                                        style={{ float: 'left', marginRight: '10px' }} 
                                    />
                                    <div className="card-text">
                                        <h6>Category: {postDataDetail?.category?.name}</h6>
                                        <p>{postDataDetail.description}</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </AdminLTELayoutGuest>
    );
}
