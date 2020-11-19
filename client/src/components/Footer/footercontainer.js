import React from "react";
import Footer from "../Footer";
import "../Footer/styles/footer.css";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title><h1><strong>Creators</strong></h1></Footer.Title>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>
              <h5>Carlito Algarin</h5>
            </Footer.Title>
            <Footer.Link href="https://github.com/Carlito1113" target="_blank"><i class="fab fa-github"></i></Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title><h5>Nicolas Fontan</h5></Footer.Title>
            <Footer.Link href="https://github.com/NatnoF" target="_blank"><i class="fab fa-github"></i></Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title><h5>Application Github</h5></Footer.Title>
            <Footer.Link href="https://github.com/NatnoF/Recommend" target="_blank"><i class="fab fa-github"></i></Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
