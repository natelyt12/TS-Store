// Check user
var user_info = localStorage.getItem("username")
if (typeof (user_info) == "string") {
      document.getElementById("user-name").innerHTML = user_info
      document.getElementById("user-name_mobile").innerHTML = user_info


      let log_out = document.getElementById("log-out")
      let log_out_button = document.createElement("button")
      log_out_button.setAttribute("style", "background-color: transparent; color: white; border: none; scale: 80%; margin-bottom: 4px;")
      log_out_button.setAttribute("onclick", "logout()")
      log_out_button.classList.add("pc")
      log_out.appendChild(log_out_button)

      let log_out_icon = document.createElement("i")
      log_out_icon.classList.add("fa-solid")
      log_out_icon.classList.add("fa-arrow-right-from-bracket")
      log_out_icon.classList.add("p-0")
      log_out_icon.classList.add("m-0")
      log_out_button.appendChild(log_out_icon)

      let log_out_mobile = document.getElementById("logout_mobile")
      let log_out_button_mobile = document.createElement("button")
      log_out_button_mobile.setAttribute("style", "background-color: transparent; color: white; border: none; scale: 80%; margin-bottom: 4px;")
      log_out_button_mobile.setAttribute("onclick", "logout()")
      log_out_mobile.appendChild(log_out_button_mobile)

      let log_out_icon_mobile = document.createElement("i")
      log_out_icon_mobile.classList.add("fa-solid")
      log_out_icon_mobile.classList.add("fa-arrow-right-from-bracket")
      log_out_button_mobile.appendChild(log_out_icon_mobile)
}

function logout() {
      localStorage.removeItem("username")
      window.location.href = "./index.html"
}

