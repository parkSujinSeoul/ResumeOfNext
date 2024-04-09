type LayoutProps = {
    children: React.ReactNode;
};
export default function Layout (props: LayoutProps){
  return (
      <form>
          <h2>Read</h2>
          {props.children}
      </form>
  );
}
