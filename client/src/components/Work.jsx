function Work({ children, title, description }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <div>{children}</div>
        <h1 className="text-3xl font-medium">{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Work;
