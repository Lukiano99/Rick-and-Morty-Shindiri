interface EmptySearchProps {
  title: string;
  description: string;
}

const EmptySearch = ({ title, description }: EmptySearchProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 border rounded-lg shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <img
          src="/images/empty-search.svg"
          alt="Empty search illustration"
          className="w-32 h-32 opacity-50"
        />
      </div>
    </div>
  );
};

export default EmptySearch;