let products = {
      data: [
            {
                  itemsname: "Laptop gaming Acer Predator Helios 16 PH16 71 72BV",
                  firm: "Acer",
                  price: "59.990.000₫",
                  image: "../asset/database/products/helios-16-3.jpg"
            },
            {
                  itemsname: "Apple MacBook Air M1 16GB 512GB 2020",
                  firm: "Apple",
                  price: "36.000.000₫",
                  image: "../asset/database/products/Apple MacBook Air M1 16GB 512GB 2020.png"
            },
            {
                  itemsname: "Dell Inspiron 14 5430 i7 1360P/16GB/1T",
                  firm: "Dell",
                  price: "26.999.000₫",
                  image: "../asset/database/products/Dell Inspiron 14 5430 i7 1T.jpg"
            },
            {
                  itemsname: "Asus Vivobook 14X OLED (S3405)",
                  firm: "Asus",
                  price: "26.990.000 ₫",
                  image: "../asset/database/products/Asus Vivobook 14X OLED (S3405).jpg"
            },
            {
                  itemsname: "MSI Gaming GF63 Thin 11SC-664VN",
                  firm: "MSI",
                  price: "16.490.000₫",
                  image: "../asset/database/products/MSI Gaming GF63 Thin 11SC-664VN.jpg"
            },
            {
                  itemsname: "Laptop Lenovo ThinkPad E14 Gen 4",
                  firm: "Lenovo",
                  price: "25.590.000₫",
                  image: "../asset/database/products/49835_lenovo_thinkpad_e14_gen_4_intel_black_a4.jpg"
            },
            {
                  itemsname: "Laptop LG Gram 16Z90Q G.AH52A5",
                  firm: "LG",
                  price: "41.990.000₫",
                  image: "../asset/database/products/10674_lg_gram_2022_16z90q_black__7.jpg"
            },
            {
                  itemsname: "Laptop HP 14s-em0086AU R5 7520U",
                  firm: "HP",
                  price: "15.190.000₫",
                  image: "../asset/database/products/cbfeb844be95b3b99e6c93dcdd583d25.jpg"
            },
            {
                  itemsname: "Apple IPhone 15 Pro Max 1TB chính hãng VN/A",
                  firm: "Apple",
                  price: "46.990.000đ",
                  image: "../asset/database/products/V-IPHONE-15PROMAX-256GB-BLUE-1.jpg"
            },
            {
                  itemsname: "Samsung Galaxy S23 Ultra 12GB 1TB",
                  firm: "Samsung",
                  price: "44.990.000₫",
                  image: "../asset/database/products/10054734-dien-thoai-samsung-galaxy-s23-ultra-8gb-256gb-tim-6.jpg"
            },
            {
                  itemsname: "ROG Phone 7 Ultimate",
                  firm: "Asus",
                  price: "29.990.000 ₫",
                  image: "../asset/database/products/asus-rog-phone-7-ultimate-600x600.jpg"
            },
            {
                  itemsname: "Nubia Red Magic 8 Pro 5G",
                  firm: "ZTE",
                  price: "16.950.000₫",
                  image: "../asset/database/products/NUB-RED-MAGIC-8-PRO-16-512GB-5G-SLVcopy_grande__10857.jpg"
            },
            {
                  itemsname: "OPPO Find N3 5G",
                  firm: "OPPO",
                  price: "44.990.000₫",
                  image: "../asset/database/products/Oppo-Find-N3-Flip-1-600x600.jpg"
            },
            {
                  itemsname: "Xiaomi 13 Pro 12GB 256GB",
                  firm: "Xiaomi",
                  price: "29.990.000₫",
                  image: "../asset/database/products/ava-13ultra-white.png"
            },
            {
                  itemsname: "Màn hình MSI OPTIX IPS 2K 240Hz G-Sync",
                  firm: "MSI",
                  price: "10.490.000₫",
                  image: "../asset/database/products/msi-optix-mag274qrx-27-inch-ips-gaming-monitor-240hz-cover-view.jpg"
            },
            {
                  itemsname: "Màn hình Asus ROG Strix IPS 270Hz 1ms G-Sync",
                  firm: "Asus",
                  price: "10.490.000₫",
                  image: "../asset/database/products/OIP.jpg"
            },
            {
                  itemsname: "Màn hình LG IPS 4K HDR USBC",
                  firm: "LG",
                  price: "13.890.000₫",
                  image: "../asset/database/products/-w-27-ips-4k-hdr-usbc-chuyen-do-hoa-3_4438a8c5f48f47948458652fe56e8bcc_851b3ecdfb79405d8fe636e53992ea92_master.jpg"
            },
            {
                  itemsname: "Màn Hình Dell UltraSharp U2520D IPS 2K",
                  firm: "Dell",
                  price: "10.290.000₫",
                  image: "../asset/database/products/38371_dell_u2520d_1_1.jpg"
            },
            {
                  itemsname: "Màn hình cong Samsung Odyssey G8 OLED 2K",
                  firm: "Samsung",
                  price: "39.990.000₫",
                  image: "../asset/database/products/samsungmhinh.jpg"
            },
            {
                  itemsname: "Màn hình Pro Display XDR",
                  firm: "Apple",
                  price: "151.699.000đ",
                  image: "../asset/database/products/60744_man_hinh_apple_pro_dislay_xdr_nano_texture_glass_soa_mwpf2sa_a_5.jpg"
            },
            {
                  itemsname: "Chuột Razer Basilisk V3 Pro",
                  firm: "Razer",
                  price: "4.590.000₫",
                  image: "../asset/database/products/67487_chuot_game_khong_day_razer_basilisk_v3_pro_ergonomic_wireless_usb_rgb_rz01_04620100_r3a1.jpg"
            },
            {
                  itemsname: "Chuột Logitech G502 X Plus LightSpeed White",
                  firm: "Logitech",
                  price: "3.890.000₫",
                  image: "../asset/database/products/logitechuot.jpg"
            },
            {
                  itemsname: "Chuột Glorious Model I Wireless 2 Matte White",
                  firm: "Glorious",
                  price: "2.860.000₫",
                  image: "../asset/database/products/gloriousmode.jpg"
            },
            {
                  itemsname: "Chuột Asus Rog Gladius III Wireless AimPoint",
                  firm: "Asus",
                  price: "3.650.000₫",
                  image: "../asset/database/products/Chuột Asus Rog Gladius III Wireless AimPoint EVA-02 Edition.jpg"
            },
            {
                  itemsname: "Chuột Cooler Master MM310 SF6 Chun Li",
                  firm: "Cooler Master",
                  price: "1.090.000₫",
                  image: "../asset/database/products/Chuột Cooler Master MM310 SF6 Chun Li.jpg"
            },
            {
                  itemsname: "Chuột Corsair Katar Pro Wireless",
                  firm: "Corsair",
                  price: "1.090.000₫",
                  image: "../asset/database/products/chuot-corsair-katar-pro-wireless-73921684823684.jpg"
            },
            {
                  itemsname: "Tai nghe HP HyperX Cloud III Wireless Red",
                  firm: "HP HyperX",
                  price: "4.390.000₫",
                  image: "../asset/database/products/tai-nghe-hyperx-cloud-iii-1.jpg"
            },
            {
                  itemsname: "Tai nghe không dây Asus ROG STRIX GO 2.4",
                  firm: "Asus",
                  price: "4.890.000₫",
                  image: "../asset/database/products/bc5cd8dd6fa5bdedbdd9641f8c9c73bf.jpg"
            },
            {
                  itemsname: "Tai nghe Corsair Virtuoso RGB Wireless Pearl",
                  firm: "Corsair",
                  price: "4.890.000₫",
                  image: "../asset/database/products/Tai nghe Corsair Virtuoso RGB Wireless Pearl.jpg"
            },
            {
                  itemsname: "Tai nghe Logitech G PRO X 2 LIGHTSPEED Black",
                  firm: "Logitech",
                  price: "6.199.000₫",
                  image: "../asset/database/products/tải xuống (1).jpg"
            },
            {
                  itemsname: "Tai nghe Razer Barracuda X 2022",
                  firm: "Razer",
                  price: "2.599.000₫",
                  image: "../asset/database/products/tải xuống (2).jpg"
            },
            {
                  itemsname: "Tai nghe Apple AirPods Max Pink",
                  firm: "Apple",
                  price: "13.990.000₫",
                  image: "../asset/database/products/Tai nghe Apple AirPods Max Pink.jpg"
            },
            {
                  itemsname: "Apple Magic Keyboard with Touch ID, Numeric Keypad",
                  firm: "Apple",
                  price: "4.490.000₫",
                  image: "../asset/database/products/mk2c3-211106013526.jpg"
            },
            {
                  itemsname: "Bàn phím MonsGeek M1 Silver Cream Yellow Pro",
                  firm: "Akko",
                  price: "2.799.000₫",
                  image: "../asset/database/products/Akko-3108S-Pink-RGB-PRO-ava-247x296.jpg"
            },
            {
                  itemsname: "Bàn phím Razer Blackwidow V4 75% Black Tactile",
                  firm: "Razer",
                  price: "5.090.000₫",
                  image: "../asset/database/products/75949_ban_phim_co_co_day_razer_blackwidow_v4_75_rgb_white_edition_2.jpg"
            },
            {
                  itemsname: "Bàn phím cơ Asus ROG Azoth",
                  firm: "Asus",
                  price: "7.990.000₫",
                  image: "../asset/database/products/3bd54e9c40f80dac90e67fec33aa8233.jpg"
            },
            {
                  itemsname: "Bàn phím Logitech G Pro X TKL Light Speed Tactile",
                  firm: "Logitech",
                  price: "4.790.000₫",
                  image: "../asset/database/products/76324_ban_phim_gaming_khong_day_logitech_pro_x_tkl_lightspeed_mau_trang_tactile_switch___920_012149_1.jpg"
            },
            {
                  itemsname: "Bàn phím Corsair K70 PRO Red Switch",
                  firm: "Corsair",
                  price: "3.490.000₫",
                  image: "../asset/database/products/41888_corsair_k70_rgb_pro__1_.jpg"
            },

      ],
      sale: [
            {
                  imageName: "",
                  image: "asset/database/sale/sale-slide-1.png",
                  link: "#"
            },
            {
                  imageName: "",
                  image: "asset/database/sale/sale-slide-7.png",
                  link: "#"

            },
            {
                  imageName: "",
                  image: "asset/database/sale/sale-slide-3.png",
                  link: "#"

            },
            {
                  imageName: "",
                  image: "asset/database/sale/sale-slide-4.png",
                  link: "#"

            },
            {
                  imageName: "",
                  image: "asset/database/sale/sale-slide-5.png",
                  link: "#"

            },
            {
                  imageName: "",
                  image: "asset/database/sale/sale-slide-6.png",
                  link: "#"
            }
      ],
      sale_card: [
            {
                  imageName: "",
                  image: "asset/database/sale/sub-sale1.png",
                  link: "#"
            },
            {
                  imageName: "",
                  image: "asset/database/sale/sub-sale2.png",
                  link: "#"
            },
            {
                  imageName: "",
                  image: "asset/database/sale/sub-sale3.png",
                  link: "#"
            },
            {
                  imageName: "",
                  image: "asset/database/sale/sale-slide-2.png",
                  link: "#"
            }
      ]

}


