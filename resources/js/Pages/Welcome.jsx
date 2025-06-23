import Pagination from '@/Components/Pagination';
import AdminLTELayoutGuest from '@/Layouts/AdminLTELayoutGuest';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ postData }) {
    const datasList = postData?.data;

    return (
        <AdminLTELayoutGuest>
            <Head>
                <title>Home Page - Content Gallery</title>
                <meta name="description" content="Browse our content gallery of featured posts and articles." />
            </Head>

            <header className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Content Gallery</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active">Gallery</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="container">
                    <div className="row">
                        {datasList?.map((item) => (
                            <div key={item.id} className="col-lg-12">
                                <article className="card mb-4">
                                    <div className="card-body">
                                        <h2>{item.title}</h2>
                                        <div className="d-flex">
                                            <img 
                                                src={`/storage/${item.image}`} 
                                                alt={item.title} 
                                                width="150" 
                                                style={{ float: 'left', marginRight: '10px' }} 
                                            />
                                            <p className="card-text">{item.description}</p>
                                        </div>
                                        <Link href={`/posts/detail/${item.id}`} className="card-link">Read More</Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <Pagination className="mt-6" links={postData?.links} />
                        </div>
                    </div>
                </div>
            </main>
        </AdminLTELayoutGuest>
    );
}
