(() => {
  const init = () => {
    buildHTML();
    buildCSS();
    setEvents();
  };
  const buildHTML = () => {
    
    const html = `
    <nav class="navbar">
        <a class="nav-img" href="https://www.e-bebek.com/">
         <img src="https://cdn05.e-bebek.com/y.ebebek/9973673459742.svg" alt="Logo" />
        </a>
        <div class="search-wrapper">
        <img class="search-icon" src="https://www.e-bebek.com/assets/svg/search-normal.svg" alt="Search Icon" />
        <input class="search-bar" placeholder="Ürün, kategori veya marka arayın." />
        </div>
        <button class="btn-favorite">
        <i class="fa-regular fa-heart fa-2xl"></i>
        </button>
        <button class="btn-login"> <i class="fa-regular fa-user"> </i>  Giriş Yap/ Üye Ol</button>
        <button class="btn-cart"><i class="fa-solid fa-cart-shopping"></i>Sepet</button>
        <div class="nav-links">
            <a href="#"> Kategoriler </a>
            <a href="#"> Keşfet </a>
            <a href="#"> Hediye </a>
            <a href="#"  style="color:  #70bee9ff"> İnternete Özel Ürünler </a>
            <a href="#" style="color: orange"> Kampanyalar</a>
            <a href="#" style="color: orange"> Outlet</a>
            
            <div class="nav-links-right">
            <a href="#" > <img src="https://cdn05.e-bebek.com/media/c/siparisim-nerede-logo.png" alt="Siparişimi Nerede" /> SİPARİŞİM NEREDE</a>
            <a href="#"> <img src="https://cdn05.e-bebek.com/media/c/enyakin-ebebek-logo.png" alt="En Yakın Ebebek" /> EN YAKIN EBEBEK</a>
            </div>
        </div>
    </nav>

    <div style="background-color: #db2626ff; width:100%;  height: 500px;">
        <div class="banner-links">
            <a href="#" class="banner-link-btn" style="color: orange; ">3 AL 2 ÖDE</a>
            <a href="#">ARAÇ&GEREÇ</a>
            <a href="#">BEBEK MODASI</a>
            <a href="#">KAMPANYALAR</a> 
            <a href="#">ÖNE ÇIKANLAR </a>
            <a href="#">ÇEKİLİŞ</a>
        </div>
        <div style=" display: flex; position: relative; width:60%; height: auto;justify-content: center; align-items: center; margin: 0 auto; ">
         <a href="#"> <img src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya" style="width: 100%; height: auto; border-radius: 20px;" /></a>
        </div>

        <div class="slider-row">
            <button class="btn-previous"> < </button>
            <a href="#" > <img class="slider-img" src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya"  /></a>
            <a href="#" > <img class="slider-img" src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya"  /></a>
            <a href="#" > <img class="slider-img" src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya"  /></a>
            <a href="#" > <img class="slider-img" src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya"  /></a>
            <a href="#" > <img class="slider-img" src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya"  /></a>
            <a href="#" > <img class="slider-img" src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya"  /></a>
            <a href="#" > <img class="slider-img" src="https://cdn05.e-bebek.com/media/c/sezon-sonu-indirimleri-60a-varan-firsat-d.jpg" alt="Özel Kampanya"  /></a>
            <button class="btn-next"> > </button>
        </div>

    </div>

    <div class= "roll-buttons"> 
        <div class="roll-btn-group">
          <button class="btn-roll"> </button>
          <span>Beyaz Bodyler</span>
        </div>
        <div class="roll-btn-group">
          <button class="btn-roll "> </button>
          <span>Beyaz Bodyler</span>
        </div>
        <div class="roll-btn-group">
          <button class="btn-roll"> </button>
          <span>Beyaz Bodyler</span>
        </div>
        <div class="roll-btn-group">
          <button class="btn-roll"> </button>
          <span>Beyaz Bodyler</span>
        </div>
        <div class="roll-btn-group">
          <button class="btn-roll"> </button>
          <span>Beyaz Bodyler</span>
        </div>

        
    </div>

    <div class = "carousel-section">
            
            <div class="carousel-header">
                <h2 class="title-primary">Beğenebileceğinizi düşündüklerimiz</h2>
            </div>
            <div class="carousel-wrapper">
                <button class="carousel-prev">&lt;</button>
                <div class="carousel-content"></div>
                <button class="carousel-next">&gt;</button>
            </div>
    </div>



    `;
    document.body.innerHTML = html;
  };
  const buildCSS = () => {
  
    const css = `
      .navbar {
        background-color: white;
        color: blue;
        padding: 10px 90px;
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
      }
        .nav-img {
        display: flex;
        justify-content: left;
        margin-top: 50px;
        margin-left: 50px;
        }
        .nav-img img {
      width: 120px;
      height: auto;
      display: block;
        }
      .nav-links {
        width: 100%;
        display: flex;
        justify-content: left;
        gap: 20px;
        margin-top: 10px;
      }
        .nav-links a {
        text-decoration: none;
        color: gray;
        font-weight: 600;
        padding: 6px 12px;
        border-radius: 8px;
        transition: background 0.2s;
      }
      .nav-links a:hover {
        background: #ebf6fc;
      }
      .search-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      max-width: 600px;
    }
      .nav-links-right {
        font-size: 10px;
        display: flex;
        justify-content: right;
        margin-left: auto;
        
      }
        .banner-links  {
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 25px 15px;
        }

        .banner-links a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 8px;
        transition: background 0.2s;
      }
        .banner-link-btn {
        background: white;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid orange;
        transition: background 0.2s;
      }
    
      .search-icon {
      position: absolute;
      top: 32%;
      padding: 30px;
      left: 35px;
      width: 24px;
      height: 24px;
    
      z-index: 2;
    }
     .search-bar {
      margin-top: 50px;
      margin-left: 50px;
      padding: 20px 20px 18px 55px;
      font-size: 16px;
      font-family: Quicksand-SemiBold;
      font-weight: 600;
      background-color: #ebf6fc;
      color: #686868;
      border: none;
      border-radius: 30px;
      positiono: relative;
      width: 100%;
      max-height: 48px;
      z-index: 1;
      outline: none;
    }

    .btn-favorite {
    position: relative;
    margin-top: 50px;
    margin-left: 50px;
    width: 50px;
    height: 50px;
    border: none;
    color:  #70bee9ff;
    background-color: white;
    cursor: pointer;
    border: 2px solid  #ebf6fc;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    }

    .btn-login {
    position: relative;
    margin-top: 50px;
    font-weight: 600;
    font-size: 16px;
    border: none;
    color:  #70bee9ff;
    background-color: white;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #ebf6fc;
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    border-radius: 16px;
      }
    
    .btn-cart {
    position: relative;
    margin-top: 50px;
    font-weight: 600;
    font-size: 16px;
    border: none;
    color:  #70bee9ff;
    background-color: white;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #ebf6fc;
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    border-radius: 16px;
    }
    .btn-shopping {
    position: relative;
    margin-top: 5px;
    font-weight: 600;
    font-size: 16px;
    border: none;
    color:  white;
    background-color: #c94545ff;
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
    border-radius: 16px;
  }
    .btn-previous, .btn-next {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%; /* Tam yuvarlak */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: orange;
    background: white;
    border: 1.5px solid orange;
    cursor: pointer;
    margin: 0; /* Ekstra margin olmasın */
    box-sizing: border-box;
    padding: 0;
    }
    .btn-previous {
    margin-left: 20%;
    
    }
    .btn-next {
    margin-right: 20%;
 
    }
    .roll-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 24px 0;
    }
    .btn-roll {
      width: 50px;
      height: 50px;
      border: 1px solid orange;
      padding: 0;
      background-size: cover;
      background-position: center;
      background-color: #fff;
      background-image: url('https://web-image.useinsider.com/ebebek/defaultImageLibrary/Artboard%203-1754033234.jpeg');
      transition: box-shadow 0.2s;
      cursor: pointer;
      border-radius: 50%;
      display: inline-block;
    }
      .roll-btn-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
.roll-btn-group span {
  margin-top: 6px;
  font-size: 14px;
  color: #333;
}

    .slider-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px; 
    margin-top: 30px;
    }
    .slider-img {
      width: 120px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
    }
    
    .carousel-header { 
    box-sizing: border-box;
    max-width: 1200px;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    background-color: #fef6eb;
    padding: 25px 32px 12px 32px;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    }
    .title-primary {
    font-family: Quicksand-Bold;
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    float: left;
    text-align: left;
    line-height: 1.11;
    color: #f28e00;
    margin: 0;
   }
    .carousel-section {
    background: #fff;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 35px;
    margin: 32px auto;
    max-width: 1200px;
    box-shadow: 0 2px 16px #0001;
    padding: 0 0 24px 0;
    
    }
    .carousel-wrapper {
    width: 100%;
    max-width: 1200px;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 8px;
     padding: 0 32px;
     box-sizing: border-box;
    }
    .carousel-content {
     display: flex;
     gap: 16px;
     overflow-x: auto;
     scroll-behavior: smooth;
     padding: 24px 0;
     width: 1000px;
    text-align: center;
    }
    .carousel-content img {
    width: 100%;
    border-radius: 12px;
    }
.carousel-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  width: 210px;
  min-width: 210px;
  box-shadow: 0 2px 8px #0001;
  padding: 16px 12px 12px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 390px;
  align-items: center;
  position: relative;
}
.carousel-card img {
  width: 120px;
  height: 90px;
  object-fit: contain;
  margin-bottom: 8px;
}
.carousel-card .card-title {
  font-family: Quicksand-SemiBold;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 6px;
}
.carousel-card .card-brand {
  color: #70bee9ff;
  font-size: 0.9rem;
  margin-bottom: 4px;
}
.carousel-card .card-price {
  color: #db2626ff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 4px;
}
.carousel-prev, .carousel-next {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid orange;
  background: #fff;
  color: orange;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 4px;
}
.discount-badge {
  font-family: Quicksand-SemiBold;
  font-weight: 800;
  color: #1cba2e;
  font-size: 0.85rem;
  padding: 2px 8px;
  font-weight: bold;
}
.heart {
  margin-left: auto;
  text-align: right;
  color: orange;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid #ffe0a3;
  background: white;
  box-shadow: 0 1px 4px #0001;
}
.stars {
  font-size: 1.1rem;
  vertical-align: middle;
}
.card-rating {
  margin: 4px 0;
}
.card-old-price {
  color: #aaa;
  text-decoration: line-through;
  font-size: 0.95rem;
  margin-bottom: 2px;
}
.rating-count {
  color: #888;
  font-size: 0.9rem;
  margin-left: 2px;
}
 .card-btn {
  background: #fef6eb;
  color: #db9c2c;
  border: none;
  border-radius: 16px;
  padding: 12px 0;
  width: 90%;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin: 12px auto 0 auto;
  display: block;
  transition: background 0.2s, color 0.2s;
  box-shadow: 0 2px 8px #ffe0a355;
}
.card-btn:hover {
  background: #ffe6b3;
  color: #b97a13;
} 

@media (max-width: 1200px) {
  .carousel-section,
  .carousel-header,
  .carousel-wrapper {
    max-width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }
  .carousel-content {
    width: 100%;
    min-width: 0;
  }
}

@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
    padding: 10px 20px;
    gap: 10px;
  }
  .nav-img {
    margin: 0 auto 10px auto;
    justify-content: center;
  }
  .search-wrapper {
    max-width: 100%;
    width: 100%;
    margin-bottom: 10px;
  }
  .btn-favorite,
  .btn-login,
  .btn-cart {
    margin: 10px 0 0 0;
    width: 44px;
    height: 44px;
    font-size: 14px;
    padding: 0;
  }
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
  .nav-links-right {
    flex-direction: column;
    align-items: flex-end;
    margin-left: 0;
    font-size: 9px;
  }
  .slider-row {
    flex-wrap: wrap;
    gap: 6px;
  }
  .slider-img {
    width: 90px;
    height: 60px;
  }
  .carousel-section,
  .carousel-header,
  .carousel-wrapper {
    max-width: 100%;
    padding-left: 4px;
    padding-right: 4px;
  }
  .carousel-content {
    width: 100%;
    min-width: 0;
    gap: 8px;
    padding: 12px 0;
  }
  .carousel-card {
    width: 170px;
    min-width: 170px;
    height: 340px;
    padding: 10px 6px 10px 6px;
  }
  .banner-links {
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 2px;
  }
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
    padding: 8px 5px;
    gap: 8px;
  }
  .nav-img {
    margin: 0 auto 8px auto;
    justify-content: center;
  }
  .search-wrapper {
    max-width: 100%;
    width: 100%;
    margin-bottom: 8px;
  }
  .btn-favorite,
  .btn-login,
  .btn-cart {
    width: 38px;
    height: 38px;
    font-size: 12px;
    margin: 6px 0 0 0;
    padding: 0;
  }
    .roll-buttons {
    gap: 6px;
  }
  .btn-roll {
    width: 36px;
    height: 36px;
  }
  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
  }
  .banner-links {
    flex-direction: column;
    gap: 8px;
    padding: 10px 5px;
  }
  .slider-row {
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 10px;
  }
  .slider-img {
    width: 70px;
    height: 45px;
  }
  .carousel-section,
  .carousel-header,
  .carousel-wrapper {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  .carousel-content {
    width: 100%;
    min-width: 0;
    gap: 4px;
    padding: 8px 0;
  }
  .carousel-card {
    width: 130px;
    min-width: 130px;
    height: 260px;
    padding: 6px 2px 6px 2px;
  }
  .carousel-card img {
    width: 70px;
    height: 50px;
  }
  .title-primary {
    font-size: 0.9rem;
    padding: 0 4px;
  }
   .banner-links {
    flex-direction: column;
    gap: 4px;
    padding: 6px 0;
  }
}`;
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  };
  const setEvents = () => {
   $(document).on('click', '.carousel-prev', function() {
      document.querySelector('.carousel-content').scrollBy({left: -220, behavior: 'smooth'});
    });
    $(document).on('click', '.carousel-next', function() {
      document.querySelector('.carousel-content').scrollBy({left: 220, behavior: 'smooth'});
    });
  $(document).on('click', '.heart', function() {
  $(this).toggleClass('active');
  const $card = $(this).closest('.carousel-card');
  const index = $card.index();
  const item = carousel[index];
  if ($(this).hasClass('active')) {
    $(this).html('&#9829;'); 
    toggleFavorite(item.id, true);
  } else {
    $(this).html('&#9825;'); 
    toggleFavorite(item.id, false);
  }
  console.log('Favoriler:', favorites);
});

window.addEventListener('DOMContentLoaded', renderCarousel);
  };
  init();
})();