let count = 0

for (let slider of products.sale) {
      let sale = document.createElement("div")
      sale.classList.add("carousel-item")

      if (count == 0) {
            sale.classList.add("active")
      }
      count += 1

      let sale_img_link = document.createElement("a")
      sale_img_link.setAttribute("href", slider.link)
      let sale_img = document.createElement("img")
      sale_img.src = slider.image
      sale_img.classList.add("d-block")
      sale_img.classList.add("w-100")

      sale_img_link.appendChild(sale_img)
      sale.appendChild(sale_img_link)


      document.getElementById("sale_carousel").appendChild(sale)
}

for (let s of products.sale_card) {
      let sub_sale_card_link = document.createElement("a")
      sub_sale_card_link.setAttribute("href", s.link)
      let sub_sale_card = document.createElement("img")
      sub_sale_card.src = s.image

      sub_sale_card_link.appendChild(sub_sale_card)
      document.getElementById("sale").appendChild(sub_sale_card_link)
}
// Get the products     
let getLocal = localStorage.getItem("products")
let parsedLocal = JSON.parse(getLocal)
for (let i of parsedLocal.data) {
      let product_card = document.createElement("div")
      product_card.classList.add("card")
      product_card.classList.add("col-3")
      product_card.classList.add("card-res")


      let product_image = document.createElement("img")
      product_image.src = i.image
      product_image.classList.add("card-img-top")
      product_card.appendChild(product_image)

      let product_body = document.createElement("div")
      product_body.classList.add("card-body")
      product_card.appendChild(product_body)

      let product_name = document.createElement("h5")
      product_name.classList.add("card-title")
      product_name.innerText = i.itemsname
      product_body.appendChild(product_name)

      let product_info = document.createElement("div")
      product_info.classList.add("product-info")
      product_body.appendChild(product_info)

      let product_firm = document.createElement("p")
      product_firm.classList.add("firm")
      product_firm.innerText = i.firm
      product_info.appendChild(product_firm)

      let product_price = document.createElement("p")
      product_price.classList.add("price")
      product_price.innerHTML = i.price
      product_info.appendChild(product_price)

      let buy_btn = document.createElement("a")
      buy_btn.setAttribute("href", "#")
      buy_btn.classList.add("btn")
      buy_btn.classList.add("btn-primary")
      buy_btn.classList.add("buy-btn")
      buy_btn.innerText = "Chi tiết"

      product_info.appendChild(buy_btn)

      let add_cart_btn = document.createElement("a")
      add_cart_btn.classList.add("btn")
      add_cart_btn.classList.add("btn-primary")
      add_cart_btn.setAttribute("id", "add-cart-btn")
      add_cart_btn.innerText = "Thêm vào giỏ hàng"

      product_info.appendChild(add_cart_btn)



      document.getElementById("products").appendChild(product_card)
}

