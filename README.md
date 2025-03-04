# **Next.js API Fetching Project**

This is a simple **Next.js web application** that fetches and displays data from the **PokeAPI** using **client-side fetching**.

## **🚀 Features**
- Fetches data from the [PokeAPI](https://pokeapi.co/)
- Displays Pokémon **name, base experience, and abilities**
- Uses **client-side fetching** with `useEffect`
- Includes **error handling and loading states**
- Styled with **Tailwind CSS** for a clean UI

## **🛠 Setup Instructions**
### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/nextjs-api-fetching.git
cd nextjs-api-fetching
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Run the Development Server**
```sh
npm run dev
```
Then, open **[http://localhost:3000](http://localhost:3000)** in your browser.

## **📁 Project Structure**
```
nextjs-api-fetching/
│── pages/
│   ├── index.js  # Home page with API fetching
│── public/       # Static assets (if needed)
│── styles/       # CSS or Tailwind config
│── package.json  # Project dependencies and scripts
└── README.md     # Project documentation
```

## **📌 Why Client-Side Fetching?**
- The data is **dynamic** and updates frequently.
- No need for **SEO optimization** or pre-rendering.
- Allows **faster initial page loads** with on-demand updates.

## **📜 License**
This project is open-source and available under the **MIT License**.

---