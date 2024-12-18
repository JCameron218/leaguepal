import React from 'react';

export const About = async () => {
    const data = await fetch(`${process.env.BASE_URL}/api/about`)
        .then((res) => res.json())
        .catch((err) => {
            console.error(err);
            return null;
        });

    return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
