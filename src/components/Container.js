const Container = ({children}) => {
  return (
      <div className="container position-relative">
          <div className="row justify-content-center">
              {children}
          </div>
      </div>
  );
}

export default Container;
