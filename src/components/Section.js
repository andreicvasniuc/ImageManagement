import Container from "./Container";

const Section = ({children}) => {
  return (
    <section className="call-to-action text-white text-left">
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;
