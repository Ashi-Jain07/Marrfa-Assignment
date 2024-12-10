import { useState } from "react";
import { Books } from "./MockData.js";

function HomePage() {

    const [search, setSearch] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(Books);

    function handleSearch() {
        const filtered = Books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredBooks(filtered);
        setSearch("");
    }

    return (
        <>
            <div className="text-center">
                <input type="text" className="mt-10 m-2 w-4/5 sm:w-1/2 border border-black p-2 rounded-md text-lg" placeholder="search book" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={handleSearch} className="border border-black bg-slate-200 p-2 m-2 rounded-md">Search</button>
            </div>
            <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 gap-4 mt-16 place-items-center m-1">
                {
                    filteredBooks.map((book) => (
                        <div key={book.id} className="mb-10">
                            <img src={book.coverImage} className="w-60 h-60 mb-0"></img><br />
                            <p className="mt-0 text-center"><b>{book.title}</b></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default HomePage;