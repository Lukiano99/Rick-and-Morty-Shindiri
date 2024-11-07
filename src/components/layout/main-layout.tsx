interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
  return <div className="max-w-[1280px] mx-auto xl:px-0 px-10">{children}</div>;
};

export default MainLayout;
