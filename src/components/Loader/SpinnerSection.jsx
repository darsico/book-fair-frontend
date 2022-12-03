import Spinner from "./Spinner";

const SpinnerSection = () => {
 return (
  <section className="h-[50vh] w-full flex justify-center items-center">
   <Spinner textColor="text-gray-700" sizeTwClass="h-20 w-20 opacity-60" />
  </section>
 );
}

export default SpinnerSection;