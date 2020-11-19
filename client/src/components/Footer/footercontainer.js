import React from "react";
import Footer from "../Footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Created By</Footer.Title>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>
              Carlito Algarin
            </Footer.Title>
            <Footer.Link href="https://github.com/Carlito1113" target="_blank">Github</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Nicolas Fontan</Footer.Title>
            <Footer.Link href="https://github.com/NatnoF" target="_blank">Github</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
