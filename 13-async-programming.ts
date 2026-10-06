const fetchGreeting = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Hello, World!");
            } else {
                reject(new Error("Failed to fetch greeting"));
            }

        }, 1000);

    });
}

fetchGreeting()
    .then((result) => {
        console.log(`Greeting is ${result}`)
    })
    .catch((error: Error) => {
        console.log("Error: " + error.message);
    })

interface User {
    name: string;
    id: number;
    email: string;
    role: 'admin' | 'user' | 'guest';
}

async function fetchUsers(): Promise<User[]> {
    console.log("Fetching users");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
    ];
}

async function processUsers() {
    try {

        const users = await fetchUsers();
        console.log(`Fetched ${users.length} users`);

        let adminEmails = users.filter(u => u.role == 'admin').map(u => u.email);
        console.log('Admin emails:', adminEmails);

        return users;
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Failed to process users: ${error.message}`);
        } else {
            console.log("unknown error occured");
        }

        throw error;
    }
}

processUsers()
    .then((value: User[]) => console.log("Processing complete"))
    .catch((err) => console.log('Processing failed', err));


interface Product {
    id: number;
    name: string;
    price: number;
}

async function fetchProduct(id: number): Promise<Product> {
    console.log(`Fetching product id: ${id}`);

    return { id: id, name: `Product-${id}`, price: Math.random() * 1000 };
}

async function fetchMultipleProducts() {
    try {
        const [product1, product2, product3] = await Promise.all([fetchProduct(1), fetchProduct(2), fetchProduct(3)]);

        const total = [product1, product2, product3].reduce((p, c) => p + c.price, 0);

        console.log(`Total Price: $${total}`);

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

fetchMultipleProducts();