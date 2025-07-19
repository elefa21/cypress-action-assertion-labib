describe("Tugas 15 - UI Testing di automationexercise.com", () => {
  it("TC1 - Buka Homepage", () => {
    cy.visit("https://automationexercise.com");
    cy.title().should("include", "Automation Exercise");
  });

  it("TC2 - Navigasi ke halaman login", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Signup / Login").click();
    cy.url().should("include", "/login");
    cy.get('form[action="/login"]').should("be.visible");
  });

  it("TC3 - Error login dengan email dan password salah", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Signup / Login").click();
    cy.get('input[data-qa="login-email"]').type("salah@email.com");
    cy.get('input[data-qa="login-password"]').type("passwordsalah");
    cy.get('button[data-qa="login-button"]').click();
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });

  it("TC4 - Buka halaman produk", () => {
    cy.visit("https://automationexercise.com/products");
    cy.url().should("include", "/products");
    cy.get(".features_items").should("be.visible");
  });

  it("TC5 - Klik menu 'Test Cases' dan verifikasi halaman berhasil dibuka", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Test Cases").click();
    cy.url().should("include", "/test_cases");
    cy.get("h2.title.text-center").should("contain", "Test Cases");
  });

  it("TC6 - Cari produk menggunakan fitur pencarian", () => {
    cy.visit("https://automationexercise.com/products");
    cy.get("#search_product").type("shirt");
    cy.get("#submit_search").click();
    cy.contains("Searched Products").should("be.visible");
  });

  it("TC7 - Tambah produk ke keranjang dari halaman produk", () => {
    cy.visit("https://automationexercise.com/products");
    cy.get(".productinfo.text-center").first().trigger("mouseover");
    cy.contains("Add to cart").first().click({ force: true });
    cy.contains("View Cart").click();
    cy.url().should("include", "/view_cart");
    cy.get(".cart_info").should("be.visible");
  });

  it("TC8 - Buka halaman kontak", () => {
    cy.visit("https://automationexercise.com");
    cy.contains("Contact us").click();
    cy.url().should("include", "/contact_us");
    cy.get('form[method="post"]').should("be.visible");
  });

  it("TC9 - Berlangganan newsletter dan verifikasi sukses", () => {
    cy.visit("https://automationexercise.com");
    cy.scrollTo("bottom");
    cy.get("#susbscribe_email").type("testnewsletter@email.com");
    cy.get("#subscribe").click();
    cy.get(".alert-success").should(
      "contain",
      "You have been successfully subscribed!"
    );
  });

  it("TC10 - Cek bagian footer newsletter", () => {
    cy.visit("https://automationexercise.com");
    cy.scrollTo("bottom");
    cy.contains("Subscription").should("be.visible");
    cy.get("#susbscribe_email").type("test@email.com");
    cy.get("#subscribe").click();
    cy.contains("You have been successfully subscribed!").should("be.visible");
  });
});
