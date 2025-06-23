import { Link } from '@inertiajs/react';
import React from 'react';

export default function Pagination({ links }) {
    return (
        links.length > 3 && (
            <div className="dataTables_paginate paging_simple_numbers" id="datatable_tabletools_paginate">
                <ul className="pagination pagination-sm">
                    {links.map((link, key) => (
                        <li
                            key={key}
                            className={`paginate_button ${link.previous ? 'previous' : ''} ${link.next ? 'next' : ''} ${link.active ? 'active' : ''} ${link.url === null ? 'disabled' : ''}`}
                            aria-controls="datatable_tabletools"
                            tabIndex="0"
                            id={link.previous ? 'datatable_tabletools_previous' : link.next ? 'datatable_tabletools_next' : ''}
                        >
                            {link.url === null ? (
                                <span className="page-link">
                                    {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                                </span>
                            ) : (
                                <Link className="page-link" href={link.url}>
                                    {link.label.replace('&laquo;', '').replace('&raquo;', '')}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        )
    );
}