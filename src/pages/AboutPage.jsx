import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="desk image" />
        <article>
          <div className="title">
            <h2>About us</h2>
            <div className="underline"></div>
          </div>
          <p>
            At the Krsman Store, we believe that furniture goes beyond
            functionality; it's an expression of your unique style and a
            reflection of your personality. With an extensive collection of
            handpicked pieces, we aim to inspire and transform your living
            spaces into havens of comfort and elegance. Our knowledgeable staff
            is dedicated to providing exceptional service, guiding you through
            the selection process to make your design dreams a reality. Step
            into our world and discover a realm of timeless beauty and endless
            possibilities.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
