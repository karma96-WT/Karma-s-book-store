// app/admin/page.jsx
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { sessionOptions } from '../../app/lib/session/session'; // adjust path if needed
import './local.css';

export default async function AdminPage() {
  const session = await getIronSession(cookies(), sessionOptions);

  if (!session.user || session.user.role !== 'ADMIN') {
    //alert("Restricted");
    redirect('/Login'); // redirect to login if not admin
  }

  return (
    <div className='body'>
      <h1 className='welcome-admin-text'>Welcome Admin</h1>
      <Link href="/admin/addBooks" className="addbook-button">Add Books</Link>
      <Link href="/admin/deleteDashboard" className="deletebooks-button">Delete Books</Link>
      <Link href="/admin/deleteUsers" className="addbook-button">Manage Users</Link>
      <Link href={'/admin/orders'} className='addbook-button'>Orders</Link>
    </div>
  );
}
