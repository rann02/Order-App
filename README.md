
# Order-App

Order-App adalah sebuah aplikasi inovatif yang dirancang untuk memudahkan pengguna dalam melakukan pemesanan produk smartphone secara online. Dengan antarmuka yang intuitif dan fitur yang canggih, Order-App memberikan pengalaman berbelanja yang menyenangkan dan efisien.


## instalasi

Sebelum melakukan instalasi pastikan membuat file .env di dalam folder backend, yang berisi:

```bash
  SECRET=ayam
```

* backend

buat image baru menggunakan command:

```bash
  docker compose build
  docker compose up
```

buka terminal baru pada folder backend untuk melakukan migration, dan seeding:

```bash
  docker exec -it [container-id-container-order-app] npm run migrate
  docker exec -it [container-id-container-order-app] npm run seed
```

* frontend

buat image baru dengan menggunakan command:


```bash
  docker build -t frontend-order-app .
```

lalu buat dan jalankan container dengan menggunakan command:

```bash
  docker run -p5173:5173 frontend-order-app
```


    
## Demo

Lakukan login dengan menggunakan username, dan password berikut:

```bash
  username: user1
  password: 12345
```

atau

```bash
  username: user2
  password: 09876
```

setelah login, maka akan tampil seperti berikut:




![App Screenshot](https://i.imgur.com/g79bueK.png)

