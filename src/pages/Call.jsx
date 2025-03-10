import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";

function Call() {

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            message: "Ordering a call!"
        };

        try {
            const response = await fetch('https://api.parnyky.smv.pp.ua/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                navigate('/');
            } else {
                // Handle error response
                console.error('Failed to submit order');
            }
        } catch (error) {
            // Handle network error
            console.error('Error:', error);
        }
    };

    return (
        <>
        <Header />
        <div className="w-full h-12"></div>
            <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h2 className="text-2xl font-bold">Замовити дзвінок:</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ім`я:</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Номер телефону:</label>
                        <input type="tel" id="phone" name="phone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Замовити</button>
                </form>
            </div>
        
        <Footer />
        </>
    );
}

export default Call;