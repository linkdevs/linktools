import { useState } from "react";

export default function Home(props) {
    const [form, setForm] = useState({});

    const handleInputChange = (event) => {
        var { name, value } = event.target;

        if (name == "file") {
            var base64 = "";
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function () {
                base64 = reader.result;
                setForm({ ...form, [name]: base64 });
            };
        } else {
            setForm({ ...form, [name]: value });
        }

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const request = fetch("/api/image-compress", {
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = await request.then(response => response.json());
        console.log(response);
    }

    return <main className="p-3">
        <h2>Link Tools</h2>

        <form onSubmit={handleSubmit}>
            <input type="file" name="file" className="form-control" onChange={handleInputChange} />
            <button type="submit" className="btn btn-success">Enviar</button>
        </form>
    </main>
}