function find() {
      //document.getElementById("products").innerHTML=
      let search_value = document.getElementById("search").value.toLowerCase()
      let search_value_pc = document.getElementById("search-pc").value.toLowerCase()
      console.log(search_value)
      document.getElementById("products").innerHTML = ""
      document.getElementById("title").innerText = 'Tìm kiếm'
      for (let i of products.data) {
            if (i.itemsname.toLowerCase().indexOf(search_value) != -1) {
                  let product_card = document.createElement("div")
                  product_card.classList.add("card")
                  product_card.classList.add("col-3")
                  product_card.classList.add("card-res")


                  let product_image = document.createElement("img")
                  product_image.src = i.image
                  product_image.classList.add("card-img-top")
                  product_card.appendChild(product_image)

                  let product_body = document.createElement("div")
                  product_body.classList.add("card-body")
                  product_card.appendChild(product_body)

                  let product_name = document.createElement("h5")
                  product_name.classList.add("card-title")
                  product_name.innerText = i.itemsname
                  product_body.appendChild(product_name)

                  let product_info = document.createElement("div")
                  product_info.classList.add("product-info")
                  product_body.appendChild(product_info)

                  let product_firm = document.createElement("p")
                  product_firm.classList.add("firm")
                  product_firm.innerText = i.firm
                  product_info.appendChild(product_firm)

                  let product_price = document.createElement("p")
                  product_price.classList.add("price")
                  product_price.innerHTML = i.price
                  product_info.appendChild(product_price)

                  let buy_btn = document.createElement("a")
                  buy_btn.setAttribute("href", "#")
                  buy_btn.classList.add("btn")
                  buy_btn.classList.add("btn-primary")
                  buy_btn.classList.add("buy-btn")
                  buy_btn.innerText = "Chi tiết"

                  product_info.appendChild(buy_btn)



                  document.getElementById("products").appendChild(product_card)
            }

      }
}