const  carousel = [
    {
        "id": 1,
        "brand": "HelloBaby",
        "name": " Yenidoğan 6lı Ağız Mendili 24x24cm Unisex ",
        "url": "https://www.e-bebek.com/hellobaby-yenidogan-6li-agiz-mendili-24x24cm-unisex-p-24ghlbumnd007001",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/organik-6li-agiz-mendili-24x24-cm_8682766103779_01.jpg",
        "price": 89.99,
        "original_price": 89.99
    },
    {
        "id": 2,
        "brand": "HelloBaby",
        "name": " Unisex Beyaz Body Ribana Kumaş Çıtçıtlı Zıbın Zarf Yaka Kısa Kol",
        "url": "https://www.e-bebek.com/hellobaby-unisex-beyaz-body-ribana-kumas-citcitli-zibin-zarf-yaka-kisa-kol-beyaz-p-24ghlbubdy010002",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/a_8682766438970_01.jpg",
        "price": 69.99,
        "original_price": 69.99
    },
    {
        "id": 3,
        "brand": "HelloBaby",
        "name": "Unisex Beyaz Body Ribana Kumaş Çıtçıtlı Zıbın Bisiklet Yaka Atlet Kol",
        "url": "https://www.e-bebek.com/hellobaby-unisex-beyaz-body-ribana-kumas-citcitli-zibin-bisiklet-yaka-atlet-kol-beyaz-p-24ghlbubdy002008",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/abcdeefff_8682766439298_01.jpg",
        "price": 69.99,
        "original_price": 69.99
    },
    {
        "id": 4,
        "brand": "HelloBaby",
        "name": "Yenidoğan Müslin Ağız Mendili Unisex",
        "url": "https://www.e-bebek.com/hellobaby-yenidogan-muslin-agiz-mendili-unisex-p-24ghlbumnd003003",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/yenidogan-muslin-agiz-mendili-unisex_8682766728736_01.jpg",
        "price": 89.99,
        "original_price": 89.99
    },
    {
        "id": 5,
        "brand": "Aziz Bebe",
        "name": "Yenidoğan Süzene Nakışlı 5li Askı Hastane Çıkışı",
        "url": "https://www.e-bebek.com/aziz-bebe-yenidogan-suzene-nakisli-5li-aski-hastane-cikisi-p-24yazzeset001001",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/24y-little-life-yenidogan-suzene-nakisli-5li-aski-hastane-cikisi-erkek-bebek_8682766693195_01.jpg",
        "price": 399.99,
        "original_price": 479.99
    },
    {
        "id": 6,
        "brand": "HelloBaby",
        "name": "Kız Bebek Sweatshirt Şardonlu Çiçek Desenli Bisiklet Yaka Uzun Kol",
        "url": "https://www.e-bebek.com/hellobaby-kiz-bebek-sweatshirt-sardonlu-cicek-desenli-bisiklet-yaka-uzun-kol-desenli-p-24khlbkswt008004",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/basic-az-sardonlu-cicek-desenli-sweatshirt-kiz-bebek_8682766731644_01.jpg",
        "price": 99.99,
        "original_price": 199.99
    },
    {
        "id": 7,
        "brand": "HelloBaby",
        "name": "Unisex Beyaz Body Ribana Kumaş Çıtçıtlı Zıbın Bisiket Yaka İp Askılı",
        "url": "https://www.e-bebek.com/hellobaby-unisex-beyaz-body-ribana-kumas-citcitli-zibin-bisiket-yaka-ip-askili-beyaz-p-24ghlbubdy009008",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/a_8682766616361_01.jpg",
        "price": 69.99,
        "original_price": 69.99
    },
    {
        "id": 8,
        "brand": "Little Dreams",
        "name": "Kız Müslin Battaniye Bebek",
        "url": "https://www.e-bebek.com/little-dreams-kiz-muslin-battaniye-kiz-bebek-p-24kltlkmsl002001",
        "img": "https://cdn05.e-bebek.com/mnresize/300/300/media/p/kiz-muslin-battaniye-kiz-bebek_8682766812732_01.jpg",
        "price": 269.99,
        "original_price": 169.99
    }
];


