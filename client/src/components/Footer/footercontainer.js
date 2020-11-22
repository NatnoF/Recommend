import React from "react";
import Footer from "../Footer";
import "../Footer/styles/footer.css";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>
              <strong className="title">Creators:</strong>
            </Footer.Title>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Carlito Algarin</Footer.Title>
            <Footer.Link href="https://github.com/Carlito1113" target="_blank">
              <i className="fab fa-github"></i>
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Nicolas Fontan</Footer.Title>
            <Footer.Link href="https://github.com/NatnoF" target="_blank">
              <i className="fab fa-github"></i>
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Project Github</Footer.Title>
            <Footer.Link
              href="https://github.com/NatnoF/Recommend"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
