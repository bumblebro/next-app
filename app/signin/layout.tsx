function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>20% offer for the order</h1>
      {children}
    </div>
  );
}

export default layout;
