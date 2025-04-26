import AdminPanel from '../components/AdminPanel';

const Admin = () => {
    document.title =  "Панель";
    return (
        <main className="admin">
            <h1>Админ-панель</h1>
            <AdminPanel />
        </main>
    );
};

export default Admin