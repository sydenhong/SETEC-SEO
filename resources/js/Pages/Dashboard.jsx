import React from 'react';
import AdminLTELayout from '../Layouts/AdminLTELayout';
import { Head } from '@inertiajs/react';

const Dashboard = () => {
    return (
        <AdminLTELayout>
            <Head title={`Admin Dashboard`} />
            <h1>Welcome to Admin Dashboard</h1>
            <p>This is the AdminLTE dashboard.</p>
        </AdminLTELayout>
    );
};

export default Dashboard;

