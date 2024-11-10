interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="md:max-w-[1280px]  flex mx-auto xl:px-0 px-4 py-16">
      {children}
    </div>
  );
};

export default MainLayout;
