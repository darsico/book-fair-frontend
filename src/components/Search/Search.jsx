import { useForm } from "react-hook-form";

const Search = ({ setParams, params, placeholder = "Search store books" }) => {

 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const onSubmit = (data) => {
  const { title } = data
  setParams({
   ...params,
   title
  })
 };
 return (
  <form onSubmit={handleSubmit(onSubmit)}>
   <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
   <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
     <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
    <input type="search"
     id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 " placeholder={placeholder}
     {...register("title", {
      required: true,
      onChange: (e) => {
       setParams({
        ...params,
        title: e.target.value
       })
      }
     })}
     required />
    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Search</button>
   </div>
  </form>
 );
}

export default Search;