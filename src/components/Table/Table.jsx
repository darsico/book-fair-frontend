const Table = ({ headerData, bodyData, type }) => {
  const displayTableBody = (data, type) => {
    if (type === 'book') {
      const reversedData = data.reverse();
      return reversedData.map((book) => {
        return (
          <ul key={book._id} className=" border-solid  border-b-[1px] border-gray-300 grid grid- grid-cols-[1fr_1fr_1fr_minmax(180px,_1fr)_1fr_1fr]  w-full items-center justify-center py-4">
            <li className="px-2 min-w-0 ">
              <figure className="w-20 h-28 flex justify-center items-center ">
                <img src={book.image} alt={book.title} className="object-contain h-full w-full" />
              </figure>
            </li>
            <li className=" px-6 min-w-0 "><span className=" text-gray-600 text-base">{book.title}</span></li>
            <li className=" px-6 min-w-0">{book.author}</li>
            <li className=" px-6 min-w-0">{book.description}</li>
            <li className=" px-6 min-w-0">{book.price}</li>
            <li className=" px-6 min-w-0">{book.stock}</li>
          </ul>
        );
      });
    }
  };

  const displayTableHeader = (tableHeader) => {
    return (
      <ul className=" grid grid-cols-[1fr_1fr_1fr_minmax(180px,_1fr)_1fr_1fr] w-full">
        {tableHeader.map((header, index) => {
          if (header === 'description') {
            return (
              <li key={index} className="py-4 px-2 min-w-[150px]">
                {header}
              </li>
            );
          }
          return (
            <li key={index} scope="col" className="py-4 px-2 min-w-[90px]">
              {header}
            </li>
          );
        })}
      </ul>
    );
  };

  if (!headerData || !bodyData || headerData.length === 0 || bodyData.length === 0)
    return (
      <section className="w-full h-full">
        <h3 className="text-gray-600">{`You don't have ${type || 'data'} yet. Please create one.`}</h3>
      </section>
    );

  return (
    <div className="overflow-x-auto overflow-y-auto relative box-content">
      <div className="min-w-[600px] py-10  text-sm text-left text-gray-500 dark:text-gray-400 ">
        <div className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 grid w-full ">{displayTableHeader(headerData)}</div>
        <div className="my-4 w-full">{displayTableBody(bodyData, type)}</div>
      </div>
    </div>
  );
};

export default Table;
