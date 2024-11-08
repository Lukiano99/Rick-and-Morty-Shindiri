const SkeletonList = () => {
  return (
    <div className="space-y-2 my-4">
      {Array(4)
        .fill(null)
        .map((_, idx) => (
          <div
            key={idx}
            className="bg-muted animate-pulse w-[300px] rounded-lg h-8"
          />
        ))}
    </div>
  );
};

export default SkeletonList;
