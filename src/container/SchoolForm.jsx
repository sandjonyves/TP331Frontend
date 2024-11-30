import React, { useState } from 'react';
import { InputField } from '../components';

export default function SchoolForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    logo: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { email, name, phone, logo } = formData;

    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

    if (!name) newErrors.name = 'School name is required';

    if (!phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) 
      newErrors.phone = 'Phone number must be in the format 123-456-7890';

    if (!logo) newErrors.logo = 'Logo is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle the form submission, e.g., send data to an API
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('logo', formData.logo);

      // Example: send the form data to an API (uncomment when ready)
      // fetch('/api/submit', {
      //   method: 'POST',
      //   body: formDataToSubmit,
      // })
      // .then(response => {
      //   if (!response.ok) throw new Error('Network response was not ok');
      //   return response.json();
      // })
      // .then(data => console.log('Success:', data))
      // .catch(error => console.error('Error:', error));

      console.log('Form submitted successfully:', formData);
      setFormData({ email: '', name: '', phone: '', logo: null });
      setErrors({});
    }
  };

  return (
    <div>
      <form className="m-4 mx-auto" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <label>School name</label>
            <InputField
              type="text"
              name="name"
              placeholder="lyclabang"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="relative z-0 w-full group">
            <label>Email address</label>
            <InputField
              type="email"
              name="email"
              placeholder="lyclabang@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <label>Phone number (123-456-7890)</label>
            <InputField
              type="tel"
              name="phone"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="relative z-0 w-full group">
            <label>Logo</label>
            <InputField
              type="file"
              name="logo"
              onChange={handleChange}
              required
            />
            {errors.logo && <p className="text-red-500">{errors.logo}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
        
      </form>
    </div>
  );
}