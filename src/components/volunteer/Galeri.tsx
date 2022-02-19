const Galeri = () => {
  return (
    <>
      <div className="shadow-lg bg-white w-3/4 mx-auto mt-8 rounded-3xl text-gray-600">
        <p className="text-center p-12 pb-6 font-bold text-2xl font-sans ">Galeri</p>
        <p className="text-center">Kumpulan Foto-Foto Desa Menawan</p>
        <div className="container mx-auto">
          <div className="grid-cols-3 p-20 pt-12 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            {[...Array(6)].map((x, i) => (
              <div className={"w-full rounded" + (i == 1 ? " col-span-2 row-span-2" : "")}>
                <img
                  src="https://images.unsplash.com/photo-1520446396645-d72d96708bcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="image"
                  className="rounded-2xl"
                  key={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Galeri;
