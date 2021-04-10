import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Admin = () => {
    const { register, handleSubmit, } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            category: data.category,
            price: data.price,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addMenu`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                if (res) {
                    alert('Your event has been added successfully');
                }
            })
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '011f10ea5dfc25b71bac2efa547a3926');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <form className=" justify-content-center align-item-center d-flex mt-5 bg-primary rounded" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5">
                    <div className="mb-3">
                        <label for="name" className="form-label text-white">Food Name</label>
                        <input name="name" className="form-control" defaultValue="Food Name" {...register("name")} />
                    </div>
                    <div className="mb-3 form-floating">
                    <label for="description" className="form-label text-white">Food Description</label>
                        <textarea style={{height: "100px"}} name="description" className="form-control" defaultValue="Food Description" {...register("description")} />
                    </div>
                    <div className="mb-3">
                        <label for="category" className="form-label text-white">Category</label>
                        <select className="form-control" name="category" {...register("category", { required: true })}>
                            <option value="BreakFast">BreakFast</option>
                            <option value="Launch">Launch</option>
                            <option value="Dinner">Dinner</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="price" className="form-label text-white">Add Price</label>
                        <input name="price" type="number" className="form-control" defaultValue="20" {...register("price")} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleRequired" className="form-label text-white">Choose a Picture</label>
                        <input name="exampleRequired" onChange={handleImageUpload} className="form-control" type="file" />
                    </div>

                    <div className="mb-3 justify-content-center align-item-center d-flex">
                        <input className="btn btn-warning" type="submit" />
                    </div>
                </div>

            </form>

        </div>
    );
};

export default Admin;