let carouselIndex = 0;

function renderCarousel() {
  const carouselContent = document.querySelector('.carousel-content');
  carouselContent.innerHTML = carousel.map(item => {
    let discount = '';
    if (item.original_price > item.price) {
      const percent = Math.round(100 - (item.price / item.original_price) * 100);
      discount = `<span class="discount-badge">%${percent}</span>`;
    }
    // Yıldız (örnek: 4 yıldız, 1 boş yıldız)
    const stars = `<span class="stars">
      <span style="color:#ffc107;">&#9733;&#9733;&#9733;&#9733;</span>
      <span style="color:#eee;">&#9733;</span>
    </span>`;
    // Kalp
    const heart = `<span class="heart">&#9825;</span>`;

    return `
      <div class="carousel-card">
        <div class="card-top">
          ${heart}
        </div>
        <a href="${item.url}" target="_blank">
          <img src="${item.img}" alt="${item.name}" />
        </a>
        <div class="card-title">${item.name}</div>
        <div class="card-brand">${item.brand}</div>
        <div class="card-rating">${stars} <span class="rating-count">(7)</span></div>
        ${item.original_price > item.price ? `<div>
        <span class="card-old-price">${item.original_price} TL</span>
        <span style="margin-left:6px;">${discount} <i class="fa-solid fa-circle-down" style="color: #1cba2e;"></i></span>
        </div>`
        : ''}
        <div class="card-price">${item.price} TL</div>
        <button class="card-btn">Sepete Ekle</button>
      </div>
    `;
  }).join('');
    
}

const favorites = [];

function toggleFavorite(itemId, isFavorite) {
  const item = carousel.find(i => i.id === itemId);
  if (!item) return;
  const index = favorites.findIndex(f => f.id === itemId);
  if (isFavorite) {
    if (index === -1) favorites.push(item);
  } else {
    if (index > -1) favorites.splice(index, 1);
  }
}