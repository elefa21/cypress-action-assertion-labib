## Tugas 15: Action & Assertion di Cypress

## Pengantar

Pada tugas ini, saya mempelajari bagaimana menerapkan **Action** dan **Assertion** dalam pengujian menggunakan Cypress. Untuk praktik pengujian, saya menggunakan **website dummy [automationexercise.com](https://automationexercise.com)** yang memang dirancang untuk belajar otomatisasi testing.

---

##  Apa itu Action dan Assertion?

### Action
**Action** adalah langkah-langkah interaksi Cypress dengan elemen di halaman web. Contohnya seperti:
- Mengetik pada form input
- Mengklik tombol
- Memilih dropdown

> Intinya, segala aktivitas yang meniru pengguna asli disebut *Action*.

### Assertion
**Assertion** adalah proses memverifikasi bahwa hasil dari Action sesuai yang diharapkan. Contohnya:
- URL mengandung teks tertentu
- Elemen muncul di layar
- Teks elemen sesuai
- Input memiliki value yang tepat

> Assertion membantu memastikan aplikasi berjalan sebagaimana mestinya.

---
## Contoh Action di Cypress

```javascript
cy.get('input[name="name"]').type("Labib Faruq");
cy.get('input[data-qa="email"]').type("labib@example.com");
cy.get('button[type="submit"]').click();
cy.get('select').select('Option 1');
```

## Contoh Assertion di Cypress

```javascript
cy.url().should('include', '/contact_us'); // Verifikasi URL
cy.get('.title.text-center').should('contain.text', 'Contact Us'); // Verifikasi teks
cy.get('input[name="email"]').should('have.value', 'labib@example.com'); // Verifikasi input
cy.get('.alert-success').should('exist'); // Verifikasi elemen muncul
```
