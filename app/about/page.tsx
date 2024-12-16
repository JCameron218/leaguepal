import React from 'react';

const AboutPage = async () => {
    const data = await fetch(`${process.env.BASE_URL}/api/about`)
        .then((res) => res.json())
        .catch((err) => {
            console.error(err);
            return null;
        });

    return (
        <div>
            <h1>About Us</h1>
            <p>Welcome to our application! We are dedicated to providing the best service possible.</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default AboutPage;