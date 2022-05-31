import { useSelector } from "react-redux";

const Card = () => {
  const books = useSelector((state) => state.book.books);

  return (
    <>
      <section className="h-screen w-screen bg-gradient-to-br from-white-50 to-orange-100 p-8 ">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          {books.length > 0 &&
            books.map((item) => {
              return (
                <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden border-orange-400">
                  <div className="p-3">
                    <span className="text-orange-800 text-xl font-semibold">
                      {item.name}
                    </span>
                    <h3 className="font-semibold text-l leading-6 text-gray-700 my-2">
                      {item.email}
                    </h3>
                    <p className="paragraph-normal text-l text-gray-600">
                      {item.username}
                    </p>
                    <p className="paragraph-normal text-l text-gray-600">
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Card;
