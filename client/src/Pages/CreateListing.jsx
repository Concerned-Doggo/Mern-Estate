const CreateListing = () => {
    return (
        <main className="p-3 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-center my-7">
                Create a Listing
            </h1>
            <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <input
                        type="text"
                        placeholder="name"
                        className="p-3 border rounded-lg"
                        id="name"
                        maxLength={62}
                        minLength={8}
                        required
                    />
                    <textarea
                        type="text"
                        placeholder="description"
                        className="p-3 border rounded-lg"
                        id="description"
                        required
                    />

                    <input
                        type="text"
                        placeholder="address"
                        className="p-3 border rounded-lg"
                        id="address"
                        required
                    />

                    <div className="flex gap-6 flex-wrap">
                        <div className="flex gap-2">
                            <input type="checkbox" id="sale" className="w-5" />
                            <span>Sell</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="rent" className="w-5" />
                            <span>Rent</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="parking" className="w-5" />
                            <span>Parking spot</span>
                        </div>

                        <div className="flex gap-2">
                            <input type="checkbox" id="furnished" className="w-5" />
                            <span>Furnished</span>
                        </div>
                        <div className="flex gap-2">
                            <input type="checkbox" id="offer" className="w-5" />
                            <span>offer</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <div className=" flex items-center gap-2">
                            <input
                                type="number"
                                min="1"
                                max="10"
                                className="p-3 border-gray-300 rounded-lg"
                                id="bedrooms"
                                required
                            />
                            <p>Beds</p>
                        </div>

                        <div className=" flex items-center gap-2">
                            <input
                                type="number"
                                min="1"
                                max="10"
                                className="p-3 border-gray-300 rounded-lg"
                                id="bathrooms"
                                required
                            />
                            <p>Baths</p>
                        </div>
                        <div className=" flex items-center gap-2">
                            <input
                                type="number"
                                min="1"
                                max="10"
                                className="p-3 border-gray-300 rounded-lg"
                                id="regularPrice"
                                required
                            />
                            <div className="flex flex-col items-center">
                                <p>Regular Price</p>
                                <span className="text-sm">($ / month)</span>
                            </div>
                        </div>
                        <div className=" flex items-center gap-2">
                            <input
                                type="number"
                                min="1"
                                max="10"
                                className="p-3 border-gray-300 rounded-lg"
                                id="discountPrice"
                                required
                            />
                            <div className="flex flex-col items-center">
                                <p>Discounted Price</p>
                                <span className="text-sm">($ / month)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 gap-4">
                    <p className="font-semibold">
                        Images:
                        <span className="font-normal text-gray-600 ml-2">The first image will be the cover (max 6)</span>
                    </p>
                    <div className="flex gap-4">
                        <input
                            className="p-3 border border-gray-300 rounded w-full"
                            type="file"
                            id="images"
                            multiple
                            required
                            accept="image/*"
                        />
                        <button className="p-3 text-green-700 border border-green-700 rounded hover:shadow-lg disable:opacity-80">Upload</button>
                    </div>
                <button className="p-3 bg-slate-700 text-white border border-slate-700 rounded-lg hover:opacity-95 disable:opacity-80">Create Listing</button>
                </div>
            </form>
        </main>
    );
};

export default CreateListing;