function find_pc() {
      //document.getElementById("products").innerHTML=
      let search_value_pc = document.getElementById("search-pc").value.toLowerCase()
      console.log(search_value_pc)
      document.getElementById("products").innerHTML = ""
      document.getElementById("title").innerText = 'Tìm kiếm'
      for (let i of products.data) {
            if (i.itemsname.toLowerCase().indexOf(search_value_pc) != -1) {
                  let product_card = document.createElement("div")
                  product_card.classList.add("card")
                  product_card.classList.add("col-3")
                  product_card.classList.add("card-res")


                  let product_image = document.createElement("img")
                  product_image.src = i.image
                  product_image.classList.add("card-img-top")
                  product_card.appendChild(product_image)

                  let product_body = document.createElement("div")
                  product_body.classList.add("card-body")
                  product_card.appendChild(product_body)

                  let product_name = document.createElement("h5")
                  product_name.classList.add("card-title")
                  product_name.innerText = i.itemsname
                  product_body.appendChild(product_name)

                  let product_info = document.createElement("div")
                  product_info.classList.add("product-info")
                  product_body.appendChild(product_info)

                  let product_firm = document.createElement("p")
                  product_firm.classList.add("firm")
                  product_firm.innerText = i.firm
                  product_info.appendChild(product_firm)

                  let product_price = document.createElement("p")
                  product_price.classList.add("price")
                  product_price.innerHTML = i.price
                  product_info.appendChild(product_price)

                  let buy_btn = document.createElement("a")
                  buy_btn.setAttribute("href", "#")
                  buy_btn.classList.add("btn")
                  buy_btn.classList.add("btn-primary")
                  buy_btn.classList.add("buy-btn")
                  buy_btn.innerText = "Chi tiết"

                  product_info.appendChild(buy_btn)



                  document.getElementById("products").appendChild(product_card)
            }

      }
}

