interface MainLayoutProps {
  children: React.ReactNode;
}
const NavLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="max-w-[1280px] flex mx-auto xl:px-0 px-4 z-40">
      {children}
    </div>
  );
};

export default NavLayout;
