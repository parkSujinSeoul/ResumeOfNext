type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout(props: LayoutProps) {
  return (
    <form>
      <h2>자기소개 </h2>
      {props.children}
    </form>
  );
}
