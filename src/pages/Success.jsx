import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

function Success() {

    const navigate = useNavigate();

    return (
        <>
        <Header />
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Замовлення прийнято!</h3>
            <p className="text-gray-600 mb-6">Дякуємо за замовлення! Ми зв'яжемося з вами найближчим часом.</p>
            <button
            onClick={() => navigate('/')}
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            >
            Закрити
            </button>
        </div>
        </div>
        
        <Footer />
        </>
    )
}

export default Success;
