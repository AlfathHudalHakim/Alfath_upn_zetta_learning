function bookPurchasing(buku, disc, tax, stock, order, bulan)
 {
     let result = 0;
     for(let i = 0; i < order; i++)
     {
        
         if(buku && buku.harga && buku.judul && (i < stock))
         {
             const hrg = buku.harga;
             const jlhDsc  = hrg *(disc/100);
             const hargaDsc = hrg - jlhDsc;
             const pjk = hargaDsc * (tax/100);
             const hargaPjk = hargaDsc - pjk;
             const hargaTtl = order * hargaPjk;
             result += hargaPjk;

             price = hrg;
             amntDsc =  hargaDsc;
             amntPjk =  hargaPjk;
             Total   =  hargaTtl;

 

         }
         else {
            console.log('Stok Buku ',buku.judul,' Kosong');
            break;
         }
         
    }

    console.group();
    console.log('Judul Buku                    :', buku.judul);
    console.log('Harga Barang                  : Rp.', price);
    console.log('Discount                      :', disc,'%');
    console.log('pajak                         :', tax,'%');
    console.log('Harga Barang setelah discount : Rp.', amntDsc);
    console.log('Harga Barang dipotong pajak   : Rp.', amntPjk);
    console.log('Total Pembelian               : Rp.', order);
    console.log('Harga total                   : Rp.', Total);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.groupEnd();
    
    return result;
 }

 function Pengkreditan(result, cicil)
 {
    kreditPerBulan = result/cicil;
    PembayaranKredit = [];
    for(let i = 0; i < cicil; i++)
    {
        PembayaranKredit.push(
            {
                cicil: i+1,
                harga: kreditPerBulan

            }
        )
    }
    return PembayaranKredit;
 }

 console.log(Pengkreditan(bookPurchasing({judul: 'terbang', harga: 10000, printing_status: true},10, 10, 5, 4), 12));
 console.log(Pengkreditan(bookPurchasing({judul: 'Sherlock Holmes', harga: 80000, printing_status: true},10, 10, 5, 3), 12));
 console.log(Pengkreditan(bookPurchasing({judul: 'Detective Conan', harga: 95000, printing_status: true},10, 10, 5, 5), 12));
 console.log(Pengkreditan(bookPurchasing({judul: 'Naruto', harga: 18000, printing_status: true},10, 10, 5, 2), 12));
 console.log(Pengkreditan(bookPurchasing({judul: 'Overlord', harga: 50000, printing_status: true},10, 10, 5, 1), 12));
 console.log(Pengkreditan(bookPurchasing({judul: 'Harry Potter', harga: 100000, printing_status: true},10, 10, 5, 10), 12));
 console.log(Pengkreditan(bookPurchasing({judul: 'Lord of The Ring', harga: 120000, printing_status: true},10, 10, 5, 8), 12));
 console.log(Pengkreditan(bookPurchasing({judul: 'Narnia', harga: 97000, printing_status: true}, 10, 10, 5, 2), 12));
