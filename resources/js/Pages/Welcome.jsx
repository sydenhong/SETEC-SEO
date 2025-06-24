import Pagination from '@/Components/Pagination';
import AdminLTELayoutGuest from '@/Layouts/AdminLTELayoutGuest';
import { Head, Link } from '@inertiajs/react';
import { htmlToText } from 'html-to-text';

export default function Welcome({ postData }) {
    const datasList = postData?.data;

    function truncateHtmlWords(html, wordLimit = 50) {
        // Convert to plain text
        const plainText = htmlToText(html, {
            wordwrap: false,
            selectors: [
            { selector: 'a', options: { ignoreHref: true } } // optional
            ]
        });

        // Limit to N words
        const words = plainText.split(/\s+/);
        if (words.length <= wordLimit) return plainText;
        return words.slice(0, wordLimit).join(' ') + '...';
    }

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
                                        <h1>{item.title}</h1>
                                        <div className="d-flex">
                                            <img 
                                                src={`/storage/${item.image}`} 
                                                alt={item.title}
                                                style={{ float: 'left', marginRight: '10px', 'max-width': '150px', 'max-height': '151px'}} 
                                            />
                                            <p>{truncateHtmlWords(item?.description)}</p>
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
