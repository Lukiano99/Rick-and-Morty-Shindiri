interface PageTitleProps {
  title: string;
}
const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="w-full flex items-center justify-start pt-10">
      <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
  );
};

export default PageTitle;
