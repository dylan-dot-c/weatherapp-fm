import error from "../../assets/images/icon-error.svg";
import retry from "../../assets/images/icon-retry.svg";

type Props = {
  refetch: () => void;
};
const Error = ({ refetch }: Props) => {
  return (
    <div>
      <div className="text-center max-w-lg m-auto flex flex-col gap-4 items-center mt-6">
        <img src={error} alt="Error icon" width={50} />

        <h2 className="md:text-5xl text-xl">Something went wrong</h2>
        <p className="text-neutral-400">
          We couldn’t connect to the server (API error). Please try again in a
          few moments.
        </p>
        <button
          onClick={refetch}
          className="bg-neutral-700 px-6 py-3 flex gap-2 rounded-xl cursor-pointer"
        >
          <img src={retry} alt="Retry Button" />
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
