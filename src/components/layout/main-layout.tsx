interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="max-w-[1280px] flex mx-auto xl:px-0 px-10 pt-16">
      {children}
    </div>
  );
};

export default MainLayout;
